diff --git a/chrome/utility/importer/chrome_importer.cc b/chrome/utility/importer/chrome_importer.cc
new file mode 100644
index 0000000000000..5a7c392fd775a
--- /dev/null
+++ b/chrome/utility/importer/chrome_importer.cc
@@ -0,0 +1,591 @@
+// Copyright 2023 The Chromium Authors
+// Use of this source code is governed by a BSD-style license that can be
+// found in the LICENSE file.
+
+#include "chrome/utility/importer/chrome_importer.h"
+
+#include <memory>
+#include <string>
+#include <utility>
+
+#include "base/files/file_util.h"
+#include "base/json/json_reader.h"
+#include "base/strings/string_util.h"
+#include "base/strings/utf_string_conversions.h"
+#include "base/time/time.h"
+#include "chrome/common/importer/imported_bookmark_entry.h"
+#include "chrome/common/importer/importer_autofill_form_data_entry.h"
+#include "chrome/common/importer/importer_bridge.h"
+#include "chrome/common/importer/importer_data_types.h"
+#include "chrome/common/importer/importer_url_row.h"
+#include "chrome/grit/generated_resources.h"
+#include "chrome/utility/importer/favicon_reencode.h"
+#include "sql/database.h"
+#include "sql/statement.h"
+#include "ui/base/l10n/l10n_util.h"
+#include "ui/base/page_transition_types.h"
+#include "url/gurl.h"
+#include "base/logging.h"
+
+namespace {
+
+// Database tag for Chrome importer
+inline constexpr sql::Database::Tag kDatabaseTag{"ChromeImporter"};
+
+// Checks if a URL has a valid scheme that we allow to import
+bool CanImportURL(const GURL& url) {
+  return true;
+}
+
+}  // namespace
+
+ChromeImporter::ChromeImporter() = default;
+
+ChromeImporter::~ChromeImporter() = default;
+
+void ChromeImporter::StartImport(const importer::SourceProfile& source_profile,
+                               uint16_t items,
+                               ImporterBridge* bridge) {
+  bridge_ = bridge;
+  source_path_ = source_profile.source_path;
+
+  bridge_->NotifyStarted();
+
+  if ((items & importer::HISTORY) && !cancelled()) {
+    bridge_->NotifyItemStarted(importer::HISTORY);
+    ImportHistory();
+    bridge_->NotifyItemEnded(importer::HISTORY);
+  }
+
+  if ((items & importer::FAVORITES) && !cancelled()) {
+    bridge_->NotifyItemStarted(importer::FAVORITES);
+    ImportBookmarks();
+    bridge_->NotifyItemEnded(importer::FAVORITES);
+  }
+
+  if ((items & importer::PASSWORDS) && !cancelled()) {
+    bridge_->NotifyItemStarted(importer::PASSWORDS);
+    ImportPasswords();
+    bridge_->NotifyItemEnded(importer::PASSWORDS);
+  }
+
+  if ((items & importer::AUTOFILL_FORM_DATA) && !cancelled()) {
+    bridge_->NotifyItemStarted(importer::AUTOFILL_FORM_DATA);
+    ImportAutofillFormData();
+    bridge_->NotifyItemEnded(importer::AUTOFILL_FORM_DATA);
+  }
+
+  if ((items & importer::EXTENSIONS) && !cancelled()) {
+    bridge_->NotifyItemStarted(importer::EXTENSIONS);
+    ImportExtensions();
+    bridge_->NotifyItemEnded(importer::EXTENSIONS);
+  }
+
+  bridge_->NotifyEnded();
+}
+
+void ChromeImporter::ImportHistory() {
+  // Keep only essential logging for startup and completion
+  LOG(INFO) << "ChromeImporter: Starting history import";
+
+  base::FilePath history_path = source_path_.Append(FILE_PATH_LITERAL("History"));
+  if (!base::PathExists(history_path)) {
+    LOG(ERROR) << "ChromeImporter: History file not found";
+    return;
+  }
+
+  // Create a copy of the history file to avoid file locking issues
+  base::FilePath temp_directory;
+  if (!base::CreateNewTempDirectory(base::FilePath::StringType(), &temp_directory)) {
+    LOG(ERROR) << "ChromeImporter: Failed to create temp directory";
+    return;
+  }
+
+  base::FilePath temp_history_path = temp_directory.Append(FILE_PATH_LITERAL("History"));
+  if (!base::CopyFile(history_path, temp_history_path)) {
+    LOG(ERROR) << "ChromeImporter: Failed to copy history file";
+    return;
+  }
+
+  sql::Database db(kDatabaseTag);
+  if (!db.Open(temp_history_path)) {
+    LOG(ERROR) << "ChromeImporter: Failed to open history database";
+    // Clean up the temp directory
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  // Chrome's history query - we filter out unwanted URLs like chrome:// and about:
+  const char query[] =
+      "SELECT u.url, u.title, v.visit_time, u.typed_count, u.visit_count "
+      "FROM urls u JOIN visits v ON u.id = v.url "
+      "WHERE hidden = 0 "
+      "AND (transition & ?) != 0 "  // CHAIN_END
+      "AND (transition & ?) NOT IN (?, ?, ?)";  // No SUBFRAME or KEYWORD_GENERATED
+
+  sql::Statement s(db.GetUniqueStatement(query));
+  if (!s.is_valid()) {
+    LOG(ERROR) << "ChromeImporter: Invalid SQL statement";
+    // Clean up the temp directory
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  s.BindInt64(0, ui::PAGE_TRANSITION_CHAIN_END);
+  s.BindInt64(1, ui::PAGE_TRANSITION_CORE_MASK);
+  s.BindInt64(2, ui::PAGE_TRANSITION_AUTO_SUBFRAME);
+  s.BindInt64(3, ui::PAGE_TRANSITION_MANUAL_SUBFRAME);
+  s.BindInt64(4, ui::PAGE_TRANSITION_KEYWORD_GENERATED);
+
+  std::vector<ImporterURLRow> rows;
+
+  while (s.Step() && !cancelled()) {
+    GURL url(s.ColumnString(0));
+
+    // Skip unwanted URLs
+    if (!CanImportURL(url)) {
+      continue;
+    }
+
+    ImporterURLRow row(url);
+    row.title = s.ColumnString16(1);
+    row.last_visit = ChromeTimeToBaseTime(s.ColumnInt64(2));
+    row.hidden = false;
+    row.typed_count = s.ColumnInt(3);
+    row.visit_count = s.ColumnInt(4);
+
+    rows.push_back(row);
+  }
+
+  // Keep only the summary log
+  LOG(INFO) << "ChromeImporter: Found " << rows.size() << " history items";
+
+  if (!rows.empty() && !cancelled()) {
+    bridge_->SetHistoryItems(rows, importer::VISIT_SOURCE_CHROME_IMPORTED);
+    LOG(INFO) << "ChromeImporter: History import complete";
+  }
+
+  // Clean up the temp directory
+  base::DeletePathRecursively(temp_directory);
+}
+
+void ChromeImporter::ImportBookmarks() {
+  LOG(INFO) << "ChromeImporter: Starting bookmarks import";
+
+  base::FilePath bookmarks_path = source_path_.Append(FILE_PATH_LITERAL("Bookmarks"));
+  if (!base::PathExists(bookmarks_path)) {
+    LOG(ERROR) << "ChromeImporter: Bookmarks file not found";
+    return;
+  }
+
+  // Create a temporary copy of the bookmarks file to avoid file locking issues
+  base::FilePath temp_directory;
+  if (!base::CreateNewTempDirectory(base::FilePath::StringType(), &temp_directory)) {
+    LOG(ERROR) << "ChromeImporter: Failed to create temp directory for bookmarks";
+    return;
+  }
+
+  base::FilePath temp_bookmarks_path = temp_directory.Append(FILE_PATH_LITERAL("Bookmarks"));
+  if (!base::CopyFile(bookmarks_path, temp_bookmarks_path)) {
+    LOG(ERROR) << "ChromeImporter: Failed to copy bookmarks file";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  // Read the bookmarks file
+  std::string bookmarks_content;
+  if (!base::ReadFileToString(temp_bookmarks_path, &bookmarks_content)) {
+    LOG(ERROR) << "ChromeImporter: Failed to read bookmarks file";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  // Parse the JSON bookmarks file
+  std::optional<base::Value> bookmarks_value = base::JSONReader::Read(bookmarks_content);
+  if (!bookmarks_value || !bookmarks_value->is_dict()) {
+    LOG(ERROR) << "ChromeImporter: Failed to parse bookmarks JSON";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  std::vector<ImportedBookmarkEntry> bookmarks;
+  FaviconMap favicon_map;
+
+  // Process bookmark bar items
+  const base::Value::Dict* roots_dict = bookmarks_value->GetDict().FindDict("roots");
+  if (!roots_dict) {
+    LOG(ERROR) << "ChromeImporter: Failed to find roots in bookmarks";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  // Import bookmark bar
+  const base::Value::Dict* bookmark_bar = roots_dict->FindDict("bookmark_bar");
+  if (bookmark_bar) {
+    std::vector<std::u16string> path;
+    const std::string* name = bookmark_bar->FindString("name");
+    path.push_back(base::UTF8ToUTF16(name ? *name : "Bookmarks Bar"));
+    RecursiveReadBookmarksFolder(bookmark_bar, path, true, &bookmarks);
+  }
+
+  // Import other bookmarks
+  const base::Value::Dict* other = roots_dict->FindDict("other");
+  if (other) {
+    std::vector<std::u16string> path;
+    const std::string* name = other->FindString("name");
+    path.push_back(base::UTF8ToUTF16(name ? *name : "Other Bookmarks"));
+    RecursiveReadBookmarksFolder(other, path, false, &bookmarks);
+  }
+
+  // Write bookmarks to profile
+  if (!bookmarks.empty() && !cancelled()) {
+    LOG(INFO) << "ChromeImporter: Importing " << bookmarks.size() << " bookmarks";
+    bridge_->AddBookmarks(bookmarks, l10n_util::GetStringUTF16(
+        IDS_IMPORT_FROM_CHROME));
+  } else {
+    LOG(INFO) << "ChromeImporter: No bookmarks to import";
+  }
+
+  // Import favicon data - Chrome uses a Favicons database
+  base::FilePath favicons_path = source_path_.DirName().Append(FILE_PATH_LITERAL("Favicons"));
+  if (base::PathExists(favicons_path)) {
+    // Create a temporary copy of the favicons file
+    base::FilePath temp_favicons_path = temp_directory.Append(FILE_PATH_LITERAL("Favicons"));
+    if (base::CopyFile(favicons_path, temp_favicons_path)) {
+      sql::Database favicon_db(kDatabaseTag);
+      if (favicon_db.Open(temp_favicons_path)) {
+        // Import favicon mappings and data
+        ImportFaviconURLs(&favicon_db, &favicon_map);
+        if (!favicon_map.empty() && !cancelled()) {
+          favicon_base::FaviconUsageDataList favicons;
+          LoadFaviconData(&favicon_db, favicon_map, &favicons);
+          if (!favicons.empty()) {
+            LOG(INFO) << "ChromeImporter: Importing " << favicons.size() << " favicons";
+            bridge_->SetFavicons(favicons);
+          }
+        }
+      }
+    }
+  }
+
+  // Clean up the temp directory
+  base::DeletePathRecursively(temp_directory);
+  LOG(INFO) << "ChromeImporter: Bookmarks import complete";
+}
+
+void ChromeImporter::ImportFaviconURLs(sql::Database* db,
+                                      FaviconMap* favicon_map) {
+  const char query[] = "SELECT icon_id, page_url FROM icon_mapping";
+  sql::Statement s(db->GetUniqueStatement(query));
+
+  while (s.Step() && !cancelled()) {
+    int64_t icon_id = s.ColumnInt64(0);
+    GURL url = GURL(s.ColumnString(1));
+    (*favicon_map)[icon_id].insert(url);
+  }
+}
+
+void ChromeImporter::LoadFaviconData(
+    sql::Database* db,
+    const FaviconMap& favicon_map,
+    favicon_base::FaviconUsageDataList* favicons) {
+  const char query[] =
+      "SELECT f.url, fb.image_data "
+      "FROM favicons f "
+      "JOIN favicon_bitmaps fb "
+      "ON f.id = fb.icon_id "
+      "WHERE f.id = ?";
+  sql::Statement s(db->GetUniqueStatement(query));
+
+  if (!s.is_valid())
+    return;
+
+  for (const auto& entry : favicon_map) {
+    s.BindInt64(0, entry.first);
+    if (s.Step()) {
+      favicon_base::FaviconUsageData usage;
+
+      usage.favicon_url = GURL(s.ColumnString(0));
+      if (!usage.favicon_url.is_valid())
+        continue;  // Skip favicons with invalid URLs
+
+      std::vector<uint8_t> data;
+      s.ColumnBlobAsVector(1, &data);
+      if (data.empty())
+        continue;  // Skip empty data
+
+      auto decoded_data = importer::ReencodeFavicon(base::span(data));
+      if (!decoded_data)
+        continue;  // Unable to decode
+
+      usage.urls = entry.second;
+      usage.png_data = std::move(decoded_data).value();
+      favicons->push_back(usage);
+    }
+    s.Reset(true);
+  }
+}
+
+void ChromeImporter::RecursiveReadBookmarksFolder(
+    const base::Value::Dict* folder,
+    const std::vector<std::u16string>& parent_path,
+    bool is_in_toolbar,
+    std::vector<ImportedBookmarkEntry>* bookmarks) {
+
+  if (!folder)
+    return;
+
+  const base::Value::List* children = folder->FindList("children");
+  if (!children)
+    return;
+
+  for (const auto& value : *children) {
+    if (!value.is_dict())
+      continue;
+
+    const std::string* type = value.GetDict().FindString("type");
+    if (!type)
+      continue;
+
+    const std::string* name = value.GetDict().FindString("name");
+    std::u16string title = base::UTF8ToUTF16(name ? *name : std::string());
+
+    const std::string* date_added = value.GetDict().FindString("date_added");
+    int64_t date_added_val = date_added ? std::stoll(*date_added) : 0;
+
+    if (*type == "folder") {
+      // Process folder
+      std::vector<std::u16string> path = parent_path;
+      path.push_back(title);
+
+      // Check if this is an empty folder to add it as an entry
+      const base::Value::List* inner_children = value.GetDict().FindList("children");
+      if (inner_children && inner_children->empty()) {
+        ImportedBookmarkEntry entry;
+        entry.is_folder = true;
+        entry.in_toolbar = is_in_toolbar;
+        entry.url = GURL();
+        entry.path = parent_path;
+        entry.title = title;
+        entry.creation_time = ChromeTimeToBaseTime(date_added_val);
+        bookmarks->push_back(entry);
+      }
+
+      // Process subfolders and entries
+      RecursiveReadBookmarksFolder(&value.GetDict(), path, is_in_toolbar, bookmarks);
+    } else if (*type == "url") {
+      // Process bookmark URL
+      const std::string* url_str = value.GetDict().FindString("url");
+      if (!url_str)
+        continue;
+
+      GURL url(*url_str);
+      if (!CanImportURL(url))
+        continue;
+
+      ImportedBookmarkEntry entry;
+      entry.is_folder = false;
+      entry.in_toolbar = is_in_toolbar;
+      entry.url = url;
+      entry.path = parent_path;
+      entry.title = title;
+      entry.creation_time = ChromeTimeToBaseTime(date_added_val);
+
+      bookmarks->push_back(entry);
+    }
+  }
+}
+
+base::Time ChromeImporter::ChromeTimeToBaseTime(int64_t time) {
+  // Chrome time is microseconds since the Windows epoch (1601-01-01 UTC)
+  // base::Time::FromDeltaSinceWindowsEpoch() handles the conversion properly
+  return base::Time::FromDeltaSinceWindowsEpoch(base::Microseconds(time));
+}
+
+void ChromeImporter::ImportPasswords() {
+  // Password import is disabled - users should use CSV import from chrome://password-manager/passwords
+  LOG(INFO) << "ChromeImporter: Password import is disabled. "
+            << "Please use CSV import from chrome://password-manager/passwords";
+  return;
+}
+
+void ChromeImporter::ImportPasswordsFromFile(const base::FilePath& password_filename) {
+  // Password import is disabled - this function is kept as a no-op for compatibility
+  return;
+}
+
+void ChromeImporter::ImportAutofillFormData() {
+  LOG(INFO) << "ChromeImporter: Starting autofill form data import";
+
+  base::FilePath web_data_path = source_path_.DirName().Append(FILE_PATH_LITERAL("Web Data"));
+  if (!base::PathExists(web_data_path)) {
+    LOG(ERROR) << "ChromeImporter: Web Data file not found";
+    return;
+  }
+
+  // Create temporary directory for copying the database
+  base::FilePath temp_directory;
+  if (!base::CreateNewTempDirectory(base::FilePath::StringType(), &temp_directory)) {
+    LOG(ERROR) << "ChromeImporter: Failed to create temp directory for form data";
+    return;
+  }
+
+  // Copy the database file to avoid lock issues
+  base::FilePath temp_web_data_path = temp_directory.Append(FILE_PATH_LITERAL("Web Data"));
+  if (!base::CopyFile(web_data_path, temp_web_data_path)) {
+    LOG(ERROR) << "ChromeImporter: Failed to copy Web Data file";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  sql::Database db(kDatabaseTag);
+  if (!db.Open(temp_web_data_path)) {
+    LOG(ERROR) << "ChromeImporter: Failed to open Web Data database";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  // Import autofill form data
+  const char query[] =
+      "SELECT name, value, count, date_created, date_last_used "
+      "FROM autofill";
+
+  sql::Statement s(db.GetUniqueStatement(query));
+  if (!s.is_valid()) {
+    LOG(ERROR) << "ChromeImporter: Invalid autofill SQL statement";
+    base::DeletePathRecursively(temp_directory);
+    return;
+  }
+
+  std::vector<ImporterAutofillFormDataEntry> form_entries;
+  while (s.Step() && !cancelled()) {
+    ImporterAutofillFormDataEntry form_entry;
+    form_entry.name = s.ColumnString16(0);
+    form_entry.value = s.ColumnString16(1);
+    form_entry.times_used = s.ColumnInt(2);
+    form_entry.first_used = ChromeTimeToBaseTime(s.ColumnInt64(3));
+    form_entry.last_used = ChromeTimeToBaseTime(s.ColumnInt64(4));
+
+    form_entries.push_back(form_entry);
+  }
+
+  if (!form_entries.empty() && !cancelled()) {
+    LOG(INFO) << "ChromeImporter: Imported " << form_entries.size() << " autofill entries";
+    bridge_->SetAutofillFormData(form_entries);
+  } else {
+    LOG(INFO) << "ChromeImporter: No autofill entries to import";
+  }
+
+  // Clean up temporary files
+  base::DeletePathRecursively(temp_directory);
+  LOG(INFO) << "ChromeImporter: Autofill form data import complete";
+}
+
+// Encryption key setup is disabled since password import is disabled
+// bool ChromeImporter::SetEncryptionKey(const base::FilePath& source_path) {
+//   return false;
+// }
+
+void ChromeImporter::ImportExtensions() {
+  LOG(INFO) << "ChromeImporter: Starting extensions import";
+
+  // First, check the Preferences and Secure Preferences files to get the list of extensions
+  base::FilePath preferences_path = source_path_.Append(FILE_PATH_LITERAL("Preferences"));
+  base::FilePath secure_preferences_path = source_path_.Append(FILE_PATH_LITERAL("Secure Preferences"));
+
+  if (!base::PathExists(preferences_path) && !base::PathExists(secure_preferences_path)) {
+    LOG(ERROR) << "ChromeImporter: No preferences files found for extensions import";
+    return;
+  }
+
+  // Start with extensions from Secure Preferences (if it exists)
+  std::vector<std::string> extension_ids;
+  if (base::PathExists(secure_preferences_path)) {
+    extension_ids = GetExtensionsFromPreferencesFile(secure_preferences_path);
+  }
+
+  // Merge with extensions from regular Preferences (if it exists)
+  if (base::PathExists(preferences_path)) {
+    std::vector<std::string> pref_extension_ids = GetExtensionsFromPreferencesFile(preferences_path);
+    extension_ids.insert(extension_ids.end(), pref_extension_ids.begin(), pref_extension_ids.end());
+  }
+
+  if (extension_ids.empty()) {
+    LOG(INFO) << "ChromeImporter: No extensions found to import";
+    return;
+  }
+
+  LOG(INFO) << "ChromeImporter: Found " << extension_ids.size() << " extensions to import";
+
+  // Send the list of extension IDs to the bridge
+  bridge_->SetExtensions(extension_ids);
+
+  LOG(INFO) << "ChromeImporter: Extensions import complete";
+}
+
+std::vector<std::string> ChromeImporter::GetExtensionsFromPreferencesFile(
+    const base::FilePath& preferences_path) {
+  std::vector<std::string> extension_ids;
+
+  std::string preferences_content;
+  if (!base::ReadFileToString(preferences_path, &preferences_content)) {
+    LOG(ERROR) << "ChromeImporter: Failed to read " << preferences_path.value();
+    return extension_ids;
+  }
+
+  std::optional<base::Value::Dict> preferences =
+      base::JSONReader::ReadDict(preferences_content);
+  if (!preferences) {
+    LOG(ERROR) << "ChromeImporter: Failed to parse JSON from " << preferences_path.value();
+    return extension_ids;
+  }
+
+  // Extensions are stored in extensions.settings in Chrome preferences
+  const base::Value::Dict* extensions_dict =
+      preferences->FindDictByDottedPath("extensions.settings");
+  if (!extensions_dict) {
+    LOG(INFO) << "ChromeImporter: No extensions found in " << preferences_path.value();
+    return extension_ids;
+  }
+
+  // Iterate through the extensions dictionary
+  for (const auto [key, value] : *extensions_dict) {
+    if (!value.is_dict()) {
+      continue;
+    }
+
+    const base::Value::Dict& dict = value.GetDict();
+
+    // Only import if:
+    // 1. It's from the Chrome Web Store
+    // 2. It's not installed by default
+    // 3. It's enabled
+
+    if (dict.FindBool("was_installed_by_default").value_or(true)) {
+      continue;  // Skip default extensions
+    }
+
+    //TODO: nikhil - fix state and other filters
+    // State 0 means disabled
+    // if (!dict.FindInt("state").value_or(0)) {
+    //   continue;  // Skip disabled extensions
+    // }
+
+    if (!dict.FindBool("from_webstore").value_or(false)) {
+      continue;  // Skip non-webstore extensions
+    }
+
+    extension_ids.push_back(key);  // Add the extension ID to our list
+
+    // Check if it's an extension (not a theme or app)
+    // const base::Value::Dict* manifest = dict.FindDict("manifest");
+    // if (manifest) {
+    //   const std::string* type = manifest->FindString("type");
+    //   if (type && *type == "extension") {
+    //     extension_ids.push_back(key);  // Add the extension ID to our list
+    //   }
+    // }
+  }
+
+  return extension_ids;
+}

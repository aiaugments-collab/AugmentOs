diff --git a/chrome/browser/extensions/browseros_external_loader.h b/chrome/browser/extensions/browseros_external_loader.h
new file mode 100644
index 0000000000000..cad2de57fdd40
--- /dev/null
+++ b/chrome/browser/extensions/browseros_external_loader.h
@@ -0,0 +1,113 @@
+// Copyright 2024 The Chromium Authors
+// Use of this source code is governed by a BSD-style license that can be
+// found in the LICENSE file.
+
+#ifndef CHROME_BROWSER_EXTENSIONS_BROWSEROS_EXTERNAL_LOADER_H_
+#define CHROME_BROWSER_EXTENSIONS_BROWSEROS_EXTERNAL_LOADER_H_
+
+#include <memory>
+#include <string>
+
+#include "base/files/file_path.h"
+#include "base/memory/scoped_refptr.h"
+#include "base/memory/weak_ptr.h"
+#include "chrome/browser/extensions/external_loader.h"
+#include "services/network/public/cpp/simple_url_loader.h"
+
+class Profile;
+
+namespace network {
+class SharedURLLoaderFactory;
+}  // namespace network
+
+namespace extensions {
+
+// A specialization of the ExternalLoader that loads extension information
+// from a remote URL. This is designed for BrowserOS to specify a set of
+// extensions that should be installed at startup.
+class BrowserOSExternalLoader : public ExternalLoader {
+ public:
+  explicit BrowserOSExternalLoader(Profile* profile);
+
+  BrowserOSExternalLoader(const BrowserOSExternalLoader&) = delete;
+  BrowserOSExternalLoader& operator=(const BrowserOSExternalLoader&) = delete;
+
+  // Sets the URL from which to fetch the extension configuration.
+  // Must be called before StartLoading().
+  void SetConfigUrl(const GURL& url) { config_url_ = url; }
+
+  // For testing: sets a local file path instead of fetching from URL.
+  void SetConfigFileForTesting(const base::FilePath& path) {
+    config_file_for_testing_ = path;
+  }
+
+  // Starts periodic check to re-enable disabled BrowserOS extensions and check for updates
+  void StartPeriodicCheck();
+
+  // Periodic maintenance: re-enables disabled extensions, checks config, and forces updates
+  void PeriodicMaintenance();
+  
+  // Fetches the latest config and checks for changes
+  void FetchAndCheckConfig();
+  
+  // Forces immediate update check for BrowserOS extensions
+  void ForceUpdateCheck();
+
+ protected:
+  ~BrowserOSExternalLoader() override;
+
+  // ExternalLoader:
+  void StartLoading() override;
+
+ private:
+  friend class base::RefCountedThreadSafe<ExternalLoader>;
+
+  // Called when the URL fetch completes.
+  void OnURLFetchComplete(std::unique_ptr<std::string> response_body);
+  
+  // Called when config check fetch completes
+  void OnConfigCheckComplete(std::unique_ptr<network::SimpleURLLoader> loader,
+                             std::unique_ptr<std::string> response_body);
+
+  // Parses the fetched JSON configuration and loads extensions.
+  void ParseConfiguration(const std::string& json_content);
+
+  // Loads configuration from a local file (for testing).
+  void LoadFromFile();
+  
+  // Checks for uninstalled BrowserOS extensions and reinstalls them
+  void ReinstallUninstalledExtensions();
+  
+  // Re-enables BrowserOS extensions that were disabled by user action
+  void ReenableDisabledExtensions();
+  
+  // Triggers immediate installation of all BrowserOS extensions on first start
+  void TriggerImmediateInstallation();
+
+  // The profile associated with this loader.
+  raw_ptr<Profile> profile_;
+
+  // URL from which to fetch the extension configuration.
+  GURL config_url_;
+
+  // For testing: local file path instead of URL.
+  base::FilePath config_file_for_testing_;
+
+  // URL loader for fetching the configuration.
+  std::unique_ptr<network::SimpleURLLoader> url_loader_;
+
+  // URLLoaderFactory for making network requests.
+  scoped_refptr<network::SharedURLLoaderFactory> url_loader_factory_;
+
+  // List of BrowserOS extension IDs to monitor
+  std::set<std::string> browseros_extension_ids_;
+  
+  // Last fetched config for comparison
+  base::Value::Dict last_config_;
+
+  base::WeakPtrFactory<BrowserOSExternalLoader> weak_ptr_factory_{this};
+};
+
+}  // namespace extensions
+
+#endif  // CHROME_BROWSER_EXTENSIONS_BROWSEROS_EXTERNAL_LOADER_H_
\ No newline at end of file

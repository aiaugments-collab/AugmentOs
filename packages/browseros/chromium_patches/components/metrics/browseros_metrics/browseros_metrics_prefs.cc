diff --git a/components/metrics/browseros_metrics/browseros_metrics_prefs.cc b/components/metrics/browseros_metrics/browseros_metrics_prefs.cc
new file mode 100644
index 0000000000000..87f898f345e74
--- /dev/null
+++ b/components/metrics/browseros_metrics/browseros_metrics_prefs.cc
@@ -0,0 +1,25 @@
+// Copyright 2025 The Chromium Authors
+// Use of this source code is governed by a BSD-style license that can be
+// found in the LICENSE file.
+
+#include "components/metrics/browseros_metrics/browseros_metrics_prefs.h"
+
+#include "chrome/common/pref_names.h"
+#include "components/prefs/pref_registry_simple.h"
+#include "components/pref_registry/pref_registry_syncable.h"
+
+namespace browseros_metrics {
+
+void RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) {
+  // Register the stable client ID pref - this should not sync across devices
+  // as each browser instance needs its own unique ID
+  registry->RegisterStringPref(
+      prefs::kBrowserOSMetricsClientId,
+      std::string());
+}
+
+void RegisterLocalStatePrefs(PrefRegistrySimple* registry) {
+  // Currently no local state prefs, but keeping this for future expansion
+}
+
+}  // namespace browseros_metrics
\ No newline at end of file

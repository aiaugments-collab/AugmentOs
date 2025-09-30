diff --git a/components/metrics/browseros_metrics/browseros_metrics_prefs.h b/components/metrics/browseros_metrics/browseros_metrics_prefs.h
new file mode 100644
index 0000000000000..a417e8d8af351
--- /dev/null
+++ b/components/metrics/browseros_metrics/browseros_metrics_prefs.h
@@ -0,0 +1,24 @@
+// Copyright 2025 The Chromium Authors
+// Use of this source code is governed by a BSD-style license that can be
+// found in the LICENSE file.
+
+#ifndef COMPONENTS_METRICS_BROWSEROS_METRICS_BROWSEROS_METRICS_PREFS_H_
+#define COMPONENTS_METRICS_BROWSEROS_METRICS_BROWSEROS_METRICS_PREFS_H_
+
+class PrefRegistrySimple;
+
+namespace user_prefs {
+class PrefRegistrySyncable;
+}  // namespace user_prefs
+
+namespace browseros_metrics {
+
+// Registers BrowserOS metrics preferences for the profile.
+void RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry);
+
+// Registers BrowserOS metrics preferences for local state.
+void RegisterLocalStatePrefs(PrefRegistrySimple* registry);
+
+}  // namespace browseros_metrics
+
+#endif  // COMPONENTS_METRICS_BROWSEROS_METRICS_BROWSEROS_METRICS_PREFS_H_
\ No newline at end of file

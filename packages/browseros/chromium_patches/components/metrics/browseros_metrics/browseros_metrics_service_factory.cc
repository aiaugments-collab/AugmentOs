diff --git a/components/metrics/browseros_metrics/browseros_metrics_service_factory.cc b/components/metrics/browseros_metrics/browseros_metrics_service_factory.cc
new file mode 100644
index 0000000000000..bddc97f6d9a05
--- /dev/null
+++ b/components/metrics/browseros_metrics/browseros_metrics_service_factory.cc
@@ -0,0 +1,56 @@
+// Copyright 2025 The Chromium Authors
+// Use of this source code is governed by a BSD-style license that can be
+// found in the LICENSE file.
+
+#include "components/metrics/browseros_metrics/browseros_metrics_service_factory.h"
+
+#include <memory>
+
+#include "base/no_destructor.h"
+#include "chrome/browser/profiles/profile.h"
+#include "components/keyed_service/content/browser_context_dependency_manager.h"
+#include "components/metrics/browseros_metrics/browseros_metrics_service.h"
+#include "components/prefs/pref_service.h"
+#include "content/public/browser/browser_context.h"
+#include "content/public/browser/storage_partition.h"
+
+namespace browseros_metrics {
+
+// static
+BrowserOSMetricsService* BrowserOSMetricsServiceFactory::GetForBrowserContext(
+    content::BrowserContext* context) {
+  return static_cast<BrowserOSMetricsService*>(
+      GetInstance()->GetServiceForBrowserContext(context, true));
+}
+
+// static
+BrowserOSMetricsServiceFactory*
+BrowserOSMetricsServiceFactory::GetInstance() {
+  static base::NoDestructor<BrowserOSMetricsServiceFactory> instance;
+  return instance.get();
+}
+
+BrowserOSMetricsServiceFactory::BrowserOSMetricsServiceFactory()
+    : BrowserContextKeyedServiceFactory(
+          "BrowserOSMetricsService",
+          BrowserContextDependencyManager::GetInstance()) {}
+
+BrowserOSMetricsServiceFactory::~BrowserOSMetricsServiceFactory() = default;
+
+std::unique_ptr<KeyedService>
+BrowserOSMetricsServiceFactory::BuildServiceInstanceForBrowserContext(
+    content::BrowserContext* context) const {
+  Profile* profile = Profile::FromBrowserContext(context);
+  
+  // Don't create service for incognito profiles
+  if (profile->IsOffTheRecord()) {
+    return nullptr;
+  }
+  
+  return std::make_unique<BrowserOSMetricsService>(
+      profile->GetPrefs(),
+      profile->GetDefaultStoragePartition()
+          ->GetURLLoaderFactoryForBrowserProcess());
+}
+
+}  // namespace browseros_metrics
\ No newline at end of file

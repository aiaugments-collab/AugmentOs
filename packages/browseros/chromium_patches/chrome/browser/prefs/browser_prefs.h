diff --git a/chrome/browser/prefs/browser_prefs.h b/chrome/browser/prefs/browser_prefs.h
index 3a1c48b14b37f..5600baa2143e0 100644
--- a/chrome/browser/prefs/browser_prefs.h
+++ b/chrome/browser/prefs/browser_prefs.h
@@ -32,6 +32,8 @@ void RegisterScreenshotPrefs(PrefRegistrySimple* registry);
 
 void RegisterGeminiSettingsPrefs(user_prefs::PrefRegistrySyncable* registry);
 
+void RegisterNxtscapePrefs(user_prefs::PrefRegistrySyncable* registry);
+
 // Register all prefs that will be used via a PrefService attached to a user
 // Profile using the locale of |g_browser_process|.
 void RegisterUserProfilePrefs(user_prefs::PrefRegistrySyncable* registry);

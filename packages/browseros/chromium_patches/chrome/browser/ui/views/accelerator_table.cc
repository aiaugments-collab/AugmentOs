diff --git a/chrome/browser/ui/views/accelerator_table.cc b/chrome/browser/ui/views/accelerator_table.cc
index 6db32fe196921..80af2177736e3 100644
--- a/chrome/browser/ui/views/accelerator_table.cc
+++ b/chrome/browser/ui/views/accelerator_table.cc
@@ -151,6 +151,10 @@ const AcceleratorMapping kAcceleratorMap[] = {
     {ui::VKEY_F11, ui::EF_NONE, IDC_FULLSCREEN},
     {ui::VKEY_M, ui::EF_SHIFT_DOWN | ui::EF_PLATFORM_ACCELERATOR,
      IDC_SHOW_AVATAR_MENU},
+    {ui::VKEY_L, ui::EF_SHIFT_DOWN | ui::EF_PLATFORM_ACCELERATOR,
+     IDC_SHOW_THIRD_PARTY_LLM_SIDE_PANEL},
+    {ui::VKEY_U, ui::EF_SHIFT_DOWN | ui::EF_PLATFORM_ACCELERATOR,
+     IDC_OPEN_CLASH_OF_GPTS},
 
 // Platform-specific key maps.
 #if BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)

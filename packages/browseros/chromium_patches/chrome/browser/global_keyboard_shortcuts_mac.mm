diff --git a/chrome/browser/global_keyboard_shortcuts_mac.mm b/chrome/browser/global_keyboard_shortcuts_mac.mm
index cbc0d472d9476..56da23fd6d745 100644
--- a/chrome/browser/global_keyboard_shortcuts_mac.mm
+++ b/chrome/browser/global_keyboard_shortcuts_mac.mm
@@ -145,6 +145,9 @@ const std::vector<KeyboardShortcutData>& GetShortcutsNotPresentInMainMenu() {
 
       {true,  true,  false, false, kVK_ANSI_M,            IDC_SHOW_AVATAR_MENU},
       {true,  false, false, true,  kVK_ANSI_L,            IDC_SHOW_DOWNLOADS},
+      {true,  true,  false, false, kVK_ANSI_L,            IDC_SHOW_THIRD_PARTY_LLM_SIDE_PANEL},
+      {true,  true,  false, false, kVK_ANSI_Semicolon,   IDC_CYCLE_THIRD_PARTY_LLM_PROVIDER},
+      {true,  true,  false, false, kVK_ANSI_U,            IDC_OPEN_CLASH_OF_GPTS},
       {true,  true,  false, false, kVK_ANSI_C,            IDC_DEV_TOOLS_INSPECT},
       {true,  false, false, true,  kVK_ANSI_C,            IDC_DEV_TOOLS_INSPECT},
       {true,  false, false, true,  kVK_DownArrow,         IDC_FOCUS_NEXT_PANE},

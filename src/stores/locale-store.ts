import Cookies from "js-cookie";
import { create } from "zustand";

// 本地化状态
type LocaleState = {
  showLanguageAlert: boolean; // 是否显示语言提示
  setShowLanguageAlert: (show: boolean) => void; // 设置是否显示语言提示
  dismissLanguageAlert: () => void; // 隐藏语言提示
  getLangAlertDismissed: () => boolean; // 检查是否已关闭提示
};

export const useLocaleStore = create<LocaleState>((set) => ({
  showLanguageAlert: false,
  setShowLanguageAlert: (show) => set({ showLanguageAlert: show }),
  dismissLanguageAlert: () => {
    // 设置 Cookie，30天内不再提示
    Cookies.set("langAlertDismissed", "true", { expires: 30 });
    set({ showLanguageAlert: false });
  },
  getLangAlertDismissed: () => Cookies.get("langAlertDismissed") === "true",
}));

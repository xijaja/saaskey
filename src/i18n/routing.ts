import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const LOCALES: readonly string[] = ["en", "zh"];
export const DEFAULT_LOCALE = LOCALES[0];

export const routing = defineRouting({
  // A list of all locales that are supported
  // 支持的语言
  locales: LOCALES,

  // Used when no locale matches
  // 默认语言
  defaultLocale: DEFAULT_LOCALE,

  // Disable locale detection
  // 禁用语言检测
  localeDetection: false,

  // Locale prefix strategy
  // 语言前缀策略
  localePrefix: "as-needed",
});

// Navigation API wrapper, considering routing configuration
// 多语言导航 API 包装器，考虑路由配置
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
export type Locale = (typeof routing.locales)[number];

// 本地化文本对象类型
export type LocalizedText = { [key in Locale]: string };
// 获取本地化文本内容
export const getLocalizedText = (text: LocalizedText, locale: Locale): string => text[locale];

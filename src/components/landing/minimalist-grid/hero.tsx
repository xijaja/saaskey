import { getLocale } from "next-intl/server";
import { getLocalizedText, Link, type LocalizedText } from "@/i18n/routing";

const localeText: Record<string, LocalizedText> = {
  title_annotate: {
    zh: "SaaSKey 是基于 Nextjs 16 的 SaaS 构建模板",
    en: "SaaSKey is a SaaS building template based on Nextjs 16",
  },
  title: {
    zh: "快速构建 AI SaaS 的关键!",
    en: "The key to building your AI SaaS in hours.",
  },
  subtitle_annotate: {
    zh: "SaaSKey 是 AI 原生的 SaaS 开发模板",
    en: "SaaSKey is an AI-Native SaaS development template",
  },
  subtitle: {
    zh: "SaaSKey 内置积分管理、对话组件、AIGC 生成，开箱即用的 AI 能力",
    en: "SaaSKey has built-in point management, dialogue components, AIGC generation, and out-of-box AI capabilities",
  },
  cta_primary: {
    zh: "立即开始",
    en: "Let's start",
  },
  cta_secondary: {
    zh: "前往 GitHub 获取源码",
    en: "Go to GitHub repo",
  },
};

export default async function Hero() {
  const locale = await getLocale();

  return (
    <div id="hero">
      {/* Typography annotations */}
      <div
        aria-hidden="true"
        className="flex h-16 items-end whitespace-pre px-2 font-mono text-muted-foreground/80 text-xs/6 max-sm:px-4 sm:h-24"
      >
        <span>{getLocalizedText(localeText.title_annotate, locale)}</span>
      </div>

      {/* Main Heading with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <h1 className="text-balance px-2 text-4xl tracking-tighter max-sm:px-4 max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-8xl">
          {getLocalizedText(localeText.title, locale)}
        </h1>
      </div>

      {/* annotations for subtitle */}
      <div
        aria-hidden="true"
        className="flex h-6 items-end whitespace-pre px-2 font-mono text-muted-foreground/80 text-xs/6 max-sm:px-4 sm:h-10"
      >
        <span>{getLocalizedText(localeText.subtitle_annotate, locale)}</span>
      </div>

      {/* Subtitle with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="max-w-2xl px-2 font-medium text-lg/7 text-muted-foreground max-sm:px-4">
          {getLocalizedText(localeText.subtitle, locale)}
        </p>
      </div>

      {/* Desktop CTA and Search */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-4 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 sm:mt-10 sm:px-2 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="flex gap-4 max-sm:px-4">
          <Link
            className="z-1 inline-block h-12 rounded-md bg-foreground px-8 py-3 font-semibold text-background text-sm/6 hover:bg-foreground/80"
            href="/dashboard"
          >
            {getLocalizedText(localeText.cta_primary, locale)}
          </Link>
          <Link
            className="z-1 inline-block h-12 rounded-md border border-foreground/30 bg-background px-8 py-3 font-semibold text-foreground text-sm/6 transition-colors hover:border-foreground/50 hover:bg-muted/60"
            href="https://github.com/xijaja/saaskey"
            target="_blank"
          >
            {getLocalizedText(localeText.cta_secondary, locale)}
          </Link>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import { getLocale } from "next-intl/server";
import { getLocalizedText, Link, type LocalizedText } from "@/i18n/routing";

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "获得构建 SaaS 的关键",
    en: "Get the key to building SaaS",
  },
  title_annotate: {
    zh: "加入我们",
    en: "Join us",
  },
  subtitle: {
    zh: "使用 SaaSKey 在数小时内发布你的 AI SaaS 产品",
    en: "Use SaaSKey to launch your AI SaaS products in hours.",
  },
  cta_primary: {
    zh: "立即开始",
    en: "Let's start",
  },
  cta_secondary: {
    zh: "查看定价",
    en: "View pricing",
  },
};

export default async function CTA() {
  const locale = await getLocale();

  return (
    <div className="relative" id="cta">
      {/* Module Label with borders (responsive) */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="-left-(--gutter-width) 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-orange-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-orange-400">
          START LAUNCHING
        </p>
      </div>

      {/* Header with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <h2 className="max-w-lg text-balance px-2 font-medium text-[2.5rem]/10 tracking-tighter max-sm:px-4 2xl:mt-0">
          {getLocalizedText(localeText.title, locale)}
        </h2>
      </div>

      {/* Typography annotations for subtitle */}
      <div
        aria-hidden="true"
        className="flex h-6 items-end whitespace-pre px-2 font-mono text-muted-foreground/40 text-xs/6 max-sm:px-4 sm:h-10"
      >
        {getLocalizedText(localeText.title_annotate, locale)}
      </div>

      {/* Subtitle with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="max-w-2xl px-2 text-base/7 text-muted-foreground max-sm:px-4">
          {getLocalizedText(localeText.subtitle, locale)}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="px-2 max-sm:px-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 py-3 font-semibold text-background text-sm/6 hover:bg-foreground/90"
              href="/login"
            >
              {getLocalizedText(localeText.cta_primary, locale)}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-lg border border-foreground/30 bg-background px-8 py-3 font-semibold text-foreground text-sm/6 hover:bg-muted/60"
              href="/#pricing"
            >
              {getLocalizedText(localeText.cta_secondary, locale)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

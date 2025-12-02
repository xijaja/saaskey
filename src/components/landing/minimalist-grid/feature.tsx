import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getLocalizedText, type LocalizedText } from "@/i18n/routing";

type feature = {
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  image: string;
};

const featureList: feature[] = [
  {
    title: {
      zh: "认证",
      en: "Authentication",
    },
    description: {
      zh: "让您的用户轻松使用电子邮件或社交提供商注册和登录。",
      en: "Make it easy for your users to register and log in using email or social providers.",
    },
    features: [
      { zh: "魔术链接", en: "Magic Link" },
      { zh: "社交登录", en: "Social Login" },
      { zh: "重置密码", en: "Reset Password" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: {
      zh: "支付",
      en: "Fast Development",
    },
    description: {
      zh: "向您的用户轻松收取 Stripe 订阅费和一次性付款，并管理他们的积分。",
      en: "Make it easy for your users to pay using credit cards, PayPal, or Stripe, and manage their credits.",
    },
    features: [
      { zh: "定价配置", en: "Pricing Configuration" },
      { zh: "订阅和一次性支付", en: "Subscription and One-time Payment" },
      { zh: "webhooks 集成", en: "Webhooks Integration" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: {
      zh: "博客和文档",
      en: "Blog and Documentation",
    },
    description: {
      zh: "内置支持多语言的博客和文档，让您轻松创建和管理您的内容。",
      en: "Built-in support for multi-language blog and documentation, allowing you to easily create and manage your content.",
    },
    features: [
      { zh: "博客", en: "Blog" },
      { zh: "文档", en: "Documentation" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: {
      zh: "电子邮件",
      en: "Email",
    },
    description: {
      zh: "内置电子邮件，让您轻松创建和管理您的电子邮件。",
      en: "Built-in email, allowing you to easily create and manage your email.",
    },
    features: [
      { zh: "电子邮件", en: "Email" },
      { zh: "邮件模板", en: "Email Templates" },
      { zh: "时事通讯（开发中）", en: "Newsletter" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: {
      zh: "AI 功能",
      en: "AI Features",
    },
    description: {
      zh: "内置 AI 功能，让您轻松创建和管理您的 AI 内容。",
      en: "Built-in AI features, allowing you to easily create and manage your AI content.",
    },
    features: [
      { zh: "积分管理", en: "Credits Management" },
      { zh: "用量统计", en: "Usage Statistics" },
      { zh: "对话组件", en: "Dialog Components" },
      { zh: "AIGC 生成（开发中）", en: "AIGC Generation" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: {
      zh: "SaaS 功能",
      en: "SaaS Features",
    },
    description: {
      zh: "内置完整的 SaaS 功能，让您轻松创建和管理您的 SaaS 应用。",
      en: "Built-in complete SaaS features, allowing you to easily create and manage your SaaS application.",
    },
    features: [
      { zh: "SEO", en: "SEO" },
      { zh: "仪表板", en: "Dashboard" },
      { zh: "Admin 面板（开发中）", en: "Admin Panel" },
      { zh: "联盟计划（开发中）", en: "Affiliate Program" },
    ],
    image: "/placeholder.svg",
  },
];

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "SaaSKey 的功能特性",
    en: "SaaSKey Features",
  },
  title_annotate: {
    zh: "FEATURES",
    en: "FEATURES",
  },
  subtitle: {
    zh: "我们提供完整的 SaaS 应用开发解决方案，让你专注于核心业务，而不是重复造轮子。",
    en: "We provide a complete SaaS application development solution, so you can focus on your core business, rather than reinventing the wheel.",
  },
  more: {
    zh: "了解更多",
    en: "Learn More",
  },
};

export default async function Feature() {
  const locale = await getLocale();

  return (
    <div className="relative" id="features">
      {/* Module Label - responsive position */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="-left-[--gutter-width] 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-blue-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-blue-400">
          FEATURES
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

      {/* Features Grid */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="p-2 max-sm:p-4">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
            {featureList.map((item, index) => (
              <div
                className={`flex flex-col gap-2 rounded border border-muted-foreground/20 p-6 ${index % 2 === 1 ? "lg:flex-col-reverse" : ""}`}
                key={index}
              >
                {/* Content */}
                <div className="mb-4 flex-1 lg:mb-0">
                  <h3 className="mb-4 font-bold text-2xl text-foreground">{getLocalizedText(item.title, locale)}</h3>
                  <p className="mb-4 text-lg text-muted-foreground">{getLocalizedText(item.description, locale)}</p>

                  {/* Features */}
                  <ul className="mb-4 space-y-3">
                    {item.features.map((featureItem, featureItemIndex) => (
                      <li className="flex items-center" key={featureItemIndex}>
                        <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{getLocalizedText(featureItem, locale)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    className="inline-flex items-center font-medium text-primary hover:text-primary/80"
                    href="#pricing"
                  >
                    {getLocalizedText(localeText.more, locale)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="group relative">
                    <div className="relative aspect-video overflow-hidden rounded border border-muted-foreground/20">
                      <Image
                        alt={getLocalizedText(item.title, locale)}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={item.image}
                      />
                      {/* Overlay for better text readability if needed */}
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

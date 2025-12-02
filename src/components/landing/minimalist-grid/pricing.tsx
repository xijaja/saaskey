import { Check, Star } from "lucide-react";
import { getLocale } from "next-intl/server";
import { getLocalizedText, type LocalizedText } from "@/i18n/routing";

type Plan = {
  name: LocalizedText;
  price: string;
  period: string;
  description: LocalizedText;
  features: LocalizedText[];
  cta: LocalizedText;
  cta_href: string;
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: {
      zh: "免费版",
      en: "Free Plan",
    },
    price: "¥0",
    period: "/月",
    description: {
      zh: "适合个人开发者和小型项目",
      en: "Suitable for individual developers and small projects",
    },
    features: [
      { zh: "最多 100 个用户", en: "Up to 100 users" },
      { zh: "基础认证功能", en: "Basic authentication" },
      { zh: "社区支持", en: "Community support" },
      { zh: "基础模板", en: "Basic template" },
      { zh: "1GB 存储空间", en: "1GB storage space" },
    ],
    cta: {
      zh: "开始免费试用",
      en: "Start free trial",
    },
    cta_href: "/dashboard",
    popular: false,
  },
  {
    name: {
      zh: "专业版",
      en: "Professional Plan",
    },
    price: "¥299",
    period: "/月",
    description: {
      zh: "适合中小型企业和团队",
      en: "Suitable for small and medium-sized enterprises and teams",
    },
    features: [
      { zh: "最多 1,000 个用户", en: "Up to 1,000 users" },
      { zh: "完整认证系统", en: "Complete authentication system" },
      { zh: "支付集成", en: "Payment integration" },
      { zh: "多语言支持", en: "Multi-language support" },
      { zh: "10GB 存储空间", en: "10GB storage space" },
      { zh: "优先支持", en: "Priority support" },
      { zh: "自定义域名", en: "Custom domain name" },
      { zh: "数据分析仪表板", en: "Data analysis dashboard" },
    ],
    cta: {
      zh: "选择专业版",
      en: "Choose professional plan",
    },
    cta_href: "/dashboard",
    popular: true,
  },
  {
    name: {
      zh: "企业版",
      en: "Enterprise Plan",
    },
    price: "¥999",
    period: "/月",
    description: {
      zh: "适合大型企业和复杂需求",
      en: "Suitable for large enterprises and complex needs",
    },
    features: [
      { zh: "无限制用户", en: "Unlimited users" },
      { zh: "企业级安全", en: "Enterprise-grade security" },
      { zh: "高级支付功能", en: "Advanced payment features" },
      { zh: "多租户支持", en: "Multi-tenant support" },
      { zh: "100GB 存储空间", en: "100GB storage space" },
      { zh: "24/7 专属支持", en: "24/7 dedicated support" },
      { zh: "白标解决方案", en: "White-label solution" },
      { zh: "高级分析", en: "Advanced analytics" },
      { zh: "API 访问", en: "API access" },
    ],
    cta: {
      zh: "联系销售",
      en: "Contact sales",
    },
    cta_href: "/dashboard",
    popular: false,
  },
];

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "简单透明的定价",
    en: "Simple and transparent pricing",
  },
  subtitle: {
    zh: "选择适合你业务需求的方案，随时可以升级或降级。",
    en: "Choose the plan that suits your business needs, you can upgrade or downgrade anytime.",
  },
  bottom_note: {
    zh: "所有方案都包含 14 天免费试用，无需信用卡",
    en: "All plans include a 14-day free trial, no credit card required",
  },
  popular: {
    zh: "最受欢迎",
    en: "Most popular",
  },
  guarantee_1: {
    zh: "随时取消",
    en: "Cancel anytime",
  },
  guarantee_2: {
    zh: "无隐藏费用",
    en: "No hidden fees",
  },
  guarantee_3: {
    zh: "30 天退款保证",
    en: "30-day refund guarantee",
  },
};

export default async function Pricing() {
  const locale = await getLocale();

  return (
    <div className="relative">
      {/* Module Label with borders (responsive) */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="-left-[--gutter-width] 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-green-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-green-400">
          PRICING
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
        {getLocalizedText(localeText.subtitle, locale)}
      </div>

      {/* Subtitle with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="max-w-2xl px-2 text-base/7 text-muted-foreground max-sm:px-4">
          {getLocalizedText(localeText.subtitle, locale)}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="p-2 max-sm:p-4">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                className={`relative rounded-xl border border-muted-foreground/20 bg-muted/30 p-8 ${
                  plan.popular
                    ? "border-primary/50 hover:shadow-lg"
                    : "hover:-translate-y-1 scale-95 transition-all duration-300 hover:bg-muted/50"
                }`}
                key={index}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="-top-4 -translate-x-1/2 absolute left-1/2">
                    <div className="inline-flex items-center rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground text-sm">
                      <Star className="mr-1 h-4 w-4" />
                      {getLocalizedText(localeText.popular, locale)}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 font-bold text-2xl text-foreground">{getLocalizedText(plan.name, locale)}</h3>
                  <p className="mb-4 text-muted-foreground">{getLocalizedText(plan.description, locale)}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="font-bold text-5xl text-foreground">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground text-xl">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li className="flex items-start" key={featureIndex}>
                      <Check className="mt-0.5 mr-3 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground text-sm">{getLocalizedText(feature, locale)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  className={`inline-flex h-12 w-full items-center justify-center rounded-4xl px-6 py-3 font-semibold text-sm/6 transition-colors ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-foreground/80"
                      : "border border-muted-foreground/30 bg-background hover:bg-muted/50"
                  }`}
                  href={plan.cta_href}
                >
                  {getLocalizedText(plan.cta, locale)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="px-2 max-sm:px-4">
          <div className="text-center">
            <p className="mb-4 text-muted-foreground text-sm">{getLocalizedText(localeText.bottom_note, locale)}</p>
            <div className="flex flex-col justify-center gap-4 text-muted-foreground text-sm sm:flex-row">
              <span>✓ {getLocalizedText(localeText.guarantee_1, locale)}</span>
              <span>✓ {getLocalizedText(localeText.guarantee_2, locale)}</span>
              <span>✓ {getLocalizedText(localeText.guarantee_3, locale)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

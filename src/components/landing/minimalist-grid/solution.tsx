import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Code,
  CreditCard,
  Globe,
  Lightbulb,
  Shield,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { getLocale } from "next-intl/server";
import { getLocalizedText, type LocalizedText } from "@/i18n/routing";

type ProblemSolution = {
  problem: LocalizedText;
  solution: LocalizedText;
  icon: React.ReactNode;
  color: string;
};

const problemsAndSolutions: ProblemSolution[] = [
  {
    problem: {
      zh: "从零搭建 SaaS 需要数月时间，错过市场窗口期",
      en: "Building SaaS from scratch takes months, missing the market window",
    },
    solution: {
      zh: "完整功能开箱即用，数小时即可上线，快速验证商业想法",
      en: "Complete features out of the box, launch in hours, validate your business idea fast",
    },
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
  },
  {
    problem: {
      zh: "AI 功能需要从零搭建，或者功能臃肿难以理解和定制",
      en: "Build AI features from scratch, or deal with bloated code that's hard to customize",
    },
    solution: {
      zh: "完整 AI 能力 + 清晰架构，既开箱即用又易于扩展定制",
      en: "Complete AI capabilities with clean architecture - ready to use and easy to customize",
    },
    icon: <Lightbulb className="h-6 w-6" />,
    color: "text-red-500",
  },
  {
    problem: {
      zh: "技术栈过时或界面设计过时，SaaS 功能不完整等",
      en: "Outdated design and tech stack, poor SEO performance, insufficient AI project support",
    },
    solution: {
      zh: "采用备受推崇的技术栈和精心设计的 UI，内置完整的 SaaS 功能",
      en: "Highly respected technology stack, deeply optimized for SEO, customized for AI SaaS projects",
    },
    icon: <Globe className="h-6 w-6" />,
    color: "text-blue-500",
  },
  {
    problem: {
      zh: "开发者不持续维护，一锤子买卖，社区不友善",
      en: "Developers don't maintain continuously, one-time deal, unfriendly community",
    },
    solution: {
      zh: "持续更新维护，活跃社区支持，终身技术支持",
      en: "Continuous updates and maintenance, active community support, lifetime technical support",
    },
    icon: <Users className="h-6 w-6" />,
    color: "text-orange-500",
  },
];

type Feature = {
  icon: React.ReactNode;
  title: LocalizedText;
  description: LocalizedText;
};

const features: Feature[] = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: {
      zh: "开箱即用，快速上线",
      en: "Out of the Box, Launch Fast",
    },
    description: {
      zh: "完整功能开箱即用，从想法到上线只需数小时，快速验证市场需求",
      en: "Complete features out of the box, from idea to launch in hours, validate market demand quickly",
    },
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: {
      zh: "清晰架构，易于定制",
      en: "Clean Architecture, Easy to Customize",
    },
    description: {
      zh: "模块化设计，代码结构清晰，注释完善，轻松理解和扩展功能",
      en: "Modular design, clear code structure, comprehensive comments, easy to understand and extend",
    },
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: {
      zh: "现代技术栈",
      en: "Modern Tech Stack",
    },
    description: {
      zh: "Next.js 16、React 19、TypeScript 等最新技术，采用流行设计风格，不会过时",
      en: "Next.js 16, React 19, TypeScript and latest technologies, popular design style that won't go out of date",
    },
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: {
      zh: "持续更新",
      en: "Continuous Updates",
    },
    description: {
      zh: "承诺持续更新维护，不是一锤子买卖，用户将享受到这个项目的永久更新",
      en: "Promise continuous updates and maintenance, not a one-time deal, users will enjoy permanent updates of this project",
    },
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: {
      zh: "现代响应式设计",
      en: "Modern Responsive Design",
    },
    description: {
      zh: "提供多个主题，完美适配各种设备尺寸，从手机到桌面，提供一致的用户体验",
      en: "Provide multiple themes, perfectly compatible with various device sizes, from mobile to desktop, providing consistent user experience",
    },
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: {
      zh: "AI 项目专精",
      en: "AI Project Specialized",
    },
    description: {
      zh: "专为 AI SaaS 项目深度优化，内置 AI 生成文本、图像、视频、音频等 AI 工具链和最佳实践",
      en: "Deeply optimized for AI SaaS projects, built-in AI toolchain and best practices for AI text, image, video, audio generation",
    },
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: {
      zh: "完整的 SaaS 功能",
      en: "Complete SaaS Features",
    },
    description: {
      zh: "内置身份认证、支付、邮件、多语言、SEO、分析等完整的 SaaS 功能，无需额外开发",
      en: "Built-in authentication, payment, email, multi-language, SEO, analysis, and other complete SaaS features, no additional development required",
    },
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: {
      zh: "丰富的内置功能与面板",
      en: "Rich built-in features and panels",
    },
    description: {
      zh: "内置博客、文档、新闻通讯、仪表板、Admin 面板，为您节省数月的开发时间",
      en: "Built-in blog, documentation, newsletter, dashboard, admin panel, saving you months of development time",
    },
  },
];

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "你的担心，我们懂",
    en: "We Understand Your Concerns",
  },
  subtitle_annotate: {
    zh: "能快速上线、稳定、好用才是真的强大",
    en: "Being online quickly, stable and easy to use is really powerful",
  },
  subtitle: {
    zh: "功能堆砌、维护中断、技术过时...这些担心我们都懂，SaaSKey 就是为打消这些顾虑而生的",
    en: "Feature bloat, maintenance interruption, outdated tech... We understand these concerns, SaaSKey is born to address these worries",
  },
  concerns: {
    zh: "✘ 您的担心",
    en: "✘ Your Concerns",
  },
  responses: {
    zh: "✓ 我们的回应",
    en: "✓ Our Responses",
  },
  why_choose: {
    zh: "为什么 SaaSKey 值得信任？",
    en: "Why is SaaSKey Trustworthy?",
  },
  why_choose_subtitle_annotate: {
    zh: "精简、持续、现代、专业",
    en: "Streamlined, Continuous, Modern, Professional",
  },
  why_choose_subtitle: {
    zh: "我们提供完整的 SaaS 应用开发解决方案，让你专注于核心业务，而不是重复造轮子。",
    en: "We provide a complete SaaS application development solution, so you can focus on your core business, rather than reinventing the wheel.",
  },
};

export default async function Solution() {
  const locale = await getLocale();

  return (
    <div className="relative" id="solution">
      {/* Module Label with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="-left-[--gutter-width] 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-orange-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-orange-400">
          SOLUTION
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
        {getLocalizedText(localeText.subtitle_annotate, locale)}
      </div>

      {/* Subtitle with borders */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="max-w-2xl px-2 text-base/7 text-muted-foreground max-sm:px-4">
          {getLocalizedText(localeText.subtitle, locale)}
        </p>
      </div>

      {/* Problems and Solutions */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="p-2 max-sm:p-4">
          <div className="space-y-2">
            {problemsAndSolutions.map((item, index) => (
              <div
                className="group hover:-translate-y-1 relative rounded border border-muted-foreground/20 bg-muted/30 p-8 transition-all duration-300 hover:bg-muted/50"
                key={index}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  {/* Problem Section */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      {/* <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 ${item.color}`}> */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold text-foreground text-lg">
                          {getLocalizedText(item.problem, locale)}
                        </h3>
                        <div className="flex items-center text-muted-foreground">
                          <span className="text-sm">{getLocalizedText(localeText.concerns, locale)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground/50 lg:rotate-0" />
                  </div>

                  {/* Solution Section */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold text-foreground text-lg">
                          {getLocalizedText(item.solution, locale)}
                        </h3>
                        <div className="flex items-center text-primary">
                          <span className="text-sm">{getLocalizedText(localeText.responses, locale)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose SaaSKey Section */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-16 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        {/* Module Label - responsive position */}
        <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
          <p className="-left-[--gutter-width] 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-cyan-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-cyan-400">
            WHY CHOOSE
          </p>
        </div>

        <div className="max-sm:p-4">
          {/* Header */}
          <div className="relative">
            <h3 className="max-w-lg text-balance px-2 font-medium text-[2.5rem]/10 tracking-tighter max-sm:px-4 2xl:mt-0">
              {getLocalizedText(localeText.why_choose, locale)}
            </h3>
          </div>

          {/* Typography annotations for subtitle */}
          <div
            aria-hidden="true"
            className="flex h-6 items-end whitespace-pre px-2 font-mono text-muted-foreground/40 text-xs/6 max-sm:px-4 sm:h-10"
          >
            {getLocalizedText(localeText.why_choose_subtitle_annotate, locale)}
          </div>

          {/* Subtitle with borders */}
          <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
            <p className="max-w-2xl px-2 text-base/7 text-muted-foreground max-sm:px-4">
              {getLocalizedText(localeText.why_choose_subtitle, locale)}
            </p>
          </div>

          {/* Features Grid */}
          <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
            <div className="p-2 max-sm:p-4">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    className="group hover:-translate-y-1 relative rounded border border-muted-foreground/20 bg-muted/30 p-6 transition-all duration-300 hover:bg-muted/50"
                    key={index}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 font-semibold text-foreground text-lg">
                          {getLocalizedText(feature.title, locale)}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {getLocalizedText(feature.description, locale)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

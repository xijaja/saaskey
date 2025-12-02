import { getLocale } from "next-intl/server";
import BrandIcon from "@/components/blocks/brand-icon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getLocalizedText, type LocalizedText } from "@/i18n/routing";

type TechStack = {
  name: string;
  description: LocalizedText;
  icon: React.ReactNode;
  url: string;
};

const techStackList: TechStack[] = [
  {
    name: "Next.js",
    description: { zh: "React 全栈框架", en: "React full-stack framework" },
    icon: <BrandIcon name="nextjs" />,
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    description: { zh: "JavaScript 超集", en: "JavaScript superset" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="typescript" />,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "TailwindCSS",
    description: { zh: "实用优先的 CSS 框架", en: "Utility-first CSS framework" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="tailwindcss" />,
    url: "https://tailwindcss.com",
  },
  {
    name: "Drizzle",
    description: { zh: "TypeScript ORM", en: "TypeScript ORM" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="drizzle" />,
    url: "https://orm.drizzle.team",
  },
  {
    name: "Stripe",
    description: { zh: "在线支付平台", en: "Online payment platform" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="stripe" />,
    url: "https://stripe.com",
  },
  {
    name: "GitHub",
    description: { zh: "代码托管平台", en: "Code hosting platform" },
    icon: <BrandIcon name="github" />,
    url: "https://github.com",
  },
  {
    name: "Docker",
    description: { zh: "容器化平台", en: "Containerization platform" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="docker" />,
    url: "https://www.docker.com",
  },
  {
    name: "Cloudflare",
    description: { zh: "CDN 和安全服务", en: "CDN and security service" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="cloudflare" />,
    url: "https://www.cloudflare.com",
  },
  {
    name: "Resend",
    description: { zh: "邮件发送服务", en: "Email sending service" },
    icon: <BrandIcon name="resend" />,
    url: "https://resend.com",
  },
  {
    name: "shadcn/ui",
    description: { zh: "UI 组件库", en: "UI component library" },
    icon: <BrandIcon name="shadcn" />,
    url: "https://ui.shadcn.com",
  },
  {
    name: "better-auth",
    description: { zh: "认证库", en: "Authentication library" },
    icon: <BrandIcon name="betterauth" />,
    url: "https://better-auth.com",
  },
  {
    name: "Vercel AI",
    description: { zh: "Vercel AI SDK 和 AI Gateway", en: "Vercel AI SDK & AI Gateway" },
    icon: <BrandIcon name="vercel" />,
    url: "https://ai-sdk.dev",
  },
  {
    name: "upstash",
    description: { zh: "缓存平台", en: "Cache platform" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="upstash" />,
    url: "https://upstash.com",
  },
  {
    name: "Fumadocs",
    description: { zh: "文档库", en: "Documentation library" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="fumadocs" />,
    url: "https://fumadocs.dev",
  },
  {
    name: "Zod",
    description: { zh: "数据验证库", en: "Data validation library" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="zod" />,
    url: "https://zod.dev",
  },
  {
    name: "Neon",
    description: { zh: "数据库", en: "Database" },
    icon: <BrandIcon className="text-[#0C0D0D] dark:text-white" name="neon" />,
    url: "https://neon.tech",
  },
  {
    name: "GoogleanAlytics",
    description: { zh: "数据验证库", en: "Data validation library" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="googleanalytics" />,
    url: "https://developers.google.com/analytics",
  },
  {
    name: "Replicate",
    description: { zh: "AI 模型部署平台", en: "AI model deployment platform" },
    icon: <BrandIcon className="text-[#000000] dark:text-white" name="replicate" />,
    url: "https://replicate.com",
  },
].sort((a, b) => a.name.localeCompare(b.name));

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "现代技术栈",
    en: "Modern technology stack",
  },
  title_annotate: {
    zh: "都是你喜欢的技术栈",
    en: "All the technology stacks you love",
  },
  subtitle: {
    zh: "基于最新的技术栈构建，确保你的应用性能卓越、安全可靠。",
    en: "Built with the latest technology stack, ensuring your application is performant and secure.",
  },
};

export default async function TechStack() {
  const locale = await getLocale();

  return (
    <TooltipProvider>
      <div className="relative">
        {/* Module Label with borders */}
        <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
          <p className="-left-[--gutter-width] 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-purple-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-purple-400">
            TECH STACK
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

        {/* Tech Stack Grid */}
        <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
          <div className="p-2 max-sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {techStackList.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      className="group hover:-translate-y-1 relative rounded border border-muted-foreground/20 bg-muted/30 p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg"
                      href={tech.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex flex-col items-center space-y-3 text-center">
                        <div className="flex h-12 w-12 items-center justify-center">{tech.icon}</div>
                        <h3 className="font-semibold text-foreground text-sm transition-colors group-hover:text-primary">
                          {tech.name}
                        </h3>
                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">{getLocalizedText(tech.description, locale)}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

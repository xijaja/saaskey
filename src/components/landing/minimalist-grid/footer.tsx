import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Heart, Mail } from "lucide-react";
import { getLocale } from "next-intl/server";
import Logo from "@/components/blocks/logo";
import { getLocalizedText, Link, type LocalizedText } from "@/i18n/routing";

type footerLink = {
  name: LocalizedText;
  links: {
    name: LocalizedText;
    href: string;
  }[];
};

const footerLinks: Record<string, footerLink> = {
  product: {
    name: { zh: "产品", en: "Product" },
    links: [
      { name: { zh: "功能特性", en: "Features" }, href: "#features" },
      { name: { zh: "定价方案", en: "Pricing" }, href: "#pricing" },
      { name: { zh: "更新日志", en: "Changelog" }, href: "/changelog" },
      { name: { zh: "产品展示", en: "Showcase" }, href: "#showcase" },
    ],
  },
  resources: {
    name: { zh: "资源", en: "Resources" },
    links: [
      { name: { zh: "文档中心", en: "Docs" }, href: "/docs" },
      { name: { zh: "常见问题", en: "FAQ" }, href: "#faq" },
      { name: { zh: "教程指南", en: "Tutorials" }, href: "/tutorials" },
      { name: { zh: "最佳实践", en: "Best Practices" }, href: "/best-practices" },
      { name: { zh: "API 参考", en: "API Reference" }, href: "/api-reference" },
    ],
  },
  support: {
    name: { zh: "支持", en: "Support" },
    links: [
      { name: { zh: "常见问题", en: "FAQ" }, href: "#faq" },
      { name: { zh: "帮助中心", en: "Help Center" }, href: "/help" },
      { name: { zh: "联系我们", en: "Contact Us" }, href: "/contact" },
      { name: { zh: "状态页面", en: "Status Page" }, href: "/status" },
    ],
  },
  company: {
    name: { zh: "公司", en: "Company" },
    links: [{ name: { zh: "博客", en: "Blog" }, href: "/blog" }],
  },
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: SiGithub },
  { name: "Twitter", href: "https://twitter.com", icon: SiX },
  { name: "Email", href: "mailto:hello@saaskey.ai", icon: Mail },
];

const localeText: Record<string, LocalizedText> = {
  brand_description: {
    zh: "AI-Native SaaS 开发模板，内置积分管理、对话组件、AIGC 生成，数小时上线你的 AI 应用。",
    en: "AI-Native SaaS development template with built-in credits, chat components, and AIGC generation. Launch your AI app in hours.",
  },
  bottom_bar: {
    zh: `© ${new Date().getFullYear()} SaaSKey. 保留所有权利。`,
    en: `© ${new Date().getFullYear()} SaaSKey. All rights reserved.`,
  },
  privacy_policy: {
    zh: "隐私政策",
    en: "Privacy Policy",
  },
  terms_of_service: {
    zh: "服务条款",
    en: "Terms of Service",
  },
  cookie_policy: {
    zh: "Cookie 政策",
    en: "Cookie Policy",
  },
};

export default async function Footer() {
  const locale = await getLocale();

  return (
    <div className="px-2 max-sm:px-4">
      {/* Main Footer Content */}
      <div className="mb-12 flex flex-col gap-8 md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* Brand Section */}
        <div className="md:basis-full lg:basis-2/5 lg:pr-8">
          <div className="mb-4 flex items-center space-x-2">
            <Logo />
            <span className="font-semibold text-xl">SAASKEY.AI</span>
          </div>
          <p className="mb-6 max-w-sm text-muted-foreground">
            {getLocalizedText(localeText.brand_description, locale)}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                className="text-muted-foreground transition-colors hover:text-foreground"
                href={social.href}
                key={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        {Object.entries(footerLinks).map(
          ([key, section]) =>
            section && (
              <div className="flex-1 md:basis-1/3 lg:basis-auto" key={key}>
                <h3 className="mb-4 font-semibold text-foreground">{getLocalizedText(section.name, locale)}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                        href={link.href}
                      >
                        {getLocalizedText(link.name, locale)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-muted-foreground/20 pt-8"> */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center text-muted-foreground text-sm">
            <span>{getLocalizedText(localeText.bottom_bar, locale)}</span>
          </div>

          <div className="flex items-center space-x-6 text-muted-foreground text-sm">
            <Link className="transition-colors hover:text-foreground" href="/legal/privacy-policy">
              {getLocalizedText(localeText.privacy_policy, locale)}
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/legal/terms-of-service">
              {getLocalizedText(localeText.terms_of_service, locale)}
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/legal/cookies-policy">
              {getLocalizedText(localeText.cookie_policy, locale)}
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="flex items-center justify-center text-muted-foreground text-xs">
            {locale === "zh" ? "SaaSKey 团队" : "Made with"}
            <Heart className="mx-1 h-3 w-3 text-red-500" />
            {locale === "zh" ? "倾情打造" : "by the SaaSKey team"}
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Minus, Plus } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { getLocalizedText, type Locale, type LocalizedText } from "@/i18n/routing";

const faqs: { question: LocalizedText; answer: LocalizedText }[] = [
  {
    question: {
      zh: "SaaSKey 与其他 SaaS 模板有什么不同？",
      en: "What makes SaaSKey different from other SaaS templates?",
    },
    answer: {
      zh: "SaaSKey 专为 AI SaaS 打造，内置积分管理、对话组件、AIGC 生成和用量统计等完整 AI 能力。其他模板只提供基础功能，AI 能力需从零开发，而 SaaSKey 让你数小时内上线 AI 应用。",
      en: "SaaSKey is built for AI SaaS with complete AI features: credits management, chat components, AIGC generation, and usage analytics. Other templates only provide basics, requiring you to build AI from scratch, while SaaSKey launches your AI app in hours.",
    },
  },
  {
    question: {
      zh: "内置的 AI 功能具体包括什么？",
      en: "What AI features are included?",
    },
    answer: {
      zh: "包含四大核心功能：积分管理（购买/消费/充值）、对话组件（流式输出聊天界面）、AIGC 生成（文本/图像工作流）、用量统计（API 调用和 token 监控）。所有功能开箱即用，可自定义扩展。",
      en: "Four core features: Credits System (purchase/consume/recharge), Chat Components (streaming chat interface), AIGC Generation (text/image workflows), Usage Analytics (API calls and token monitoring). All ready to use and customizable.",
    },
  },
  {
    question: {
      zh: "代码架构是怎样的？容易理解和定制吗？",
      en: "How is the code architecture? Is it easy to understand and customize?",
    },
    answer: {
      zh: "采用模块化设计，代码结构清晰。基于 Next.js 16、React 19、TypeScript 等现代技术栈，关键代码有详细注释，文档包含完整的功能说明和自定义指南。",
      en: "Modular design with clear structure. Built on Next.js 16, React 19, TypeScript. Key code has detailed comments, docs include complete feature descriptions and customization guides.",
    },
  },
  {
    question: {
      zh: "支持哪些 AI 模型和服务商？",
      en: "Which AI models and providers are supported?",
    },
    answer: {
      zh: "内置 AI Gateway 网关层和 Replicate 模型服务，这意味着几乎支持所有服务商。可轻松切换模型或同时使用多个模型，网关统一处理请求、重试和费用统计。",
      en: "Built-in AI Gateway and Replicate model service, which means almost all providers are supported. Easily switch models or use multiple simultaneously, with unified request handling, retries, and cost tracking.",
    },
  },
  {
    question: {
      zh: "除了 AI 功能，还包含哪些 SaaS 基础功能？",
      en: "Besides AI features, what other SaaS features are included?",
    },
    answer: {
      zh: "提供完整 SaaS 基础能力：用户认证、Stripe 支付、多语言、博客文档、邮件、SEO、用户仪表板、Admin 面板、响应式设计等，所有功能开箱即用。",
      en: "Complete SaaS fundamentals: authentication, Stripe payments, i18n, blog/docs, email, SEO, dashboard, admin panel, responsive design. All work out of the box.",
    },
  },
  {
    question: {
      zh: "购买后会获得什么？",
      en: "What do I get after purchasing?",
    },
    answer: {
      zh: "获得完整源代码（GitHub 仓库访问）、详细文档和部署指南、所有功能示例代码、终身免费版本更新、邮件技术支持。一次购买，永久使用。",
      en: "Full source code (GitHub access), detailed docs and deployment guides, all feature examples, lifetime free updates, email support. One-time purchase, use forever.",
    },
  },
  {
    question: {
      zh: "如何部署和上线？",
      en: "How to deploy and launch?",
    },
    answer: {
      zh: "支持多种部署方式：推荐 Vercel 一键部署（最简单），也支持 AWS、Google Cloud、阿里云或 Docker。文档含详细步骤，通常 10 分钟完成。",
      en: "Multiple deployment options: Vercel one-click (recommended), AWS, Google Cloud, Alibaba Cloud, or Docker. Detailed steps in docs, typically done in 10 minutes.",
    },
  },
  {
    question: {
      zh: "代码是否可以商用？有使用限制吗？",
      en: "Can the code be used commercially? Are there any usage restrictions?",
    },
    answer: {
      zh: "可以商用，不限项目数量。你可以自由修改、定制和分发应用。唯一限制是不能转售 SaaSKey 本身作为模板产品。",
      en: "Yes, for commercial use with no project limit. Freely modify, customize, and distribute. Only restriction: cannot resell SaaSKey itself as a template.",
    },
  },
  {
    question: {
      zh: "是否提供退款？",
      en: "Do you offer refunds?",
    },
    answer: {
      zh: "购买后加入 GitHub 仓库前可申请全额退款。一旦加入仓库获得代码访问权限后，因无法收回代码，将不再提供退款。请购买前仔细查看演示和文档。",
      en: "Full refund available before joining the GitHub repository. Once you gain code access, refunds are not available as we cannot revoke the code. Please review demo and docs carefully before purchase.",
    },
  },
  {
    question: {
      zh: "我还有其他问题，如何联系你们？",
      en: "I have other questions, how can I contact you?",
    },
    answer: {
      zh: "发送邮件到 support@saaskey.ai，或查看详细文档。我们通常在 24 小时内回复。",
      en: "Email us at support@saaskey.ai, or check the detailed documentation. We typically respond within 24 hours.",
    },
  },
];

const localeText: Record<string, LocalizedText> = {
  title: {
    zh: "常见问题",
    en: "Frequently Asked Questions",
  },
  title_annotate: {
    zh: "快速找到答案",
    en: "Find answers instantly",
  },
  subtitle: {
    zh: "找不到你想要的答案？联系我们的支持团队。",
    en: "Can't find the answer you want? Contact our support team.",
  },
};

export default function FAQ() {
  const locale = useLocale() as Locale;
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="relative" id="faq">
      {/* Module Label with borders (responsive) */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 2xl:after:hidden 2xl:before:hidden dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <p className="-left-(--gutter-width) 2xl:-translate-x-[calc(100%+0.5rem)] 2xl:-translate-y-full 2xl:-rotate-90 top-0 origin-bottom-right text-left font-mono font-semibold text-indigo-500 text-sm uppercase tracking-widest max-sm:px-4 max-2xl:mb-4 max-2xl:px-2 sm:text-xs 2xl:absolute 2xl:text-right dark:text-indigo-400">
          FAQ
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

      {/* FAQ Grid */}
      <div className="before:-left-[100vw] after:-left-[100vw] relative mt-10 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-muted-foreground/10 after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-muted-foreground/10 dark:after:bg-foreground/10 dark:before:bg-foreground/10">
        <div className="p-2 max-sm:p-4">
          <div className="mx-auto">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="space-y-2">
                {faqs
                  .filter((_, i) => i % 2 === 0)
                  .map((faq, originalIndex) => {
                    const index = originalIndex * 2;
                    const isOpen = openSet.has(index);
                    return (
                      <div
                        className="overflow-hidden rounded border border-muted-foreground/20 bg-muted/30 transition-colors hover:bg-muted/50"
                        key={index}
                      >
                        <button
                          aria-controls={`faq-panel-${index}`}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
                          onClick={() => toggleFAQ(index)}
                          type="button"
                        >
                          <span className="pr-4 font-medium text-foreground text-lg">
                            {getLocalizedText(faq.question, locale)}
                          </span>
                          <div className="shrink-0">
                            {isOpen ? (
                              <Minus className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <Plus className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                        <div
                          aria-hidden={!isOpen}
                          className={`overflow-hidden px-6 pb-0 transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                          }`}
                          id={`faq-panel-${index}`}
                        >
                          <p className="text-muted-foreground leading-relaxed">
                            {getLocalizedText(faq.answer, locale)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="space-y-2">
                {faqs
                  .filter((_, i) => i % 2 === 1)
                  .map((faq, originalIndex) => {
                    const index = originalIndex * 2 + 1;
                    const isOpen = openSet.has(index);
                    return (
                      <div
                        className="overflow-hidden rounded border border-muted-foreground/20 bg-muted/30 transition-colors hover:bg-muted/50"
                        key={index}
                      >
                        <button
                          aria-controls={`faq-panel-${index}`}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
                          onClick={() => toggleFAQ(index)}
                          type="button"
                        >
                          <span className="pr-4 font-medium text-foreground text-lg">
                            {getLocalizedText(faq.question, locale)}
                          </span>
                          <div className="shrink-0">
                            {isOpen ? (
                              <Minus className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <Plus className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                        <div
                          aria-hidden={!isOpen}
                          className={`overflow-hidden px-6 pb-0 transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                          }`}
                          id={`faq-panel-${index}`}
                        >
                          <p className="text-muted-foreground leading-relaxed">
                            {getLocalizedText(faq.answer, locale)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

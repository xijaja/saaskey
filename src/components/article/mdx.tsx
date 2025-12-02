"use client";

import { MDXContent } from "@content-collections/mdx/react";
import {
  IconAlertTriangle,
  IconArrowRight,
  IconBulb,
  IconChartBar,
  IconChartLine,
  IconCircleCheck,
  IconInfoCircle,
  IconListCheck,
  IconScale,
} from "@tabler/icons-react";
import type { ImageProps } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurImage from "./blur-image";
import CopyBox from "./copy-box";
import { Mermaid } from "./mermaid";
import { CodeTabs, Tabs } from "./tabs";
import { Video } from "./video";
import ZoomImage from "./zoom-image";

const DcfChart = () => <div className="text-warm-white/80">DCF Chart placeholder</div>;

// Helper function to convert img props to Next.js Image props
function convertImgPropsToImageProps(props: React.ImgHTMLAttributes<HTMLImageElement>): ImageProps {
  const { src, alt, width, height, ...rest } = props;

  let parsedWidth: number | undefined;
  if (typeof width === "number") {
    parsedWidth = width;
  } else if (typeof width === "string") {
    parsedWidth = Number.parseInt(width, 10);
  }

  let parsedHeight: number | undefined;
  if (typeof height === "number") {
    parsedHeight = height;
  } else if (typeof height === "string") {
    parsedHeight = Number.parseInt(height, 10);
  }

  return {
    src: src || "",
    alt: alt || "",
    width: parsedWidth,
    height: parsedHeight,
    ...rest,
  } as ImageProps;
}

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href as string;
  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a rel="noopener noreferrer" target="_blank" {...props} />;
};

function AnimatedCTA(props: {
  badge?: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  size?: "default" | "large";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-warm-grey-2/10 p-8 shadow-lg shadow-warm-grey-2/5 ring-1 ring-warm-grey-2/20 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-warm-grey-2/5",
        props.size === "large" && "min-h-[400px]"
      )}
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
        {props.badge && (
          <span className="inline-flex items-center rounded-full border border-warm-grey-2/20 bg-warm-grey-2/10 px-3 py-1 font-medium text-warm-white/80 text-xs">
            {props.badge}
          </span>
        )}
        <h3 className="font-semibold text-2xl text-warm-white tracking-tight">{props.title}</h3>
        <p className="text-warm-white/80">{props.description}</p>
        {(props.primaryAction || props.secondaryAction) && (
          <div className="flex gap-4">
            {props.primaryAction && (
              <Link
                className="inline-flex items-center justify-center rounded-full bg-warm-grey-2/20 px-6 py-2 font-medium text-warm-white transition-colors hover:bg-warm-grey-2/30"
                href={props.primaryAction.href}
              >
                {props.primaryAction.label}
              </Link>
            )}
            {props.secondaryAction && (
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-warm-white/80 ring-1 ring-warm-grey-2/20 transition-colors hover:bg-warm-grey-2/10 hover:text-warm-white"
                href={props.secondaryAction.href}
              >
                {props.secondaryAction.label}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-4 font-semibold text-2xl text-warm-white underline-offset-4 hover:underline" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-3 font-medium text-warm-white text-xl underline-offset-4 hover:underline" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink
      className="font-medium text-warm-white/80 underline underline-offset-4 hover:text-warm-white"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded-md border border-warm-grey-2/20 bg-warm-grey-2/10 px-2 py-1 font-medium text-warm-white before:hidden after:hidden"
      {...props}
    />
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="text-lg text-warm-white" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="p-4 text-left font-medium text-warm-white" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-warm-grey-2/20 border-t p-4 text-warm-white/80" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 text-base text-warm-white/80 leading-relaxed" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2 text-base text-warm-white/80 leading-relaxed marker:text-warm-white/60" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="my-2 list-disc space-y-2 pl-6" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="my-2 list-decimal space-y-2 pl-6" {...props} />,
  Note: (props: { variant?: "info" | "warning" | "success"; children: React.ReactNode }) => {
    const icons = {
      info: IconInfoCircle,
      warning: IconAlertTriangle,
      success: IconCircleCheck,
    };
    const Icon = icons[props.variant || "info"];

    return (
      <div
        className={cn(
          "mt-6 rounded-xl border border-gray-200 bg-white p-4 text-gray-600 text-sm leading-relaxed shadow-sm",
          {
            "border-blue-200 bg-blue-50": props.variant === "info",
            "border-yellow-200 bg-yellow-50": props.variant === "warning",
            "border-green-200 bg-green-50": props.variant === "success",
          }
        )}
      >
        <div className="flex items-start gap-3">
          <Icon
            className={cn("mt-0.5 h-5 w-5", {
              "text-blue-500": props.variant === "info",
              "text-yellow-500": props.variant === "warning",
              "text-green-500": props.variant === "success",
            })}
          />
          <div className="flex-1 text-gray-600">{props.children}</div>
        </div>
      </div>
    );
  },
  Quote: (props: {
    author: string;
    authorSrc: string;
    title: string;
    company: string;
    companySrc: string;
    text: string;
  }) => (
    <div className="my-10 flex flex-col items-center justify-center space-y-6 rounded-md border border-warm-grey-2/20 bg-warm-grey-2/10 p-10">
      <div className="w-fit rounded-full bg-linear-to-r from-warm-grey-2/20 to-warm-grey-1/20 p-1.5">
        <BlurImage
          alt={props.author}
          className="h-20 w-20 rounded-full border-2 border-warm-grey-2/20"
          height={80}
          src={props.authorSrc}
          width={80}
        />
      </div>
      <p className="text-balance text-center text-lg text-warm-white/80 leading-relaxed">&ldquo;{props.text}&rdquo;</p>
      <div className="flex items-center justify-center space-x-4">
        <BlurImage
          alt={props.company}
          className="h-12 w-12 rounded-md border-2 border-warm-grey-2/20"
          height={48}
          src={props.companySrc}
          width={48}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-warm-white">{props.author}</p>
          <p className="text-sm text-warm-white/80">{props.title}</p>
        </div>
      </div>
    </div>
  ),
  Prerequisites: (props: { children: React.ReactNode }) => (
    <div className="my-8 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-6 backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-3">
        <IconListCheck className="h-5 w-5 text-warm-white/60" />
        <h4 className="font-display font-semibold text-lg text-warm-white">Forutsetninger</h4>
      </div>
      <div className="prose prose-invert max-w-none">{props.children}</div>
    </div>
  ),
  CopyBox,
  GithubRepo: (props: { url: string }) => (
    <div className="not-prose my-6 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-4">
      <p className="text-sm text-warm-white/70">Explore the project on GitHub</p>
      <Link
        className="mt-2 inline-flex items-center font-semibold text-sm text-warm-white underline-offset-4 hover:underline"
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.url}
      </Link>
    </div>
  ),
  Tweet: (props: { id: string }) => (
    <div className="not-prose my-6 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-4">
      <p className="text-sm text-warm-white/70">Embedded tweets are currently unavailable.</p>
      <Link
        className="mt-2 inline-flex items-center font-semibold text-sm text-warm-white underline-offset-4 hover:underline"
        href={`https://twitter.com/i/web/status/${props.id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        View on X ↗
      </Link>
    </div>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-warm-white" {...props} />,
  Info: (props: { children: React.ReactNode }) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-warm-grey-2/20 bg-warm-grey-2/10 p-6 backdrop-blur-sm">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        <IconInfoCircle className="h-6 w-6 text-warm-white/60" />
      </div>
      <div className="flex-1 text-[0.95rem] leading-relaxed">
        <div className="font-medium text-warm-white">Fun fact:</div>
        <div className="mt-1 text-warm-white/80">{props.children}</div>
      </div>
    </div>
  ),
  Stepper: (props: {
    items: {
      title: string;
      content: React.ReactNode;
      image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
      };
    }[];
  }) => (
    <div className="my-8 flex flex-col space-y-12">
      {props.items.map((item, idx) => (
        <div className="flex gap-6" key={idx}>
          <div className="flex-none">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-warm-grey-2/20 bg-warm-grey-2/10 font-semibold text-lg text-warm-white">
              {idx + 1}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="font-semibold text-warm-white text-xl">{item.title}</h3>
            <div className="text-base text-warm-white/80">{item.content}</div>
            {item.image && (
              <div className="mt-4 overflow-hidden rounded-lg">
                <ZoomImage
                  alt={item.image.alt}
                  height={item.image.height || 400}
                  src={item.image.src}
                  width={item.image.width || 800}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  ),
  Example: (props: {
    title?: string;
    steps: {
      label: string;
      value: string | number;
      calculation?: string;
      isResult?: boolean;
    }[];
  }) => (
    <div className="my-8 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-6 backdrop-blur-sm">
      {props.title && <h4 className="mb-4 font-display font-semibold text-lg text-warm-white">{props.title}</h4>}
      <div className="flex flex-col space-y-3">
        {props.steps.map((step, idx) => (
          <div
            className={cn("flex flex-col space-y-1", {
              "mt-4 border-warm-grey-2/20 border-t pt-4": step.isResult,
            })}
            key={idx}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-warm-white/80">{step.label}</span>
              <span
                className={cn(
                  "font-mono text-lg",
                  step.isResult ? "font-semibold text-warm-white" : "text-warm-white/80"
                )}
              >
                {typeof step.value === "number" ? new Intl.NumberFormat("nb-NO").format(step.value) : step.value}
              </span>
            </div>
            {step.calculation && <div className="text-sm text-warm-white/60">{step.calculation}</div>}
          </div>
        ))}
      </div>
    </div>
  ),
  Summary: (props: {
    title?: string;
    points: {
      title: string;
      description?: string;
      iconName?: string;
    }[];
  }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      barChart: <IconChartBar className="h-5 w-5 text-warm-white/60" />,
      scales: <IconScale className="h-5 w-5 text-warm-white/60" />,
      lineChart: <IconChartLine className="h-5 w-5 text-warm-white/60" />,
      lightbulb: <IconBulb className="h-5 w-5 text-warm-white/60" />,
    };

    return (
      <div className="my-8 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-6 backdrop-blur-sm">
        {props.title && <h4 className="mb-6 font-display font-semibold text-warm-white text-xl">{props.title}</h4>}
        <div className="grid gap-6 sm:grid-cols-2">
          {props.points.map((point, idx) => (
            <div
              className="flex flex-col space-y-2 rounded-lg border border-warm-grey-2/20 bg-warm-grey-2/5 p-4 backdrop-blur-sm"
              key={idx}
            >
              <div className="flex items-center gap-3">
                {point.iconName && iconMap[point.iconName]}
                <h5 className="font-medium text-warm-white">{point.title}</h5>
              </div>
              {point.description && <p className="text-sm text-warm-white/70 leading-relaxed">{point.description}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  },
  CTA: (props: {
    badge?: string;
    title: string;
    description: string;
    primaryAction?: {
      label: string;
      href: string;
    };
    secondaryAction?: {
      label: string;
      href: string;
    };
    size?: "default" | "large";
  }) => <AnimatedCTA {...props} />,
  DcfChart: (props: Record<string, unknown>) => (
    <div className="">
      <DcfChart {...props} />
    </div>
  ),
  Video,
  Mermaid,
  Tabs,
  CodeTabs,
};

type MDXProps = {
  code: string;
  images?: { alt: string; src: string; blurDataURL: string }[];
  className?: string;
};

// MDXImage component for use in MDX content
function MDXImageComponent(props: React.ImgHTMLAttributes<HTMLImageElement> & { blurDataURL?: string }) {
  const { blurDataURL, ...imgProps } = props;
  const imageProps = convertImgPropsToImageProps(imgProps);

  if (!imageProps.src) {
    return null;
  }

  return <ZoomImage {...imageProps} blurDataURL={blurDataURL} />;
}

// MDXImage wrapper that handles blur data URL lookup
function createMDXImage(images?: { alt: string; src: string; blurDataURL: string }[]) {
  return function MDXImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    if (!images) {
      return <MDXImageComponent {...props} />;
    }
    const blurDataURL = images.find((image) => image.src === props.src)?.blurDataURL;

    return <MDXImageComponent {...props} blurDataURL={blurDataURL} />;
  };
}

export function MDX({ code, images, className }: MDXProps) {
  const MDXImage = createMDXImage(images);

  return (
    <article
      className={cn(
        "prose max-w-none transition-all",
        "prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:font-display prose-headings:text-warm-white",
        "prose-p:my-4 prose-p:text-warm-white/80 prose-p:leading-relaxed",
        "prose-a:text-warm-white/80 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-warm-white",
        "prose-code:bg-warm-grey-2/10 prose-code:px-2 prose-code:py-1 prose-code:text-warm-white",
        "prose-li:mb-2 prose-li:text-warm-white/80 prose-li:leading-relaxed",
        "prose-ul:my-8 prose-ul:space-y-6",
        "prose-ol:my-4 prose-ol:space-y-2",
        className
      )}
      data-mdx-container
    >
      <MDXContent
        code={code}
        components={{
          ...components,
          Image: MDXImage,
        }}
      />
    </article>
  );
}

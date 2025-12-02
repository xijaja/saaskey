import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { constructMetadata } from "@/components/blocks/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...constructMetadata(),
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <Suspense fallback={<div>Loading...</div>}>
            <IntlProvider locale={locale}>{children}</IntlProvider>
          </Suspense>
        </ThemeProvider>
        <Toaster />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""} />
    </html>
  );
}

// 异步加载消息的组件，在 Suspense 边界内
// async component to load messages in the Suspense boundary
async function IntlProvider({ locale, children }: { locale: string; children: React.ReactNode }) {
  // 设置请求语言
  // set the request locale
  setRequestLocale(locale);
  // 获取消息
  // get messages from the server
  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}

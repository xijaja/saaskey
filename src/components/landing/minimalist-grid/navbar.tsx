"use client";

import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";
import LocaleToggle from "@/components/blocks/locale-toggle";
import Logo from "@/components/blocks/logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button, buttonVariants } from "@/components/ui/button";
import { getLocalizedText, Link, type Locale, type LocalizedText } from "@/i18n/routing";

type menuLink = {
  name: LocalizedText;
  href: string;
};

const menuLinks: menuLink[] = [
  { name: { zh: "功能", en: "Features" }, href: "/#features" },
  { name: { zh: "定价", en: "Pricing" }, href: "/#pricing" },
  { name: { zh: "常见问题", en: "FAQ" }, href: "/#faq" },
  { name: { zh: "博客", en: "Blog" }, href: "/blog" },
];

const action: menuLink = { name: { zh: "仪表盘", en: "Dashboard" }, href: "/dashboard" };

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale() as Locale;

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="flex items-center space-x-2" href="/">
              <Logo />
              <span className="font-semibold text-xl">SAASKEY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {menuLinks.map((link) => (
              <Link
                className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
                href={link.href}
                key={link.href}
              >
                {getLocalizedText(link.name, locale)}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler
              className={buttonVariants({ variant: "outline", size: "icon", className: "size-8 border-none" })}
            />
            <LocaleToggle />
            <Button asChild className="hidden w-26 text-center md:block">
              <a href={action.href}>{getLocalizedText(action.name, locale)}</a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {menuLinks.map((link) => (
                <Link
                  className="block rounded-md px-3 py-2 font-medium text-base text-muted-foreground hover:bg-accent hover:text-foreground"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getLocalizedText(link.name, locale)}
                </Link>
              ))}
              <Button asChild className="h-10 w-full">
                <Link href={action.href}>{getLocalizedText(action.name, locale)}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

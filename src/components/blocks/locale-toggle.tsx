"use client";

import { Languages } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLocalizedText, LOCALES, type Locale, type LocalizedText, usePathname, useRouter } from "@/i18n/routing";
import { useLocaleStore } from "@/stores/locale-store";

const localeTexts: Record<string, LocalizedText> = {
  name: {
    en: "English",
    zh: "中文",
  },
};

export default function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const { dismissLanguageAlert } = useLocaleStore();

  function onToggle(nextLocale: Locale) {
    dismissLanguageAlert();

    startTransition(() => {
      // 构建包含查询参数的完整路径
      const query = searchParams.toString();
      const pathnameWithQuery = query ? `${pathname}?${query}` : pathname;

      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        // { pathname: "/", params: params || {} }, // if your want to redirect to the home page
        { pathname: pathnameWithQuery, params: params || {} }, // if your want to redirect to the current page
        { locale: nextLocale }
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Languages className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((localeName: Locale) => (
          <DropdownMenuItem key={localeName} onClick={() => onToggle(localeName)}>
            {getLocalizedText(localeTexts.name, localeName) || localeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { MinimalistGridLayout } from "@/components/landing/minimalist-grid";
import { SITE } from "@/config/site";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  switch (SITE.landingPage.theme) {
    case "minimalist-grid":
      return <MinimalistGridLayout>{children}</MinimalistGridLayout>;
    default:
      return <MinimalistGridLayout>{children}</MinimalistGridLayout>;
  }
}

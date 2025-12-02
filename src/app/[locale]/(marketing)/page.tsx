import { MinimalistGridPage } from "@/components/landing/minimalist-grid";
import { SITE } from "@/config/site";

export default function Home() {
  switch (SITE.landingPage.theme) {
    case "minimalist-grid":
      return <MinimalistGridPage />;
    default:
      return <MinimalistGridPage />;
  }
}

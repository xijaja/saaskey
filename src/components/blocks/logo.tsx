import { Target } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  const logoSrc = SITE.landingPage.logoImage;

  if (logoSrc) {
    return <Image alt="saaskey logo" className={cn("h-8 w-8", className)} height={32} src={logoSrc} width={32} />;
  }

  return <Target className={cn("h-6 w-6", className)} />;
}

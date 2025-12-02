"use client";

import { PricingTableOne } from "@/components/billingsdk/pricing-table-one";
import { plans } from "@/lib/billingsdk-config";

export function PricingTableOneDemo() {
  return (
    <PricingTableOne
      className="w-full"
      description="Choose the plan that's right for you"
      onPlanSelect={(planId) => console.log("Selected plan:", planId)}
      plans={plans}
      size="medium" // small, medium, large
      theme="classic" // minimal or classic
      title="Pricing"
    />
  );
}

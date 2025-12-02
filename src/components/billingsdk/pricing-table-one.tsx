"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Check, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import type { Plan } from "@/lib/billingsdk-config";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-32", {
  variants: {
    size: {
      small: "py-6 md:py-12",
      medium: "py-10 md:py-20",
      large: "py-16 md:py-32",
    },
    theme: {
      minimal: "",
      classic: "relative overflow-hidden bg-gradient-to-b from-background to-muted/20",
    },
  },
  defaultVariants: {
    size: "medium",
    theme: "minimal",
  },
});

const titleVariants = cva("text-pretty text-left font-bold", {
  variants: {
    size: {
      small: "text-3xl lg:text-4xl",
      medium: "text-4xl lg:text-5xl",
      large: "text-4xl lg:text-6xl",
    },
    theme: {
      minimal: "",
      classic: "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text p-1 text-center text-transparent",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const descriptionVariants = cva("max-w-3xl text-muted-foreground", {
  variants: {
    size: {
      small: "text-base lg:text-lg",
      medium: "text-lg lg:text-xl",
      large: "lg:text-xl",
    },
    theme: {
      minimal: "text-left",
      classic: "mx-auto text-center",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const cardVariants = cva("flex h-full w-full flex-col rounded-lg border text-left transition-all duration-300", {
  variants: {
    size: {
      small: "p-4",
      medium: "p-5",
      large: "p-6",
    },
    theme: {
      minimal: "",
      classic: "border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl",
    },
    highlight: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      theme: "classic",
      highlight: true,
      className:
        "relative overflow-hidden border-primary/30 bg-gradient-to-b from-primary/5 to-transparent ring-2 ring-primary/20",
    },
    {
      theme: "minimal",
      highlight: true,
      className: "bg-muted",
    },
  ],
  defaultVariants: {
    size: "large",
    theme: "minimal",
    highlight: false,
  },
});

const priceTextVariants = cva("font-medium", {
  variants: {
    size: {
      small: "text-3xl",
      medium: "text-4xl",
      large: "text-4xl",
    },
    theme: {
      minimal: "",
      classic:
        "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-extrabold text-5xl text-transparent",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const featureIconVariants = cva("h-[1lh] flex-none", {
  variants: {
    size: {
      small: "size-3",
      medium: "size-4",
      large: "size-4",
    },
    theme: {
      minimal: "text-primary",
      classic: "text-emerald-500",
    },
  },
  defaultVariants: {
    size: "large",
    theme: "minimal",
  },
});

const highlightBadgeVariants = cva("mb-8 block w-fit", {
  variants: {
    theme: {
      minimal: "",
      classic: "border-primary/20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg",
    },
  },
  defaultVariants: {
    theme: "minimal",
  },
});

const toggleVariants = cva("flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg", {
  variants: {
    theme: {
      minimal: "bg-muted",
      classic: "border border-border/50 bg-muted/50 shadow-lg backdrop-blur-sm",
    },
  },
  defaultVariants: {
    theme: "minimal",
  },
});

const buttonVariants = cva(
  "gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      theme: {
        minimal:
          "group before:-z-10 after:-z-10 relative isolate inline-flex h-9 w-full items-center justify-center overflow-hidden rounded-md bg-primary px-3 py-2 text-left font-medium text-primary-foreground text-sm shadow ring-1 ring-primary before:pointer-events-none before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b before:from-primary-foreground/20 before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-b after:from-primary-foreground/10 after:to-transparent after:mix-blend-overlay hover:cursor-pointer hover:bg-primary/90",
        classic:
          "relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-r from-primary to-primary/80 px-6 py-3 font-semibold text-primary-foreground hover:shadow-xl active:scale-95",
      },
    },
    defaultVariants: {
      theme: "minimal",
    },
  }
);

export interface PricingTableOneProps extends VariantProps<typeof sectionVariants> {
  className?: string;
  plans: Plan[];
  title?: string;
  description?: string;
  onPlanSelect?: (planId: string) => void;
}

export function PricingTableOne({
  className,
  plans,
  title,
  description,
  onPlanSelect,
  size,
  theme = "minimal",
}: PricingTableOneProps) {
  const [isAnnually, setIsAnnually] = useState(false);
  const uniqueId = useId(); // Generate unique ID automatically

  function calculateDiscount(monthlyPrice: string, yearlyPrice: string): number {
    const monthly = Number.parseFloat(monthlyPrice);
    const yearly = Number.parseFloat(yearlyPrice);

    if (
      monthlyPrice.toLowerCase() === "custom" ||
      yearlyPrice.toLowerCase() === "custom" ||
      Number.isNaN(monthly) ||
      Number.isNaN(yearly) ||
      monthly === 0
    ) {
      return 0;
    }

    const discount = ((monthly * 12 - yearly) / (monthly * 12)) * 100;
    return Math.round(discount);
  }

  const yearlyPriceDiscount = plans.length
    ? Math.max(...plans.map((plan) => calculateDiscount(plan.monthlyPrice, plan.yearlyPrice)))
    : 0;

  return (
    <section className={cn(sectionVariants({ size, theme }), className)}>
      {/* Classic theme background elements */}
      {theme === "classic" && (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-2xl" />
        </>
      )}

      <div className={cn("container relative", "p-0 md:p-4")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <div className={cn("flex flex-col gap-4", theme === "classic" && "text-center")}>
            <h2 className={cn(titleVariants({ size, theme }))}>{title || "Pricing"}</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between gap-5 md:gap-10",
              theme === "classic" ? "md:flex-col md:items-center" : "md:flex-row"
            )}
          >
            <p className={cn(descriptionVariants({ size, theme }))}>
              {description || "Transparent pricing with no hidden fees. Upgrade or downgrade anytime."}
            </p>
            <div className={cn(toggleVariants({ theme }), theme === "classic" && "mx-auto")}>
              <RadioGroup
                className="h-full grid-cols-2"
                defaultValue="monthly"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem className="peer sr-only" id={`${uniqueId}-monthly`} value="monthly" />
                  <Label
                    className="flex h-full cursor-pointer items-center justify-center px-2 font-semibold text-muted-foreground transition-all hover:text-foreground peer-data-[state=checked]:text-primary md:px-7"
                    htmlFor={`${uniqueId}-monthly`}
                  >
                    Monthly
                  </Label>
                </div>
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem className="peer sr-only" id={`${uniqueId}-annually`} value="annually" />
                  <Label
                    className="flex h-full cursor-pointer items-center justify-center gap-1 px-2 font-semibold text-muted-foreground transition-all hover:text-foreground peer-data-[state=checked]:text-primary md:px-7"
                    htmlFor={`${uniqueId}-annually`}
                  >
                    Yearly
                    {yearlyPriceDiscount > 0 && (
                      <span className="ml-1 rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-medium text-primary text-xs">
                        Save {yearlyPriceDiscount}%
                      </span>
                    )}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                animate={{ opacity: 1 }}
                className={cn(
                  cardVariants({
                    size,
                    theme,
                    highlight: plan.highlight,
                  })
                )}
                initial={{ opacity: 0 }}
                key={plan.id}
                layout
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Classic theme highlight effect */}
                {theme === "classic" && plan.highlight && (
                  <>
                    <div className="-top-px -translate-x-1/2 absolute left-1/2 h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className={highlightBadgeVariants({ theme })}>Most Popular</Badge>
                    </div>
                  </>
                )}

                <Badge
                  className={cn(
                    theme === "classic" && !plan.highlight
                      ? "mb-8 border-border/50 bg-muted text-muted-foreground"
                      : highlightBadgeVariants({ theme })
                  )}
                >
                  {plan.title}
                </Badge>

                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    initial={{ opacity: 0, y: 10 }}
                    key={isAnnually ? "year" : "month"}
                    transition={{ duration: 0.2 }}
                  >
                    {isAnnually ? (
                      <>
                        <span className={cn("my-auto", priceTextVariants({ size, theme }))}>
                          {Number.parseFloat(plan.yearlyPrice) >= 0 && <>{plan.currency}</>}
                          {plan.yearlyPrice}
                          {calculateDiscount(plan.monthlyPrice, plan.yearlyPrice) > 0 && (
                            <span
                              className={cn(
                                "ml-2 text-xs",
                                theme === "classic" ? "font-semibold text-emerald-500" : "underline"
                              )}
                            >
                              {calculateDiscount(plan.monthlyPrice, plan.yearlyPrice)}% off
                            </span>
                          )}
                        </span>
                        <p className="text-muted-foreground">per year</p>
                      </>
                    ) : (
                      <>
                        <span className={cn(priceTextVariants({ size, theme }))}>
                          {Number.parseFloat(plan.monthlyPrice) >= 0 && <>{plan.currency}</>}
                          {plan.monthlyPrice}
                        </span>
                        <p className="text-muted-foreground">per month</p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <Separator
                  className={cn(
                    "my-6",
                    theme === "classic" && "bg-linear-to-r from-transparent via-border to-transparent"
                  )}
                />

                <div className="flex h-full flex-col justify-between gap-10">
                  <ul className="space-y-4 text-muted-foreground">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        key={featureIndex}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      >
                        <Check className={cn(featureIconVariants({ size, theme }))} />
                        <span className={cn(theme === "classic" && "text-foreground/90")}>{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    aria-label={`Select ${plan.title} plan`}
                    className={buttonVariants({ theme })}
                    onClick={() => onPlanSelect?.(plan.id)}
                  >
                    {theme === "classic" && plan.highlight && <Zap className="mr-1 h-4 w-4" />}
                    {plan.buttonText}
                    {theme === "classic" && (
                      <div className="-translate-x-full absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-700 hover:translate-x-full" />
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

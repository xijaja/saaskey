"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tab = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
};

export function Tabs({ tabs, defaultValue, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  return (
    <div className={cn("my-6 w-full", className)}>
      <div className="flex gap-1 border-gray-200 border-b dark:border-gray-700">
        {tabs.map((tab) => (
          <Button
            className="rounded-t-lg rounded-b-none border-transparent border-b-2 data-active:border-primary"
            data-active={activeTab === tab.value ? "" : undefined}
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            size="sm"
            variant={activeTab === tab.value ? "default" : "ghost"}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="rounded-b-lg border border-gray-200 border-t-0 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        {tabs.map((tab) => (
          <div className={cn(activeTab === tab.value ? "block" : "hidden")} key={tab.value}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple wrapper for code tabs
type CodeTabsProps = {
  children: React.ReactNode;
  defaultValue?: string;
};

export function CodeTabs({ children, defaultValue }: CodeTabsProps) {
  const tabs: Tab[] = [];

  // Parse children to extract tab content
  const childArray = Array.isArray(children) ? children : [children];

  for (const child of childArray) {
    if ((child as any)?.props?.["data-language"]) {
      tabs.push({
        label: (child as any).props["data-language"],
        value: (child as any).props["data-language"].toLowerCase(),
        content: child,
      });
    }
  }

  if (tabs.length === 0) {
    return <div>{children}</div>;
  }

  return <Tabs defaultValue={defaultValue} tabs={tabs} />;
}

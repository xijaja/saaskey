"use client";

import { useEffect, useRef, useState } from "react";

type MermaidProps = {
  chart: string;
  caption?: string;
};

export function Mermaid({ chart, caption }: MermaidProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderChart = async () => {
      try {
        // Dynamically import mermaid
        const mermaid = (await import("mermaid")).default;

        // Initialize mermaid with dark mode support
        mermaid.initialize({
          startOnLoad: true,
          theme: "base",
          themeVariables: {
            primaryColor: "#3b82f6",
            primaryTextColor: "#1f2937",
            primaryBorderColor: "#2563eb",
            lineColor: "#6b7280",
            secondaryColor: "#8b5cf6",
            tertiaryColor: "#ec4899",
          },
        });

        if (elementRef.current) {
          const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart);
          elementRef.current.innerHTML = svg;
          setIsLoaded(true);
        }
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError("Failed to render diagram");
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className="my-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
        <p className="text-red-600 text-sm dark:text-red-400">{error}</p>
        <pre className="mt-2 overflow-x-auto text-red-500 text-xs dark:text-red-500">{chart}</pre>
      </div>
    );
  }

  return (
    <figure className="my-8">
      <div className="flex justify-center rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        {!isLoaded && <div className="flex h-48 items-center justify-center text-gray-500">Loading diagram...</div>}
        <div
          className="mermaid w-full overflow-x-auto"
          ref={elementRef}
          style={{ minHeight: isLoaded ? "auto" : "0" }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-gray-600 text-sm dark:text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
}

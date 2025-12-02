import CTA from "./cta";
import FAQ from "./faq";
import Feature from "./feature";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Pricing from "./pricing";
import Solution from "./solution";
import TechStack from "./tech-stack";

export function MinimalistGridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="isolate">
        <div className="max-w-screen overflow-x-hidden">
          {/* Unified Grid Layout with Border Lines - Inspired by Tailwind CSS */}
          <div className="md:-mx-4 grid min-h-dvh grid-cols-1 grid-rows-[auto_1px_auto_1px_auto_1px_auto_1px_auto_1px_auto_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
            {/* Left border - only visible on larger screens */}
            <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-muted-foreground)]/5 md:block dark:[--pattern-fg:var(--color-foreground)]/10" />
            {/* Right border - only visible on larger screens */}
            <div className="col-start-3 row-span-full row-start-1 hidden border-x border-x-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-muted-foreground)]/5 md:block dark:[--pattern-fg:var(--color-foreground)]/10" />

            {/* Main content grid */}
            {/* <div className="grid gap-24 pb-24 text-foreground sm:gap-40 md:pb-40"> */}
            <div className="grid gap-24 pb-12 sm:gap-40 md:pb-12">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MinimalistGridPage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Solution />
      <Feature />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}

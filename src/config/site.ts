export const SITE = {
  id: "saaskey",
  name: "SaaSKey",
  title: "SaaSKey - The key to building your AI SaaS in hours.",
  description:
    "SaaSKey is a SaaS development template based on Nextjs 16, it has built-in point management, dialogue components, AIGC generation, and out-of-box AI capabilities.",
  url: "https://saaskey.ai",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://x.com/xijaja",
    github: "https://github.com/xijaja",
  },
  keywords: [
    "SaaSKey",
    "Nextjs 16",
    "Tailwind CSS v4",
    "Radix UI",
    "Shadcn Design",
    "Framer Motion",
    "Vercel AI SDK",
    "Replicate",
    "PostgreSQL",
    "Drizzle ORM",
    "Better Auth",
    "Stripe",
    "Resend",
    "React Email",
  ],
  authors: [{ name: "xijaja", url: "https://github.com/xijaja" }],
  creator: "xijaja",
  publisher: "xijaja",
  twitterHandle: "@xijaja",

  landingPage: {
    theme: "minimalist-grid",
    logoImage: "/logo.svg",
  },

  auth: {
    provider: "better-auth",
    magicLink: true,
    socialLogin: {
      google: true,
      github: true,
    },
  },

  email: {
    provider: "resend",
    from: "SaaSKey Team <notify@saaskey.ai>",
    magicLinkLimit: {
      maxAttempts: 5, // 5 attempts
      windowSeconds: 3600, // 1 hour
    },
  },

  payment: {
    provider: "stripe",
    // todo: add priceid、paymode、promoCode
    plans: {
      monthly: {
        free: {
          price: 100,
          credits: 1000,
        },
        pro: {
          price: 100,
          credits: 10_000_000,
        },
        plus: {
          price: 100,
          credits: 10_000_000,
        },
        max: {
          price: 100,
          credits: 100_000_000,
        },
      },
      yearly: {
        free: {
          price: 100,
          credits: 1000,
        },
        pro: {
          price: 100,
          credits: 10_000_000,
        },
        plus: {
          price: 100,
          credits: 10_000_000,
        },
        max: {
          price: 100,
          credits: 100_000_000,
        },
      },
    },
  },

  affiliate: {
    provider: "affonso",
  },
};

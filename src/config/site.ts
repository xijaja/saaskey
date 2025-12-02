export const SITE = {
  id: "saaskey",
  name: "SaaSKey",
  title: "SaaSKey - AI SaaS Development Template",
  description: "SaaS Key is a platform for creating and managing SaaS products.",
  url: "https://saaskey.ai",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://x.com/xijaja",
    github: "https://github.com/xijaja",
  },
  keywords: [
    "SaaSKey",
    "AI SaaS Development Template",
    "SaaS Development",
    "AI SaaS",
    "SaaS Development Template",
    "Nextjs Template",
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

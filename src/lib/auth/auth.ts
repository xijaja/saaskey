import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { lastLoginMethod, magicLink } from "better-auth/plugins";
import { SITE } from "@/config/site";
import { db, schema } from "@/lib/db";
import { sendEmail } from "../mail/resend";

export const auth = betterAuth({
  // app name secret and base url
  appName: "Saaskey",
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_BASE_URL,
  // 可信来源列表
  trustedOrigins: ["http://localhost:3000", "https://saaskey.ai", "https://saaskey.dev"],

  // 数据库
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true, // 使用复数表名
    schema,
  }),

  // 社交账号登录
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    },
  },

  // 设置插件
  plugins: [
    // 设置魔法链接插件，用于在客户端发送魔法链接来登录
    magicLink({
      // biome-ignore lint: unused-parameters
      sendMagicLink: async ({ email, url }, request): Promise<void> => {
        await sendEmail.magic(email, url); // 发送魔法链接邮件
      },
    }),
    // 设置最后登录方式插件，以方便记录用户最后登录方式
    lastLoginMethod({
      storeInDatabase: true, // 将最后登录方式存储到数据库中
    }),
    // 设置 cookie 插件，用于在 Next.js 中设置 cookie
    nextCookies(),
  ],

  // 高级配置
  advanced: {
    cookiePrefix: SITE.id.toLowerCase().replace(/ /g, "_"), // 设置 cookie 前缀
  },
});

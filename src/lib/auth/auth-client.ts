import { inferAdditionalFields, lastLoginMethodClient, magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";

/**
 * Create auth client
 * 创建 auth 客户端
 */
export const authClient = createAuthClient({
  plugins: [
    // Set inferAdditionalFields plugin, to infer additional fields in the client
    // 设置 inferAdditionalFields 插件，用于在客户端推断额外的字段
    inferAdditionalFields<typeof auth>(),
    // Set magicLinkClient plugin, to easily set magic link for email registration and login
    // 设置魔法链接插件，以方便使用 email 注册和登录时设置魔法链接
    magicLinkClient(),
    // Set lastLoginMethodClient plugin, to easily record the user's last login method
    // 设置最后登录方式插件，以方便记录用户最后登录方式
    lastLoginMethodClient(),
  ],
});

// Export signIn、signUp、useSession methods from authClient
// 导出 authClient 的 signIn、signUp、useSession 方法
export const { signIn, signUp, useSession } = authClient;

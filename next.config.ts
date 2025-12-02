import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // 严格模式
  // React strict mode
  reactStrictMode: true,

  // 自动优化组件渲染
  // React compiler
  reactCompiler: true,

  // 缓存组件
  // Cache components
  cacheComponents: true,

  // 输出模式
  // Output mode
  output: "standalone",

  // 允许从这些远程域加载图片
  // Allow loading images from these remote domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "*.replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },

  // 实验特性配置
  // Experimental feature configuration
  experimental: {
    // 在终端中显示浏览器调试信息
    // Display browser debugging information in the terminal
    browserDebugInfoInTerminal: true,
    // 文件系统缓存
    // file system cache
    turbopackFileSystemCacheForDev: true,
  },
};

// 插件配置
// Plugin configuration
const withNextIntl = createNextIntlPlugin();

// 链式调用方式组合多个插件
// Chained approach for multiple plugins
// withContentCollections must be the outermost wrapper
export default withContentCollections(withNextIntl(nextConfig));

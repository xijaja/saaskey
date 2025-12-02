# Saaskey.ai - 快速构建 AI SaaS 的关键

<div align="center">
  <a href="https://saaskey.ai">
    <img src="./public/logo.png" alt="Saaskey Logo" width="120" height="120">
  </a>
  <br />
  <br />
  <p align="center">
    <a href="/">🇺🇸 English</a> | <strong>🇨🇳 中文</strong>
  </p>
  
  <h3 align="center">把「想做一个 AI SaaS」变成「这个周末就能跑起来」</h3>

  <p align="center">
    面向独立开发者和独立创始人的现代化 Next.js 16 SaaS 启动模板。
    <br />
    <br />
    <a href="https://github.com/xijaja/saaskey/issues">反馈霸哥</a>
    ·
    <a href="https://github.com/xijaja/saaskey/issues">请求功能</a>
    ·
    <a href="https://saaskey.ai" rel="noopener" target="_blank">在线预览</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/license/xijaja/saaskey?style=flat-square" alt="MIT License" />
    <img src="https://img.shields.io/github/stars/xijaja/saaskey?style=flat-square" alt="GitHub Stars" />
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind v4" />
  </p>
</div>

---

![Saaskey 落地页](./public/og-image.png)
![Saaskey 仪表板](./public/dashboard.png)

---

## 🚀 Saaskey 背后的故事

你好，我是 **[希嘉嘉](https://github.com/xijaja)**。

我是一名有 **8 年经验的产品经理**。在今年 5 月，我选择离职，全职自学编程，开始做一名 Indie Hacker。

刚开始时，我非常喜欢 **SvelteKit** 的简洁优雅。但当我真正想搭一个完整的 SaaS 应用时，发现现实有点残酷：  
生态还不够成熟，很难找到「拿来就能用」的组合方案。  

所以我咬咬牙，转向了 **Next.js** —— 更大的生态、更丰富的成熟方案，也意味着更少的「自己造轮子」时间。

### 为什么要开源？

一开始，我原本打算把这个项目做成收费模板的。后来才想明白两件事：

1. 我并不想把主要精力花在给模板做客服，我更想把时间用来做产品；  
2. 我很大程度上是因为大量优秀的开源项目，我也希望其他人能少走几步弯路。

所以，在整理出一套自己认可的技术栈和项目结构之后，我把那些「太复杂的逻辑」都去掉，只保留了最重要的部分：
**漂亮且可扩展的 UI 基础、稳定可靠的认证系统、现代的数据库与类型系统；**
剩下的，是一块足够干净的画布，让你可以放心在上面画出自己的业务逻辑。

---

## ✨ 你能从 Saaskey 里得到什么？

- **开箱即用的 SaaS 骨架**
  - **多组织架构**：营销页、登录页、受保护的仪表盘布局、支持多团队/组织切换；
  - **国际化与 SEO**：完整的 i18n 路由支持与 SEO 元数据配置；
  - **Docker 支持**：内置 Dockerfile，轻松部署到 Coolify 或 K8s。

- **现代、可持续演进的技术栈**
  - 使用 **Next.js 16 + React 19 + TypeScript**，紧跟官方路线；
  - 基于 **Tailwind CSS v4** 和 Radix UI 做 UI 基建，样式体系简洁可控；
  - 使用 **Drizzle ORM + PostgreSQL**，拿到类型安全又可维护的数据库层。

- **真正可落地的 Auth & Billing 集成**
  - **Better Auth**：现代化、类型友好的认证系统，支持常见 SaaS 场景；
  - **Stripe**：面向订阅的计费集成，适合作为 MVP 到 Pro 的自然演进;
  - **内容系统**：基于 Content Collections 的 MDX 博客/文档系统。

- **AI 产品所需的关键拼图**
  - 接好 **Vercel AI SDK**，适合构建 Chat、Agent、生成式应用；
  - 集成 **Replicate**，适用于图片 / 视频生成等重量级模型调用场景；
  - 项目中已经提供了基础的 Chat、Image、Video 等页面和组件。

- **极致的开发者体验**
  - **双语代码注释**：核心逻辑均包含 **中英文双语注释**，无需担心读不懂代码；
  - **现代技术栈**：Next.js 16 + React 19 + TypeScript + Tailwind v4 + Biome；
  - **Drizzle ORM**：类型安全又可维护的数据库层。

---

## 🧱 技术栈一览

| 分类            | 技术栈                                                    |
| :-------------- | :-------------------------------------------------------- |
| **核心框架**    | Next.js 16（App Router）、React 19、TypeScript            |
| **数据库**      | PostgreSQL、Drizzle ORM                                   |
| **认证 Auth**   | Better Auth                                               |
| **支付 / 订阅** | Stripe                                                    |
| **UI / 样式**   | Tailwind CSS v4、Radix UI、Shadcn 设计理念、Framer Motion |
| **AI 能力**     | Vercel AI SDK、Replicate                                  |
| **邮件**        | Resend、React Email                                       |
| **表单**        | React Hook Form、Zod                                      |
| **工具链**      | Biome、Ultracite、Bun                                     |

你可以把它理解成：一个已经打通了「从登录注册 → 订阅支付 → AI 功能 → 内容输出」完整闭环的 SaaS 项目模板。

---

## ⚡ 如何在本地快速跑起来？

### 1. 环境准备

- Node.js 20+ 或 [Bun](https://bun.sh/)（推荐）  
- 一套可访问的 PostgreSQL 数据库（本地或 [Neon](https://neon.tech/) 等托管方案）  
- Stripe、Resend、Better Auth 等相关 API Key

### 2. 克隆项目

```bash
git clone https://github.com/xijaja/saaskey.git
cd saaskey
```

如果你习惯用 GitHub Template 的方式，也可以直接在仓库页面点击「Use this template」创建自己的项目。

### 3. 安装依赖

可以选择你偏好的包管理工具：

```bash
npm install
# 或
bun install
```

（如果你已经在用 pnpm/yarn，也可以自行切换，这里不做强绑定。）

### 4. 配置环境变量

复制示例配置文件并根据自己的账号信息填写：

```bash
cp .env.example .env.local
```

至少需要配置：

- 数据库连接字符串（PostgreSQL / Neon）  
- Better Auth 的相关密钥  
- Stripe、Resend 等第三方服务 Key

### 5. 初始化数据库

使用 Drizzle 将 schema 推送到你的数据库：

```bash
npm run db:push
```

如果你对 schema 做了修改，也可以重复执行这条命令进行同步。

### 6. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开：`http://localhost:3000`  
你会看到一个已经带有营销页、登录、仪表盘和 AI 功能入口的完整应用骨架。

## 🌟 支持这个项目

如果 SaaSKey 节省了您的时间或对您有任何帮助，请给它一个星🌟，您的支持会让我充满动力。
您还可以在社交媒体上分享它或利用它搭建的任何产品。
或者提出你在实战中遇到的问题和想法，也将帮助这个项目变得更好。

## 🗺️ 路线图

这个项目还在持续打磨中，下面是已经在规划中的方向——本质上是我在做产品规划时给自己的 To-do List，如果你有想要的集成也欢迎在 Issues 里或通过微信（weichat: xiwuio）告诉我：

- [x] **身份认证:** 集成 Better Auth (邮箱/密码 + 社交登录)
- [x] **数据库:** Drizzle ORM + PostgreSQL 完整架构
- [x] **支付系统:** Stripe 订阅支付 (收银台、Webhooks、客户门户)
- [x] **AI 交互:** 完整的流式对话 (Chat)、文生图、文生视频 UI 界面
- [x] **多租户:** 支持多组织/团队 (Organization) 切换与管理
- [x] **国际化:** 完整的 i18n 路由与 SEO 元数据支持
- [x] **部署:** 内置 Dockerfile，支持 Docker/K8s 容器化部署
- [x] **内容系统:** 基于 MDX 的博客内容管理
- [x] **邮件服务:** 集成 Resend 与 React Email
- [ ] **工作流 / Job：** 集成 [Inngest](https://www.inngest.com/) 等事件驱动工作流
- [ ] **支付扩展：** 支持 [Creem](https://creem.io/)
- [ ] **支付扩展：** 支持 [Polar.sh](https://polar.sh/)
- [ ] **推广分销：** 集成 [Affonso.io](https://affonso.io/)
- [ ] **推广分销：** 集成 [Promotekit.com](https://promotekit.com/)
- [ ] **邮件营销：** 集成 [Useplunk.com](https://www.useplunk.com/)
- [ ] **邮件营销：** 集成 [Loops.so](https://loops.so/)
- [ ] **分析统计：** 与 [Rybbit.com](https://rybbit.com/) 等隐私友好分析工具集成
- [ ] **合规 / 法务：** GDPR Cookie 同意弹窗组件
- [ ] **法律文档模板：** 用户协议、Cookie 政策等可复用模板
- [ ] **文档系统：** 集成 [Fumadocs](https://fumadocs.vercel.app/)
- [ ] **CMS：** 增加 Stash 等内容管理集成
- [ ] **部署选项：** Cloudflare Workers 等更多部署目标支持
- [ ] **主题拓展：** 增加第 2 套以上的 Landing Page 主题

## 🤝 联系与社区

我也在尝试和一群对「全球化 / 出海」感兴趣的 Indie Hackers 一起交流产品与工程。

如果你想聊代码、产品、出海，或者只是想交个朋友，可以加我微信：

<div align="left">
  <img src="./public/wechat.jpg" alt="My WeChat" width="200" style="border-radius: 10px;">
  <p><em>微信扫码添加好友（weichat: xiwuio）</em></p>
</div>

## 📄 开源协议

本项目基于 **MIT License** 开源, 查看 `LICENSE` 以了解更多。

---

<div align="center">
  Built with ❤️ by <a href="https://x.com/xijaja">xijaja</a>
</div>
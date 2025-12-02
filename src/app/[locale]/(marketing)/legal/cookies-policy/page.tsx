import { getLocale } from "next-intl/server";

export default async function CookiesPolicyPage() {
  const locale = await getLocale();

  switch (locale) {
    // 中文
    case "zh":
      return (
        <div className="mx-auto max-w-6xl px-4 py-10 leading-7">
          <h1 className="mb-6 font-bold text-2xl">Cookie 政策</h1>
          <p className="text-muted-foreground text-sm">最近更新：2025-09-16</p>

          <p className="mt-6">
            本 Cookie 政策说明我们在您访问或使用 SaaSKey（"本项目"）的网站、文档与示例时如何使用 Cookie 及类似技术。
          </p>

          <h2 className="mt-8 font-semibold text-xl">1. 什么是 Cookie</h2>
          <p className="mt-3">
            Cookie
            是网站在您浏览时存储在设备上的小型文本文件。它们通常用于使网站正常运行、提升体验、进行分析或提供个性化内容与功能。
          </p>

          <h2 className="mt-8 font-semibold text-xl">2. 我们使用的 Cookie 类型</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>必要类 Cookie：用于实现页面的基本功能与安全（例如会话保持、首选语言）。禁用后网站可能无法正常工作。</li>
            <li>
              性能/分析类 Cookie：用于统计访问数据与使用情况，帮助我们改进文档与示例质量。我们倾向采用聚合或匿名化数据。
            </li>
            <li>功能性 Cookie：用于记住您的偏好设置（如主题、语言切换）。</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">3. 第三方 Cookie</h2>
          <p className="mt-3">
            我们可能使用由第三方提供的服务（如分析、支付、身份认证或通知等），这些第三方可能在其服务中设置
            Cookie。第三方 Cookie 受相应提供方的政策约束。
          </p>

          <h2 className="mt-8 font-semibold text-xl">4. 管理 Cookie</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>浏览器设置：大多数浏览器允许您管理、删除或阻止 Cookie。请参阅您的浏览器帮助文档了解具体操作。</li>
            <li>退出分析：某些分析工具提供退出机制，您可根据其指引进行设置。</li>
            <li>注意：禁用某些 Cookie 可能导致网站功能受限或体验下降。</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">5. 变更与更新</h2>
          <p className="mt-3">
            我们可能会不时更新本政策，并在页面标注"最近更新"日期。继续使用即表示您接受更新后的政策。
          </p>

          <h2 className="mt-8 font-semibold text-xl">6. 联系我们</h2>
          <p className="mt-3">如对 Cookie 的使用有任何疑问，请通过网站或文档中提供的联系方式与我们联系。</p>
        </div>
      );

    // 默认返回英文
    default:
      return (
        <div className="mx-auto max-w-6xl px-4 py-10 leading-7">
          <h1 className="mb-6 font-bold text-2xl">Cookie Policy</h1>
          <p className="text-muted-foreground text-sm">Last Updated: 2025-09-16</p>

          <p className="mt-6">
            This Cookie Policy explains how we use Cookies and similar technologies when you visit or use the SaaSKey
            ("this project") website, documentation, and examples.
          </p>

          <h2 className="mt-8 font-semibold text-xl">1. What is a Cookie</h2>
          <p className="mt-3">
            Cookies are small text files that websites store on your device when you browse. They are typically used to
            make websites work properly, improve your experience, analyze data, or provide personalized content and
            features.
          </p>

          <h2 className="mt-8 font-semibold text-xl">2. Types of Cookies We Use</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Necessary Cookies: Used to implement basic page functionality and security (e.g., session maintenance,
              preferred language). Disabling them may prevent the website from functioning properly.
            </li>
            <li>
              Performance/Analytical Cookies: Used to collect data on visits and usage, helping us improve the quality
              of our documentation and examples. We prefer to use aggregated or anonymized data.
            </li>
            <li>Functional Cookies: Used to remember your preferences (e.g., theme, language switching).</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">3. Third-Party Cookies</h2>
          <p className="mt-3">
            We may use services provided by third parties (such as analytics, payment, authentication, or
            notifications), which may set Cookies in their services. Third-party Cookies are subject to the policies of
            the respective providers.
          </p>

          <h2 className="mt-8 font-semibold text-xl">4. Managing Cookies</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Browser Settings: Most browsers allow you to manage, delete, or block Cookies. Please refer to your
              browser's help documentation for specific instructions.
            </li>
            <li>
              Opt-Out of Analytics: Some analytics tools provide an opt-out mechanism. You can set it according to their
              instructions.
            </li>
            <li>Note: Disabling certain Cookies may limit website functionality or reduce the experience.</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">5. Changes and Updates</h2>
          <p className="mt-3">
            We may update this policy from time to time, and indicate the "Last Updated" date on the page. Continuing to
            use the website means you accept the updated policy.
          </p>

          <h2 className="mt-8 font-semibold text-xl">6. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about the use of Cookies, please contact us through the contact information
            provided on the website or documentation.
          </p>
        </div>
      );
  }
}

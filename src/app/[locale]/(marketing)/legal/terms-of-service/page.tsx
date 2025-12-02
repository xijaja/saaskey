import { getLocale } from "next-intl/server";

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();

  switch (locale) {
    // 中文
    case "zh":
      return (
        <div className="mx-auto max-w-6xl px-4 py-10 leading-7">
          <h1 className="mb-6 font-bold text-2xl">隐私政策</h1>
          <p className="text-muted-foreground text-sm">最近更新：2025-10-23</p>

          <p className="mt-6">
            本隐私政策适用于您对
            SaaSKey（"本项目"）网站、模板与相关服务的访问与使用，旨在说明我们如何收集、使用、共享与保护您的个人信息。
          </p>

          <h2 className="mt-8 font-semibold text-xl">1. 我们收集的信息</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              账户信息：当您购买或访问本项目时，我们可能收集您的姓名、邮箱、联系方式、账户 ID
              等信息，以完成交付（如邀请加入私有仓库）。
            </li>
            <li>
              支付信息：支付由第三方支付服务（如
              Stripe）处理，我们不会存储您的完整支付卡信息，但可能接收来自支付服务的交易结果、状态及必要的对账信息。
            </li>
            <li>
              使用信息：为改进产品与文档质量，我们可能收集页面访问、点击、浏览器与设备信息、本地化语言等使用数据（通常为聚合或匿名化形式）。
            </li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">2. 我们如何使用信息</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>完成订单、交付代码仓库访问权限与后续更新。</li>
            <li>提供客户支持与售后服务，包括处理退款申请（在适用情形下）。</li>
            <li>改进与优化网站、模板、文档与示例功能。</li>
            <li>在获得必要授权时，向您发送重要通知、版本更新或安全通告。</li>
            <li>遵守法律法规与合规义务。</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">3. 信息共享</h2>
          <p className="mt-3">我们不会向无关第三方出售您的个人信息。仅在以下情形中可能共享：</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>与协助我们提供服务的第三方供应商共享（如支付、邮件、托管、通知等），仅在提供服务所需的最小范围内。</li>
            <li>为遵守法律法规、监管要求或依法配合有效法律程序。</li>
            <li>为保护我们或用户的安全、权利或财产。</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">4. 国际传输</h2>
          <p className="mt-3">
            您的信息可能被传输并存储在与您所在国家/地区不同的数据中心。我们将采取合理措施保障信息在跨境传输中的安全与合规。
          </p>

          <h2 className="mt-8 font-semibold text-xl">5. 数据保留</h2>
          <p className="mt-3">
            我们将在实现本政策所述目的所需期间内保留您的信息，并在法律法规要求或允许的期限内保留必要记录（例如税务或对账需要）。
          </p>

          <h2 className="mt-8 font-semibold text-xl">6. 您的权利</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>访问与更正：您可在合理范围内访问并更新您的账户信息。</li>
            <li>删除与限制处理：在法律允许范围内，您可请求删除或限制处理部分信息。</li>
            <li>拒绝营销：您可随时退订营销类邮件或通知（系统或安全通知除外）。</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">7. 安全措施</h2>
          <p className="mt-3">
            我们采取合理且适当的技术与组织措施保护您的信息安全。但任何线上传输与存储都不能保证 100%
            安全，您应在可控范围内采取谨慎措施。
          </p>

          <h2 className="mt-8 font-semibold text-xl">8. 第三方链接与内容</h2>
          <p className="mt-3">
            本项目文档或示例可能包含第三方网站或服务的链接。第三方网站适用其各自的隐私政策，我们不对其内容或做法负责。
          </p>

          <h2 className="mt-8 font-semibold text-xl">9. 未成年人</h2>
          <p className="mt-3">
            我们的服务面向具备完全民事行为能力的自然人和依法成立的组织，不针对未成年人主动提供服务。
          </p>

          <h2 className="mt-8 font-semibold text-xl">10. 政策更新</h2>
          <p className="mt-3">
            我们可能会不时更新本政策，并在页面标注"最近更新"日期。重大变更将通过合理方式通知您。继续使用本项目即视为接受更新后的政策。
          </p>

          <h2 className="mt-8 font-semibold text-xl">11. 联系我们</h2>
          <p className="mt-3">如对本隐私政策或数据处理有任何问题，请通过网站或文档中提供的联系方式与我们联系。</p>
        </div>
      );

    // 默认返回英文
    default:
      return (
        <div className="mx-auto max-w-6xl px-4 py-10 leading-7">
          <h1 className="mb-6 font-bold text-2xl">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last Updated: 2025-09-16</p>

          <p className="mt-6">
            This privacy policy applies to your access and use of the SaaSKey ("this project") website, templates, and
            related services, and aims to explain how we collect, use, share, and protect your personal information.
          </p>

          <h2 className="mt-8 font-semibold text-xl">1. Information We Collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Account Information: When you purchase or access the project, we may collect your name, email, contact
              information, account ID, etc., to complete delivery (such as inviting you to join the private repository).
            </li>
            <li>
              Payment Information: Payment is processed by third-party payment services (such as Stripe), we do not
              store your complete payment card information, but may receive transaction results, status, and necessary
              reconciliation information from the payment service.
            </li>
            <li>
              Usage Information: To improve the quality of products and documentation, we may collect usage data such as
              page visits, clicks, browser and device information, localization language, etc. (usually in the form of
              aggregation or anonymization).
            </li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">2. How We Use Information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Complete orders, deliver code repository access permissions and subsequent updates.</li>
            <li>
              Provide customer support and after-sales service, including processing refund applications (in applicable
              cases).
            </li>
            <li>Improve and optimize website, template, documentation, and example functions.</li>
            <li>
              Send important notifications, version updates, or security announcements to you when necessary
              authorization is obtained.
            </li>
            <li>Comply with laws, regulations, and compliance obligations.</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">3. Information Sharing</h2>
          <p className="mt-3">
            We will not sell your personal information to any unrelated third party. It may be shared in the following
            circumstances:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Share with third-party suppliers who assist us in providing services (such as payment, email, hosting,
              notifications), only within the minimum scope required for providing services.
            </li>
            <li>To comply with laws, regulations, or to cooperate with valid legal procedures.</li>
            <li>To protect our or users' safety, rights, or property.</li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">4. International Transmission</h2>
          <p className="mt-3">
            Your information may be transmitted and stored in a data center different from your country/region. We will
            take reasonable measures to ensure the security and compliance of information during cross-border
            transmission.
          </p>

          <h2 className="mt-8 font-semibold text-xl">5. Data Retention</h2>
          <p className="mt-3">
            We will retain your information for the period required to achieve the purposes described in this policy,
            and retain necessary records within the period required by laws and regulations or allowed by law (such as
            tax or reconciliation requirements).
          </p>

          <h2 className="mt-8 font-semibold text-xl">6. Your Rights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Access and Correction: You can access and update your account information within a reasonable range.
            </li>
            <li>
              Delete and Limit Processing: You can request to delete or limit the processing of some information within
              the legal scope.
            </li>
            <li>
              Reject Marketing: You can unsubscribe from marketing emails or notifications (system or security
              notifications excepted).
            </li>
          </ul>

          <h2 className="mt-8 font-semibold text-xl">7. Security Measures</h2>
          <p className="mt-3">
            We take reasonable and appropriate technical and organizational measures to protect the security of your
            information. However, any online transmission and storage cannot guarantee 100% security, and you should
            take prudent measures within your controllable range.
          </p>

          <h2 className="mt-8 font-semibold text-xl">8. Third-Party Links and Content</h2>
          <p className="mt-3">
            The project's documentation or examples may contain links to third-party websites or services. Third-party
            websites are subject to their respective privacy policies, and we are not responsible for their content or
            practices.
          </p>

          <h2 className="mt-8 font-semibold text-xl">9. Minors</h2>
          <p className="mt-3">
            Our services are open to natural persons and legally established organizations with full civil capacity, and
            do not proactively provide services to minors.
          </p>

          <h2 className="mt-8 font-semibold text-xl">10. Policy Updates</h2>
          <p className="mt-3">
            We may update this policy from time to time, and indicate the "Last Updated" date on the page. Major changes
            will be notified to you through a reasonable method. Continuing to use the project means you accept the
            updated policy.
          </p>

          <h2 className="mt-8 font-semibold text-xl">11. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about this privacy policy or data processing, please contact us through the
            contact information provided on the website or documentation.
          </p>
        </div>
      );
  }
}

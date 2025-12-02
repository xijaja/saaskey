"use server";

import { Resend } from "resend";
import { SITE } from "@/config/site";
import { EmailMagicLinkTemplate } from "@/lib/mail/email-template";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

// 创建 Resend 实例
const resend = new Resend(process.env.RESEND_API_KEY);

// 发送邮件类型
type SendEmailProps = {
  from: string; // 发件人
  to: string[]; // 收件人
  subject: string; // 主题
  html?: string; // html 格式的内容
  react?: React.ReactNode; // react 组件格式的内容
  replyTo?: string; // 回复
  cc?: string[]; // 抄送
  bcc?: string[]; // 密送
};

// 发送邮件
export async function sendEmail(props: SendEmailProps) {
  const { data, error } = await resend.emails.send({
    from: props.from,
    to: props.to,
    subject: props.subject,
    html: props.html,
    react: props.react,
    replyTo: props.replyTo,
    cc: props.cc,
    bcc: props.bcc,
  });
  if (!data?.id) {
    console.log(`email: 给 ${props.to} 发送邮件失败`);
    console.log(`主题为： ${props.subject}，内容为： ${props.html || props.react}，发送邮件结果: `, data, error);
  }
}

// 发送魔法链接邮件
sendEmail.magic = async (to: string, url: string): Promise<void> => {
  await sendEmail({
    from: SITE.email.from,
    to: [to],
    subject: "Magic link",
    react: EmailMagicLinkTemplate({ magicLink: url }),
  });
};

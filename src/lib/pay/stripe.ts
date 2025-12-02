"use server";

import { Stripe } from "stripe";
import { SITE } from "@/config/site";

if (!(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET && process.env.STRIPE_PRODUCT_PRICE)) {
  throw new Error("STRIPE relevant environment variables are not set");
}

// 创建 Stripe 客户端
const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);

// 创建 Stripe 支付链接
export async function createCheckoutSession(priceId: string) {
  const session = await stripeClient.checkout.sessions.create(
    {
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { app_name: SITE.name },
      mode: "payment", // 支付模式: payment, subscription
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      automatic_tax: { enabled: true }, // 自动计算税费
    },
    {
      stripeAccount: process.env.STRIPE_CONNECT_ACCT, // Stripe 账户 ID
    }
  );
  return session;
}

// 验证 Webhook 签名
export async function verifyWebhookSignatureAsync(signature: string, payload: string): Promise<Stripe.Event> {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  }
  const event = await stripeClient.webhooks.constructEventAsync(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
  return event;
}

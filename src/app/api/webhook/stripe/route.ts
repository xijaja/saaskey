import type { NextRequest } from "next/server";
import { verifyWebhookSignatureAsync } from "@/lib/pay/stripe";

export async function POST(request: NextRequest) {
  // 获取 'stripe-signature' 请求头
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("No signature", { status: 400 });
  }
  // 获取 'payload' 请求体
  const payload = await request.text();
  // 验证签名
  const stripeEvent = await verifyWebhookSignatureAsync(signature, payload);

  // 处理 stripe 的 webhook 事件
  switch (stripeEvent.type) {
    // 处理支付链接过期事件
    case "checkout.session.expired": {
      const checkoutSessionExpired = stripeEvent.data.object;
      console.log("支付链接过期:", checkoutSessionExpired);
      break;
    }

    // 处理支付链接完成事件
    case "checkout.session.completed": {
      const checkoutSessionCompleted = stripeEvent.data.object;
      console.log("支付链接完成:", checkoutSessionCompleted);
      break;
    }

    // 当用户尝试支付但失败事件
    case "payment_intent.payment_failed": {
      const checkoutSessionAsyncPaymentFailed = stripeEvent.data.object;
      // 发送 支付失败 提醒邮件到用户邮箱
      console.log("用户尝试付款但是失败了:", checkoutSessionAsyncPaymentFailed);
      break;
    }

    // 当退款成功时触发事件，包含部分或全额退款
    case "charge.refunded": {
      const chargeRefunded = stripeEvent.data.object;
      console.log("退款成功:", chargeRefunded);
      break;
    }

    // 当退款失败时触发事件，退款出现异常
    case "refund.failed": {
      const refundFailed = stripeEvent.data.object;
      console.log("退款异常:", refundFailed);
      break;
    }

    // 默认处理
    default: {
      console.log("暂时未处理的 stripe 的 webhook 事件类型: ", stripeEvent.type);
      break;
    }
  }

  // 返回成功响应，表示已收到回调
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}

import { createGatewayProvider } from "@ai-sdk/gateway";
import { generateText } from "ai";

export const gateway = createGatewayProvider({
  apiKey: process.env.AI_GATEWAY_API_KEY, // API 密钥
  baseURL: "https://ai-gateway.vercel.sh/v1/ai", // 这是默认的网关地址
});

export default async function AiGenerateText(prompt: string) {
  const { text } = await generateText({
    model: "openai/gpt-4.1-nano",
    prompt,
  });
  return text;
}

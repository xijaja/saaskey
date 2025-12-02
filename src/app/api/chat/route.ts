import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { gateway } from "@/lib/ai/gateway";

export async function POST(req: Request) {
  // 从请求中获取历史消息和模型ID
  const { messages, modelId }: { messages: UIMessage[]; modelId: string } = await req.json();

  // const prunedMessages = pruneMessages({
  //   messages: convertToModelMessages(messages), // 转换为模型消息
  //   reasoning: "before-last-message", // 修剪最后 1 条推理消息
  //   toolCalls: "before-last-2-messages", // 修剪最后 2 条工具调用消息
  //   emptyMessages: "remove", // 修剪空消息
  // });

  // 流式生成文本
  const result = streamText({
    model: gateway(modelId),
    system: "You are a software engineer exploring Generative AI.", // 系统提示词
    messages: convertToModelMessages(messages), // 转换为模型消息
    // messages: prunedMessages, // 修剪消息
    onError: (e) => {
      console.log("Error while streaming:", e);
    },
  });

  // 返回流式响应
  return result.toUIMessageStreamResponse();
}

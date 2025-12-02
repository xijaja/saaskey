"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { Prediction } from "replicate";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const formSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
  aspect_ratio: z.enum(["1:1", "3:2", "2:3", "16:9"]),
  reference_images: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ImageClient() {
  const [prediction, setPrediction] = useState<Prediction | any>(null);
  const [error, setError] = useState(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      aspect_ratio: "1:1",
      reference_images: undefined,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // 创建预测
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: values.prompt,
      }),
    });
    const result = await response.json();
    if (response.status !== 201) {
      setError(result.detail);
      return;
    }
    setPrediction(result);

    // 轮询查询直到成功或失败
    while (prediction.status !== "succeeded" && prediction.status !== "failed") {
      await sleep(1000);
      const predictionResponse = await fetch(`/api/predictions/${prediction.id}`);
      const pollingResult = await predictionResponse.json();
      if (predictionResponse.status !== 200) {
        setError(pollingResult.detail);
        return;
      }
      console.log("prediction results is: ", { prediction });
      setPrediction(prediction);
    }
  };

  // 根据 prediction.output 提取可用图片 URL（从末尾优先）
  const imageSrc = extractImageUrl(prediction?.output);

  return (
    <div className="mx-auto max-w-7xl gap-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Field className="col-span-3">
          <FieldLabel>Preview</FieldLabel>
          <FieldContent className="rounded-lg border p-4 shadow-lg">
            {imageSrc && (
              <Image
                alt="generated image"
                className="mx-auto rounded-lg shadow-sm"
                height={700}
                src={imageSrc}
                width={700}
              />
            )}
            {!imageSrc && (
              <div
                className="mx-auto flex items-center justify-center rounded-lg bg-muted"
                style={{ width: 700, height: 700 }}
              >
                <div className="text-center text-muted-foreground">
                  <div className="mb-2 text-4xl">🖼️</div>
                  <p className="text-sm">Waiting for image generation</p>
                  <p className="mt-1 text-xs">1:1 (700 x 700)</p>
                </div>
              </div>
            )}
          </FieldContent>
          {error && <div>{error}</div>}
          {prediction && <p className="py-3 text-sm opacity-50">status: {prediction.status}</p>}
        </Field>

        <form className="col-span-2 flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="reference_images"
              render={({ fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Reference</FieldLabel>
                  <FieldContent>
                    <Input multiple type="file" />
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="prompt"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Prompt</FieldLabel>
                  <FieldContent>
                    <Textarea
                      {...field}
                      className="h-36 w-full"
                      placeholder="Enter a prompt to display an image"
                      rows={4}
                    />
                  </FieldContent>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="aspect_ratio"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Aspect Ratio</FieldLabel>
                  <FieldContent>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select aspect ratio" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem className="w-full" value="1:1">
                          1:1
                        </SelectItem>
                        <SelectItem className="w-full" value="3:2">
                          3:2
                        </SelectItem>
                        <SelectItem className="w-full" value="2:3">
                          2:3
                        </SelectItem>
                        <SelectItem className="w-full" value="16:9">
                          16:9
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
              )}
            />
          </FieldGroup>
          <div>
            <Button size="lg" type="submit">
              Generate Image
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 从可能的数组/字符串输出中提取最后一个有效图片 URL
const extractImageUrl = (output: unknown): string | null => {
  if (!output) {
    return null;
  }
  const list = Array.isArray(output) ? output : [output];
  for (let i = list.length - 1; i >= 0; i--) {
    const candidate = list[i];
    if (typeof candidate === "string" && URL.canParse(candidate)) {
      return new URL(candidate).toString();
    }
  }
  return null;
};

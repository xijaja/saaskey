"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { authClient } from "@/lib/auth/auth-client";

const formSchema = z.object({
  email: z.email(),
});

export default function LoginForm() {
  // 设置加载状态
  // set loading state
  const [isLoading, setIsLoading] = useState(false);
  // 获取最后登录方式 - 使用状态避免SSR不匹配
  // get last login method - use state to avoid SSR mismatch
  const [lastMethod, setLastMethod] = useState<string | null>(null);
  // 设置是否已挂载 - 使用状态避免SSR不匹配
  // set if mounted - use state to avoid SSR mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const method = authClient.getLastUsedLoginMethod();
    setLastMethod(method);
    // console.log("last login method:", method);
  }, []);

  // 初始化表单
  // initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });
  // 定义提交处理函数
  // define submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await authClient.signIn.magicLink({ email: values.email });
    } catch (error) {
      console.error("login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // 处理 Github 登录
  // handle Github login
  const handleGithubSignIn = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
    setIsLoading(false);
  };
  // 处理 Google 登录
  // handle Google login
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
    setIsLoading(false);
  };

  return (
    <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <FieldContent>
                <Input {...field} placeholder="Your email" type="email" />
              </FieldContent>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button className="w-full rounded-xl" disabled={isLoading} size="lg" type="submit">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send me the magic link"}
        </Button>
        {/* <Button className="w-full text-muted-foreground text-sm" variant="link">
          Sign in using password
        </Button> */}
      </FieldGroup>

      <div className="flex items-center gap-4 py-2">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-sm">OR</span>
        <Separator className="flex-1" />
      </div>

      <div className="relative">
        <Button className="w-full rounded-xl" onClick={handleGoogleSignIn} size="lg" variant="outline">
          Login with Google
        </Button>
        {isMounted && lastMethod === "github" && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="-translate-y-1/2 absolute top-1/2 right-3 h-2 w-2 rounded-full bg-primary" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Last used</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      <div className="relative">
        <Button className="w-full rounded-xl" onClick={handleGithubSignIn} size="lg" variant="outline">
          Login with GitHub
        </Button>
        {isMounted && lastMethod === "google" && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="-translate-y-1/2 absolute top-1/2 right-3 h-2 w-2 rounded-full bg-primary" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Last used</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </form>
  );
}

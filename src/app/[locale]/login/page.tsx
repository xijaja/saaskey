import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import Logo from "@/components/blocks/logo";
import { Card, CardContent } from "@/components/ui/card";
import { DEFAULT_LOCALE, redirect } from "@/i18n/routing";
import { auth } from "@/lib/auth/auth";
import LoginForm from "./login-form";

export default async function LoginPage() {
  // 获取会话
  // get session
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const locale = await getLocale();
  // 如果会话存在，重定向到仪表盘
  // if session exists, redirect to dashboard
  const user = session?.user;
  if (user) {
    redirect({ href: "/dashboard", locale: locale || DEFAULT_LOCALE });
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm rounded-4xl px-6 py-10 pt-14">
        <CardContent className="">
          <div className="flex flex-col items-center space-y-8">
            <Logo className="h-12 w-12" />

            <div className="space-y-2 text-center">
              <h1 className="font-semibold text-3xl text-foreground">Welcome back!</h1>
              {/* <p className="text-muted-foreground text-sm">
                First time here?{" "}
                <a className="text-foreground hover:underline" href="/signup">
                  Sign up for free
                </a>
              </p> */}
            </div>

            <LoginForm />

            <p className="w-11/12 text-center text-muted-foreground text-xs">
              You acknowledge that you read, and agree, to our{" "}
              <a className="underline hover:text-foreground" href="/legal/terms-of-service">
                Terms of Service
              </a>{" "}
              and our{" "}
              <a className="underline hover:text-foreground" href="/legal/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { DashboardSidebar } from "@/components/blocks/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DEFAULT_LOCALE, redirect } from "@/i18n/routing";
import { auth } from "@/lib/auth/auth";
import type { UserType } from "@/lib/db/schema/auth-schema";
import { UserProvider } from "./layout.context";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  // 获取会话
  // get session
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // 如果会话不存在，重定向到登录页面
  // if session does not exist, redirect to login page
  const user = session?.user;
  if (!user) {
    const locale = await getLocale(); // 获取语言 get locale
    redirect({ href: "/login", locale: locale || DEFAULT_LOCALE }); // 重定向到登录页面 redirect to login page
  }

  return (
    <UserProvider initialUser={user as UserType}>
      <SidebarProvider>
        <div className="relative flex h-screen w-full">
          <DashboardSidebar />
          <SidebarInset className="flex flex-col">{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </UserProvider>
  );
}

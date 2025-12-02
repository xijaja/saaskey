"use client";

import { motion } from "framer-motion";
import {
  Activity,
  DollarSign,
  Drone,
  Home,
  ImageIcon,
  Infinity as InfinityIcon,
  MessageCircleMore,
  PieChart,
  Radar,
  Settings,
  Shell,
  ShoppingBag,
  TrendingUp,
  Users,
  VideoIcon,
} from "lucide-react";
import Logo from "@/components/blocks/logo";
import DashboardNavigation from "@/components/blocks/nav-main";
import { NotificationsPopover } from "@/components/blocks/nav-notifications";
import { TeamSwitcher } from "@/components/blocks/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { RouteGroup } from "./nav-main";
import { NavUser } from "./nav-user";

const sampleNotifications = [
  {
    id: "1",
    avatar: "/avatars/01.png",
    fallback: "OM",
    text: "New order received.",
    time: "10m ago",
  },
  {
    id: "2",
    avatar: "/avatars/02.png",
    fallback: "JL",
    text: "Server upgrade completed.",
    time: "1h ago",
  },
  {
    id: "3",
    avatar: "/avatars/03.png",
    fallback: "HH",
    text: "New user signed up.",
    time: "2h ago",
  },
];

const dashboardRoutes: RouteGroup[] = [
  {
    id: "dashboard",
    routes: [
      {
        id: "home",
        title: "Home",
        icon: <Home className="size-4" />,
        link: "/dashboard",
      },

      {
        id: "settings",
        title: "Settings",
        icon: <Settings className="size-4" />,
        link: "#",
        subs: [
          { title: "General", link: "#" },
          { title: "Webhooks", link: "#" },
          { title: "Custom Fields", link: "#" },
        ],
      },
    ],
  },
  {
    id: "playground",
    title: "Playground",
    routes: [
      {
        id: "chat",
        title: "Chat",
        icon: <MessageCircleMore className="size-4" />,
        link: "/chat",
      },
      {
        id: "image",
        title: "Image",
        icon: <ImageIcon className="size-4" />,
        link: "/image",
      },
      {
        id: "video",
        title: "Video",
        icon: <VideoIcon className="size-4" />,
        link: "/video",
      },
    ],
  },
  {
    id: "products",
    title: "Products",
    routes: [
      {
        id: "customers",
        title: "Customers",
        icon: <Users className="size-4" />,
        link: "#",
      },
      {
        id: "analytics",
        title: "Analytics",
        icon: <TrendingUp className="size-4" />,
        link: "#",
      },
      {
        id: "sales",
        title: "Sales",
        icon: <ShoppingBag className="size-4" />,
        link: "#",
        subs: [
          {
            title: "Orders",
            link: "#",
            icon: <ShoppingBag className="size-4" />,
          },
          {
            title: "Subscriptions",
            link: "#",
            icon: <InfinityIcon className="size-4" />,
          },
        ],
      },
      {
        id: "finance",
        title: "Finance",
        icon: <DollarSign className="size-4" />,
        link: "#",
        subs: [
          { title: "Incoming", link: "#" },
          { title: "Outgoing", link: "#" },
          { title: "Payout Account", link: "#" },
        ],
      },
      {
        id: "usage-billing",
        title: "Usage Billing",
        icon: <PieChart className="size-4" />,
        link: "#",
        subs: [
          {
            title: "Meters",
            link: "#",
            icon: <PieChart className="size-4" />,
          },
          {
            title: "Events",
            link: "#",
            icon: <Activity className="size-4" />,
          },
        ],
      },
    ],
  },
];

const teams = [
  { id: "1", name: "Alpha Inc.", logo: Radar, plan: "Free" },
  { id: "2", name: "Beta Corp.", logo: Shell, plan: "Free" },
  { id: "3", name: "Gamma Tech", logo: Drone, plan: "Free" },
];

const user = {
  name: "Sherwin Hou",
  email: "sherwin@saaskey.ai",
  avatar: "/avatar.jpg",
};

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between"
        )}
      >
        <a className="flex items-center gap-2" href="/">
          <Logo className="h-8 w-8" />
          {!isCollapsed && <span className="font-semibold text-black dark:text-white">SAASKEY</span>}
        </a>

        <motion.div
          animate={{ opacity: 1 }}
          className={cn("flex items-center gap-2", isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row")}
          initial={{ opacity: 0 }}
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          transition={{ duration: 0.8 }}
        >
          <NotificationsPopover notifications={sampleNotifications} />
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <TeamSwitcher teams={teams} />
        <DashboardNavigation groups={dashboardRoutes} />
      </SidebarContent>
      <SidebarFooter className="px-2">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}

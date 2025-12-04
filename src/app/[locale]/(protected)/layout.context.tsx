"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import type { UserType } from "@/lib/db/schema/auth-schema";

// 用户上下文类型
// user context type
type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

// 用户上下文
// user context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 用户提供者组件
// user provider component
export const UserProvider = ({ children, initialUser }: { children: React.ReactNode; initialUser: UserType }) => {
  const [user, setUser] = useState(initialUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// 使用用户上下文
// use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as authSchema from "@/lib/db/schema/auth-schema";
import * as bizsSchema from "@/lib/db/schema/bizs-schema";
import * as relations from "@/lib/db/schema/relations";

// 检查数据库 URL 是否设置
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

// 声明数据库 schema
export const schema = { ...authSchema, ...bizsSchema, ...relations };

// 声明本地数据库实例
const localdb = drizzle(postgres(process.env.DATABASE_URL), { schema });

// 声明 Neon 数据库实例
const neondb = drizzleNeon(neon(process.env.DATABASE_URL), { schema });

// 导出数据库实例, 开发环境使用本地数据库, 生产环境使用 Neon 数据库
export const db = process.env.NODE_ENV === "production" ? neondb : localdb;

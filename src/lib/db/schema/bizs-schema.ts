import { integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./auth-schema";

// 计划枚举
export const plans = pgEnum("plans", ["free", "pro", "plus", "max"]);

/**
 * 用户资产，扩展表
 */
export const userAssets = pgTable("user_assets", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  plan: plans("plan").default("free"),
  credits: integer("credits").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// 导出类型
export type UserAssetType = typeof userAssets.$inferSelect;

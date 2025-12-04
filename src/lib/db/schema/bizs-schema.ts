import { integer, jsonb, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./auth-schema";

// 计划枚举
// plan enum
export const planEnum = pgEnum("plan_enum", ["free", "pro", "plus", "max"]);

/**
 * 用户资产，扩展表
 * user assets table
 */
export const userAssets = pgTable("user_assets", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  plan: planEnum("plan").default("free"),
  credits: integer("credits").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// 积分变动类型枚举
// credits change type enum
export const creditsChangeType = pgEnum("credits_change_type", [
  "gift",
  "recharge",
  "chat_consume",
  "images_consume",
  "audio_consume",
  "music_consume",
  "video_consume",
  "deduct",
]);

/**
 * 积分记录表
 * credits records table
 */
export const creditsRecords = pgTable("credits_records", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: creditsChangeType("type").notNull(),
  priorCredits: integer("prior_credits").notNull(),
  changeCredits: integer("change_credits").notNull(),
  finalCredits: integer("final_credits").notNull(),
  referenceId: text("reference_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 订单类型枚举
// order enum
export const orderEnum = pgEnum("order_enum", ["pending", "processing", "cancelled", "refunded", "completed"]);

/**
 * 订单表
 * orders table
 */
export const orders = pgTable("orders", {
  id: text("id").primaryKey(),
  amount: integer("amount").notNull(),
  currency: text("currency").default("USD").notNull(),
  subscriptionId: text("subscription_id"),
  type: orderEnum("type").default("pending"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

/**
 * 支付回调记录表
 * payments table
 */
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  eventId: text("event_id").notNull().unique(),
  eventType: text("event_type").notNull(),
  eventCreated: timestamp("event_created").notNull(),
  amount: integer("amount").notNull(),
  amountReceived: integer("amount_received").notNull(),
  currency: text("currency").notNull(),
  provider: text("provider").default("stripe"),
  dataObject: jsonb("data_object").notNull(),
  orderId: text("order_id")
    .notNull()
    .references(() => orders.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 导出类型
export type UserAssetType = typeof userAssets.$inferSelect;
export type CreditsRecordType = typeof creditsRecords.$inferSelect;
export type OrderType = typeof orders.$inferSelect;
export type PaymentType = typeof payments.$inferSelect;

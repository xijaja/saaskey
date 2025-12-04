import { relations } from "drizzle-orm";
import { accounts, sessions, users } from "./auth-schema";
import { creditsRecords, orders, payments, userAssets } from "./bizs-schema";

// 用户关系
// user relations
export const userRelations = relations(users, ({ many, one }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  userAssets: one(userAssets, {
    fields: [users.id],
    references: [userAssets.userId],
  }),
  creditsRecords: many(creditsRecords),
  orders: many(orders),
  payments: many(payments),
}));

// 会话关系
// session relations
export const sessionRelations = relations(sessions, ({ one }) => ({
  users: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

// 账户关系
// account relations
export const accountRelations = relations(accounts, ({ one }) => ({
  users: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

// 用户资产关系
// user asset relations
export const userAssetRelations = relations(userAssets, ({ one }) => ({
  users: one(users, {
    fields: [userAssets.userId],
    references: [users.id],
  }),
}));

// 积分记录关系
// credits record relations
export const creditsRecordRelations = relations(creditsRecords, ({ one }) => ({
  users: one(users, {
    fields: [creditsRecords.userId],
    references: [users.id],
  }),
}));

// 订单关系
// order relations
export const orderRelations = relations(orders, ({ one, many }) => ({
  users: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  payments: many(payments),
}));

// 支付关系
// payment relations
export const paymentRelations = relations(payments, ({ one }) => ({
  orders: one(orders, {
    fields: [payments.orderId],
    references: [orders.id],
  }),
}));

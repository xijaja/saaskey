import { relations } from "drizzle-orm";
import { accounts, sessions, users } from "./auth-schema";
import { userAssets } from "./bizs-schema";

export const userRelations = relations(users, ({ many, one }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  userAssets: one(userAssets, {
    fields: [users.id],
    references: [userAssets.userId],
  }),
}));

export const sessionRelations = relations(sessions, ({ one }) => ({
  users: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const accountRelations = relations(accounts, ({ one }) => ({
  users: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const userAssetRelations = relations(userAssets, ({ one }) => ({
  users: one(users, {
    fields: [userAssets.userId],
    references: [users.id],
  }),
}));

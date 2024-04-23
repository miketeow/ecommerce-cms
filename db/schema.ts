import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const store = pgTable("store", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  userId: text("user_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Store = typeof store.$inferSelect;

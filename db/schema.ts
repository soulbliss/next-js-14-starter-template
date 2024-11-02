import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
} from "drizzle-orm/pg-core"
import { sql } from 'drizzle-orm'
import { ProviderType } from "next-auth/providers"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

const timestamps = {
    created_at: timestamp('created_at')
        .defaultNow()
        .notNull(),
    updated_at: timestamp('updated_at')
        .defaultNow()
        .notNull()
        .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
    deleted_at: timestamp('deleted_at')
}

export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    ...timestamps
})

export const usersSchema = createInsertSchema(users)
export type UserSchema = z.infer<typeof usersSchema>

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<ProviderType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
        ...timestamps
    },
    (account) => {
        return {
            accountsPkey: primaryKey({
                columns: [account.provider, account.providerAccountId],
            }),
        }
    }
)

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    ...timestamps
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
        ...timestamps
    },
    (table) => {
        return {
            verificationTokenPkey: primaryKey({
                columns: [table.identifier, table.token],
            }),
        }
    }
)
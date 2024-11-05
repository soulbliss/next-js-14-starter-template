import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
  deleted_at: timestamp('deleted_at'),
};

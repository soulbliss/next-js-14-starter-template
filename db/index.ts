import 'dotenv/config'
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { pgDbConfig } from "@/config/pg"

const pool = new Pool({
    connectionString: pgDbConfig.connectionString!,
    max: 20,
    idleTimeoutMillis: pgDbConfig.idleTimeoutMillis,
    connectionTimeoutMillis: pgDbConfig.connectionTimeoutMillis,
})
export const db = drizzle({ client: pool, casing: 'snake_case' })

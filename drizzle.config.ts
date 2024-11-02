import "./config/envConfig"
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: './drizzle',
    schema: './db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.PG_DB_CONNECTION_STRING!,
    },
})

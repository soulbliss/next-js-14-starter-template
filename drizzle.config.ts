import { defineConfig } from 'drizzle-kit';
import { PG_DB_CONNECTION_STRING } from './config/env';
import './config/envConfig';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: PG_DB_CONNECTION_STRING,
  },
});

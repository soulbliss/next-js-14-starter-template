import { pgDbConfig } from '@/config/pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: pgDbConfig.connectionString!,
  max: 20,
  idleTimeoutMillis: pgDbConfig.idleTimeoutMillis,
  connectionTimeoutMillis: pgDbConfig.connectionTimeoutMillis,
});
export const db = drizzle({ client: pool, casing: 'snake_case' });

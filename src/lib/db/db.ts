import { PG_DB_CONNECTION_STRING } from '@/config/env';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: PG_DB_CONNECTION_STRING,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  ssl: false,
});

export const db = pool;

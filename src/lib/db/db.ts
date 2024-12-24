import { pgDbConfig } from '@/config/pg';
import { Pool } from 'pg';

const pool = new Pool({
  host: pgDbConfig.host,
  user: pgDbConfig.user,
  database: pgDbConfig.database,
  password: pgDbConfig.password,
  port: pgDbConfig.port,
  ssl: pgDbConfig.ssl,
  max: 20,
  idleTimeoutMillis: pgDbConfig.idleTimeoutMillis,
  connectionTimeoutMillis: pgDbConfig.connectionTimeoutMillis,
});

export const db = pool;

type dbClient = {
  user: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  ssl: boolean;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
};

export const pgDbConfig: dbClient = {
  user: process.env.PG_DB_USER as string,
  password: process.env.PG_DB_PASSWORD as string,
  database: process.env.PG_DB_NAME as string,
  host: process.env.PG_DB_HOST || 'localhost',
  port: process.env.PG_DB_PORT ? parseInt(process.env.PG_DB_PORT, 10) : 5432,
  ssl: process.env.PG_DB_SSL === 'true',
  max: process.env.PG_DB_MAX_CONNECTIONS
    ? parseInt(process.env.PG_DB_MAX_CONNECTIONS, 10)
    : 20,
  idleTimeoutMillis: process.env.PG_DB_IDLE_TIMEOUT
    ? parseInt(process.env.PG_DB_IDLE_TIMEOUT, 10)
    : 10000,
  connectionTimeoutMillis: process.env.PG_DB_CONNECTION_TIMEOUT
    ? parseInt(process.env.PG_DB_CONNECTION_TIMEOUT, 10)
    : 2000,
};

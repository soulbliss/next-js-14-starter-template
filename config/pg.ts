import '@/config/envConfig';
import {
  PG_DB_CONNECTION_STRING,
  PG_DB_CONNECTION_TIMEOUT,
  PG_DB_IDLE_TIMEOUT,
  PG_DB_MAX_CONNECTIONS,
} from './env';

type dbClient = {
  connectionString: string;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
};

export const pgDbConfig: dbClient = {
  connectionString: PG_DB_CONNECTION_STRING,
  max: PG_DB_MAX_CONNECTIONS,
  idleTimeoutMillis: PG_DB_IDLE_TIMEOUT,
  connectionTimeoutMillis: PG_DB_CONNECTION_TIMEOUT,
};

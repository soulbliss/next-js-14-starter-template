type dbClient = {
  connectionString: string
  max: number
  idleTimeoutMillis: number
  connectionTimeoutMillis: number
}

export const pgDbConfig: dbClient = {
  connectionString: process.env.PG_DB_CONNECTION_STRING as string,
  max: process.env.PG_DB_MAX_CONNECTIONS
    ? parseInt(process.env.PG_DB_MAX_CONNECTIONS, 10)
    : 20,
  idleTimeoutMillis: process.env.PG_DB_IDLE_TIMEOUT
    ? parseInt(process.env.PG_DB_IDLE_TIMEOUT, 10)
    : 10000,
  connectionTimeoutMillis: process.env.PG_DB_CONNECTION_TIMEOUT
    ? parseInt(process.env.PG_DB_CONNECTION_TIMEOUT, 10)
    : 2000,
}

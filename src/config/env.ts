import { z } from 'zod';

const envSchema = z.object({
  AUTH_SECRET: z.string().min(1, 'AUTH_SECRET is required'),

  EMAIL_SERVER_HOST: z
    .string()
    .min(1, 'EMAIL_SERVER_HOST is required'),
  EMAIL_SERVER_PORT: z.preprocess(
    (val) => Number(val),
    z.number().int().positive()
  ),
  EMAIL_SERVER_USER: z
    .string()
    .min(1, 'EMAIL_SERVER_USER is required'),
  EMAIL_SERVER_PASSWORD: z
    .string()
    .min(1, 'EMAIL_SERVER_PASSWORD is required'),

  PG_DB_CONNECTION_STRING: z
    .string()
    .min(1, 'PG_DB_CONNECTION_STRING is required'),

  GOOGLE_CLIENT_ID: z
    .string()
    .min(1, 'GOOGLE_CLIENT_ID is required'),
  GOOGLE_CLIENT_SECRET: z
    .string()
    .min(1, 'GOOGLE_CLIENT_SECRET is required'),

  GITHUB_ID: z.string().min(1, 'GITHUB_ID is required'),
  GITHUB_SECRET: z
    .string()
    .min(1, 'GITHUB_SECRET is required'),

  NOTIFICATION_WEBHOOK: z.string().optional(),
});

// Parse and validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error(
    '❌ Invalid environment variables:',
    env.error.format()
  );
  throw new Error('Invalid environment variables');
}

export const {
  AUTH_SECRET,
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
  PG_DB_CONNECTION_STRING,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_ID,
  GITHUB_SECRET,
  NOTIFICATION_WEBHOOK,
} = env.data;

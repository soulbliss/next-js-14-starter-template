import {
  AUTH_SECRET,
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PASSWORD,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '@/config/env';
import PostgresAdapter from '@auth/pg-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { db } from './db/db';
import { sendVerificationRequest } from './email/sendLoginMail';
import { newUserCreated } from './notification';

export const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(db) as Adapter,
  secret: AUTH_SECRET,
  pages: {
    error: '/login',
  },
  theme: {
    colorScheme: 'light',
    logo: '/favicon.ico',
    buttonText: '#ffffff',
    brandColor: '#000000',
  },
  providers: [
    GoogleProvider({
      allowDangerousEmailAccountLinking: true,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      allowDangerousEmailAccountLinking: true,
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    EmailProvider({
      sendVerificationRequest: sendVerificationRequest,
      server: {
        host: EMAIL_SERVER_HOST,
        port: EMAIL_SERVER_PORT,

        auth: {
          user: EMAIL_SERVER_USER as string,
          pass: EMAIL_SERVER_PASSWORD as string,
        },
      },
      from: `Next JS 14 starter template <${EMAIL_SERVER_USER}>`,
    }),
  ],

  events: {
    createUser: async ({ user }) => {
      await newUserCreated(user);
    },
  },
};

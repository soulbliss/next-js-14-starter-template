import PostgresAdapter from '@auth/pg-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import { db } from './db/db';

export const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(db) as Adapter,
  secret: process.env.AUTH_SECRET as string,
  pages: {
    error: '/login',
  },
  theme: {
    colorScheme: 'light',
    logo: '/favicon.ico',
    buttonText: '#000000',
    brandColor: '#FACC15',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

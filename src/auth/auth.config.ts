// /auth/auth.config.ts
import Credentials from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = 'admin@admin.com'
        const password = '1234'
        if (
          credentials?.email === email &&
          credentials?.password === password
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@admin.com',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      // Ensure session.user is defined before accessing
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};

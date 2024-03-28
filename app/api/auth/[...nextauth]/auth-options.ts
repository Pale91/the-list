import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { cert } from 'firebase-admin/app';
import { Roles } from '@/infrastructure/roles';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      profile(profile) {
        return {
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          image: profile.picture,
          id: profile.sub,
          role: profile.role ?? Roles.USER
        };
      }
    })
  ],
  // @ts-ignore
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    })
  }),
  callbacks: {
    session({ session, token }) {
      session.user.role = token.role as string;
      session.user.id = token.sub as string;
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  },
  // KEEP IN SYNC WITH middleware.ts
  pages: { signIn: '/auth/signin' }
  },
  // KEEP IN SYNC WITH middleware.ts
  pages: { signIn: '/auth/signin' }
};

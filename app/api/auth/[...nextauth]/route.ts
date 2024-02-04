import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.table(process.env);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
    })
  ]
});

export { handler as GET, handler as POST };

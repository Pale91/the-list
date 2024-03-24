import { withAuth } from 'next-auth/middleware';
import { isUserAdmin } from './infrastructure/roles';

const adminRoutes = ['/desires/create'];

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isAdmin = isUserAdmin(token?.role as string);
      const url = new URL(req.url);

      if (adminRoutes.includes(url.pathname) && !isAdmin) {
        return false;
      }

      return token !== null; // If there is a token, the user is authenticated
    }
  }
});

export const config = {
  matcher: ['/desires/create'],
  // KEPP IN SYNC WITH: app/api/auth/[...nextauth]/auth-options.ts
  pages: { signIn: '/auth/signin' }
};

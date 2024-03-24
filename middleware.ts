export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/desires/create'],
  // KEPP IN SYNC WITH: app/api/auth/[...nextauth]/auth-options.ts
  pages: { signIn: '/auth/signin' }
};

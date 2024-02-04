import NextAuth, { DefaultUser } from "next-auth"

declare module 'next-auth' {
  export interface User extends DefaultUser {
    /** Define any user-specific variables here to make them available to other code inferences */
    role: string;
  }

  export interface Session {
    user: User;
  }
}


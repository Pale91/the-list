'use client';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return <a onClick={() => signOut()}>Logout</a>;
}

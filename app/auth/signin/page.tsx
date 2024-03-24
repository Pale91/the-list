'use client';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex flex-col gap-2 items-center my-6 h-screen">
      <header className="dark:text-white text-2xl">Sign In</header>
      <button
        className="btn btn-outline w-full max-w-xs"
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        Google
      </button>

      <button className="btn btn-outline w-full max-w-xs" disabled>
        Facebook
      </button>
      <button className="btn btn-outline w-full max-w-xs" disabled>
        Tik Tok
      </button>
      <button className="btn btn-outline w-full max-w-xs" disabled>
        Apple
      </button>
    </div>
  );
}

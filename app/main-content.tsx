import React from 'react';
import { ListItemCounter } from '../components/list-item-counter';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/auth-options';

export const MainContent = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  const userInfo =
    session?.user !== undefined ? (
      <div>
        Welcome {session.user.name} ({session.user.role})
        <Link href={'/api/auth/signout'}>Sign Out</Link>
      </div>
    ) : (
      <Link href={'/api/auth/signin'}>Sign In</Link>
    );

  return (
    <>
      {userInfo}
      <ListItemCounter />
    </>
  );
};

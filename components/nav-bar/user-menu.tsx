import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { SignOutButton } from './signout-button';
import Image from 'next/image';
import { isAdmin } from '@/infrastructure/roles';

export async function UserMenu() {
  const userSession = await getServerSession(authOptions);

  if (!userSession) {
    return (
      <Link href={'/api/auth/signin'}>
        <UserCircleIcon className="w-6 h-6 mx-2" />
      </Link>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <Image
            alt="user-avatar"
            src={userSession.user.image}
            className="rounded-full"
            fill
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <SignOutButton />
          {isAdmin(userSession.user.role) && <Link href={'/desires/create'}>Create Item</Link>}
        </li>
      </ul>
    </div>
  );
}

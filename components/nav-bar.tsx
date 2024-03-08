import React from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';

const ListItems = () => (
  <>
    <li>
      <a>The Dream</a>
    </li>
    <li>
      <a>Fulfillment</a>
    </li>
    <li>
      <a>My Gear</a>
    </li>
    <li>
      <a>Store</a>
    </li>
    <li>
      <a>About</a>
    </li>
    <li>
      <a>Contacts</a>
    </li>
  </>
);

export const NavBar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="drawer">
      <input id="nav-bar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="nav-bar-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3Icon className="w-6 h-6" />
            </label>
          </div>
          <div className="navbar-start mx-2">The List</div>
          <div className="navbar-center flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <ListItems />
            </ul>
          </div>
          <div className="navbar-end">
            <UserCircleIcon className="w-6 h-6 mx-2" />
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="nav-bar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <ListItems />
        </ul>
      </div>
    </div>
  );
};

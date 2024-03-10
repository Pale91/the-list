import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '../components/nav-bar/nav-bar';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={clsx(inter.className, 'max-w-screen-xl', 'mx-auto')}>
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}

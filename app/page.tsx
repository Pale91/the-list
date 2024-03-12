import React from 'react';
import Banner from '@/components/landing/banner';
import { LastCompletedItems } from '@/components/landing/last-completed-items';

export default async function Home() {
  return (
    <>
      <Banner />
      <LastCompletedItems />
    </>
  );
}

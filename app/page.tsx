import React from 'react';
import Banner from '@/components/landing/banner';
import { LastCompletedItems } from '@/components/landing/last-completed-items';
import { WhatIsComing } from '@/components/landing/what-is-coming';

export default async function Home() {
  return (
    <>
      <Banner />
      <div className="p-3">
        <WhatIsComing />
        <div className="mt-5"></div>
        <LastCompletedItems />
      </div>
    </>
  );
}

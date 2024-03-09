import React from 'react';
import { storage } from '../infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

export default async function Home() {
  const imgUrlDesktop = await getDownloadURL(
    ref(storage, 'landing-dunas-side.jpg')
  );
  const imgUrlMobile = await getDownloadURL(
    ref(storage, 'landing-dunas-back.jpg')
  );

  return (
    <div className="w-full relative h-96">
      <Image
        alt={'landing-dunas-back'}
        className="object-cover"
        src={imgUrlDesktop}
        fill
        sizes="100%"
        priority
      />
    </div>
  );
}

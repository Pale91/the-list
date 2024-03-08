import React from 'react';
import Image from 'next/image';
import { MainContent } from './main-content';
import { storage } from '../infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

export default async function Home() {
  const img = ref(storage, 'landing-dunas-back.jpg');
  const imgUrl = await getDownloadURL(img);

  return (
    <div>
      <div>Content</div>
      <Image alt={'landing-dunas-back'} src={imgUrl} width={340} height={340} />
    </div>
  );
}

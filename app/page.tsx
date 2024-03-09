import React from 'react';
import { storage } from '../infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

export default async function Home() {
  const imgUrlDesktop = await getDownloadURL(ref(storage, 'landing-dunas-side.jpg'));
  const imgUrlMobile = await getDownloadURL(ref(storage, 'landing-dunas-back.jpg'));

  return (
    <div className='w-full'>
      <img alt={'landing-dunas-back'} className='hidden md:block object-fill' src={imgUrlDesktop} />
      <img alt={'landing-dunas-back'} className='block md:hidden object-fill' src={imgUrlMobile}/>
    </div>
  );
}

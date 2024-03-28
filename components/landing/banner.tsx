import React from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/repositories/activity/files-repository';

export default async function Banner() {
  const imgUrlDesktop = await getImageUrl('landing-dunas-side.jpg');

  return (
    <div className="w-full relative h-96">
      <Image
        alt={'banner man in Maspalomas dunes'}
        className="object-cover"
        src={imgUrlDesktop}
        fill
        sizes="100%"
        priority
      />
    </div>
  );
}

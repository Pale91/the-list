import React from 'react';
import { storage } from '@/infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { ListItemCard } from '../shared/list-item-card';
import Link from 'next/link';

export async function LastCompletedItems() {
  const scubaDivingUrl = await getDownloadURL(
    ref(storage, 'scuba-diving/scuba-diving-1x1.jpg')
  );
  const maspalomasBeachUrl = await getDownloadURL(
    ref(storage, 'maspalomas-beach/maspalomas-beach-1x1.jpg')
  );

  return (
    <section className="w-full">
      <h2 className="mt-7 mb-5 text-white text-4xl">Fulfilled</h2>
      <div className="flex m-auto gap-4 overflow-auto">
        <ListItemCard
          className="ml-auto flex-none"
          imageUrl={scubaDivingUrl}
          location="Gran Canaria"
          name="Scuba Diving"
          numberInList={2}
        />
        <ListItemCard
          className="flex-none"
          imageUrl={maspalomasBeachUrl}
          location="Gran Canaria"
          name="Maspalomas Beach"
          numberInList={4}
        />
        <ListItemCard
          className="mr-auto flex-none"
          imageUrl={scubaDivingUrl}
          location="Gran Canaria"
          name="Scuba Diving"
          numberInList={2}
        />
      </div>
      <Link href={''} className="btn btn-outline my-5 mx-auto">
        View More
      </Link>
    </section>
  );
}

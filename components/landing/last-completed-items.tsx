import React from 'react';
import { storage } from '@/infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { ListItemCard } from '../shared/list-item-card';

export async function LastCompletedItems() {
  const scubaDivingUrl = await getDownloadURL(
    ref(storage, 'scuba-diving/scuba-diving-1x1.jpg')
  );
  const maspalomasBeachUrl = await getDownloadURL(
    ref(storage, 'maspalomas-beach/maspalomas-beach-1x1.jpg')
  );

  return (
    <section className=''>
      <h2 className='mt-7 mb-5 text-white text-4xl'>Fulfilled</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ListItemCard
          imageUrl={scubaDivingUrl}
          location="Gran Canaria"
          name="Scuba Diving"
          numberInList={2}
        />
        <ListItemCard
          imageUrl={maspalomasBeachUrl}
          location="Gran Canaria"
          name="Maspalomas Beach"
          numberInList={4}
        />
      </div>
    </section>
  );
}

import React from 'react';
import { storage } from '@/infrastructure/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { ListItemCard } from '../shared/list-item-card';
import Link from 'next/link';
import clsx from 'clsx';
import { HorizontalItemList, ListItem } from '../shared/horizontal-item-list';

export async function LastCompletedItems() {
  const scubaDivingUrl = await getDownloadURL(
    ref(storage, 'scuba-diving/scuba-diving-1x1.jpg')
  );
  const maspalomasBeachUrl = await getDownloadURL(
    ref(storage, 'maspalomas-beach/maspalomas-beach-1x1.jpg')
  );

  const items: ListItem[] = [
    {
      imageUrl: scubaDivingUrl,
      location: 'Gran Canaria',
      name: 'Scuba Diving',
      numberInList: 2
    },
    {
      imageUrl: maspalomasBeachUrl,
      location: 'Gran Canaria',
      name: 'Maspalomas Beach',
      numberInList: 4
    },
    {
      imageUrl: scubaDivingUrl,
      location: 'Gran Canaria',
      name: 'Scuba Diving',
      numberInList: 5
    }
  ];

  return <HorizontalItemList title="Fulfilled" viewMoreUrl="/" items={items} />;
}

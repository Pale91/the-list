import React from 'react';
import { HorizontalItemList, ListItem } from '../shared/horizontal-item-list';
import { getImageUrl } from '@/repositories/activity/files-repository';

export async function LastCompletedItems() {
  const scubaDivingUrl = await getImageUrl('scuba-diving/scuba-diving-1x1.jpg');
  const maspalomasBeachUrl = await getImageUrl(
    'maspalomas-beach/maspalomas-beach-1x1.jpg'
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

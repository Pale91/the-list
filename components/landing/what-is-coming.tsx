import { storage } from '@/infrastructure/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { HorizontalItemList, ListItem } from '../shared/horizontal-item-list';

export async function WhatIsComing() {
  const santoriniUrl = await getDownloadURL(
    ref(storage, 'santorini-greece/santorini-1x1.jpg')
  );
  const milosUrl = await getDownloadURL(
    ref(storage, 'milos-greece/milos-1x1.jpg')
  );

  const items: ListItem[] = [
    {
      imageUrl: santoriniUrl,
      location: 'Santorini, Greece',
      name: 'Santorini Island',
      numberInList: 34
    },
    {
      imageUrl: milosUrl,
      location: 'Milos, Greece',
      name: 'Milos Island',
      numberInList: 4
    },
    {
      imageUrl: santoriniUrl,
      location: 'Santorini, Greece',
      name: 'Santorini Island',
      numberInList: 34
    },
    {
      imageUrl: milosUrl,
      location: 'Milos, Greece',
      name: 'Milos Island',
      numberInList: 4
    }
  ];

  return (
    <HorizontalItemList title="What's Coming" viewMoreUrl="/" items={items} />
  );
}

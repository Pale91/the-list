import { HorizontalItemList, ListItem } from '../shared/horizontal-item-list';
import { getImageUrl } from '@/repositories/activity/files-repository';

export async function WhatIsComing() {
  const santoriniUrl = await getImageUrl('santorini-greece/santorini-1x1.jpg');
  const milosUrl = await getImageUrl('milos-greece/milos-1x1.jpg');

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

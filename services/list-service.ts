'use server';

import { addItem } from '@/repositories/items/items-repository';
import ItemSchema, { Item, ItemState } from '@/repositories/items/items-types';

const CreateItemSchema = ItemSchema.omit({ id: true });

export async function createItem(formData: FormData) {
  console.log('planned date', formData.get('plannedDate'));

  const newItem: Omit<Item, 'id'> = CreateItemSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationLink: formData.get('locationLink'),
    state: ItemState.PENDING,
    plannedDate: formData.get('plannedDate') || null,
    completionDate: null,
    creationDate: new Date(),
    referUserId: null
  });

  addItem(newItem);
  console.log('Item added');
}

'use server';

import { addItem } from '@/infrastructure/repositories/items/items-repository';
import {
  Item,
  ItemSchema,
  ItemState
} from '@/infrastructure/repositories/items/items-types';

const CreateItemSchema = ItemSchema.omit({ id: true });

export async function createItem(formData: FormData) {
  const newItem: Omit<Item, 'id'> = CreateItemSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationLink: formData.get('locationLink'),
    state: ItemState.PENDING,
    plannedDate: formData.get('plannedDate'),
    completionDate: null,
    creationDate: new Date(),
    referUserId: null
  });

  addItem(newItem);
  console.log('Item added');
}

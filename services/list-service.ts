'use server';

import { addItem } from '@/infrastructure/repositories/items-repository';

export async function createItem(formData: FormData) {
  const params = {
    name: formData.get('name').toString(),
    plannedDate: new Date(formData.get('plannedDate').toString())
  };

  addItem(params);
  console.log('Item added');
}

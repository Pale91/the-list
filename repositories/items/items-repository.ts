import { doc, collection, setDoc, addDoc } from 'firebase/firestore';
import { db } from '../../infrastructure/firebase';
import { Item } from './items-types';

const collectionName: string = 'items';

export async function addItem(item: Omit<Item, 'id'>) {
  const itemsCollection = collection(db, collectionName);
  await addDoc(itemsCollection, {
    ...item
  });
}

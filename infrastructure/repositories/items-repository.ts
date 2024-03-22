import { doc, collection, setDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const collectionName: string = 'items';

export async function addItem(params: { name: string; date?: Date }) {
  const itemsCollection = collection(db, collectionName);
  await addDoc(itemsCollection, {
    ...params
  });
}

import { doc, collection, setDoc, addDoc } from 'firebase/firestore';
import { db } from '../../infrastructure/firebase';
import { Activity } from './activity-types';

const collectionName: string = 'activity';

export async function addActivity(item: Omit<Activity, 'id'>) {
  const itemsCollection = collection(db, collectionName);
  await addDoc(itemsCollection, {
    ...item
  });
}

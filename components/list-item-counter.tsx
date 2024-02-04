import { collection, getDocs } from 'firebase/firestore';
import { db } from '../infrastructure/firebase';

export const ListItemCounter = async () => {
  const querySnapshot = await getDocs(collection(db, 'list'));
  const elements = [];
  querySnapshot.forEach((doc) => elements.push(doc.data()));

  return (
    <>
      {elements && (
        <>
          <h1>Items Count: {elements.length}</h1>
          <ul>
            {elements.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

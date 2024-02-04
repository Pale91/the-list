'use client';
import React from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../infrastructure/firebase';

export const ListItemCounter = () => {
  const [items, setItems] = React.useState<any[] | undefined>();

  React.useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'list'));
      const elements = [];

      querySnapshot.forEach((doc) => elements.push(doc.data()));
      setItems(elements);
    };

    getItems();
  }, []);

  return (
    <>
      {items && (
        <>
          <h1>Items Count: {items.length}</h1>
          <ul>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

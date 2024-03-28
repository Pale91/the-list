// IMPORTANT `import 'server-only'` protects the code from being leaked to the client
// https://nextjs.org/blog/security-nextjs-server-components-actions#server-only
import 'server-only';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBoth5PYeTGNJg8-NgEnDTrMS1wBSPQb-w',
  authDomain: 'the-list-dc90e.firebaseapp.com',
  projectId: 'the-list-dc90e',
  storageBucket: 'gs://the-list-dc90e.appspot.com',
  messagingSenderId: '289530096672',
  appId: '1:289530096672:web:783c267cbf09afdd906045',
  measurementId: 'G-F87X8N8HW6'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Activate Firestore
export const db = getFirestore(app);

export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoth5PYeTGNJg8-NgEnDTrMS1wBSPQb-w",
  authDomain: "the-list-dc90e.firebaseapp.com",
  projectId: "the-list-dc90e",
  storageBucket: "the-list-dc90e.appspot.com",
  messagingSenderId: "289530096672",
  appId: "1:289530096672:web:783c267cbf09afdd906045",
  measurementId: "G-F87X8N8HW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
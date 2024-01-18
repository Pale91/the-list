import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';

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
export const app = initializeApp(firebaseConfig);

// Activate Firestore
export const db = getFirestore(app);

export const activateAppCheck = () => {
  // Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
  // site key and pass it to initializeAppCheck().
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider('6Ld-_VMpAAAAAAMEued-pDNGSs3Tp-KBygk0ePmA'),
    isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
  });
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
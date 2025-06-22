import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace these with your actual Firebase config
  apiKey: "AIzaSyDEHAcbG_T6m8gwOiBIZm8EinzZBT_K-OI",
  authDomain: "leetravels-b3884.firebaseapp.com",
  projectId: "leetravels-b3884",
  storageBucket: "leetravels-b3884.firebasestorage.app",
  messagingSenderId: "1021095481810",
  appId: "1:1021095481810:web:0fd92fe9b382e93222b80b",
  measurementId: "G-50MPPJ4R93"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app; 
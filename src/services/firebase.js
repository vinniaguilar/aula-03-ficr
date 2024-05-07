import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCok3Z31nzDoEkc2XyPmK2eB6bCsPsO9cA",
  authDomain: "ficr-beyond.firebaseapp.com",
  projectId: "ficr-beyond",
  storageBucket: "ficr-beyond.appspot.com",
  messagingSenderId: "17530476267",
  appId: "1:17530476267:web:041249fed2aa545d0850ae",
  measurementId: "G-0BDFH3348N"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

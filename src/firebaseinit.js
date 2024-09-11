// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmYCjMG4OdNfg52OGdemvjS4wDwr1qGOo",
  authDomain: "busy-buy-f2de2.firebaseapp.com",
  projectId: "busy-buy-f2de2",
  storageBucket: "busy-buy-f2de2.appspot.com",
  messagingSenderId: "876147948801",
  appId: "1:876147948801:web:bb06c467269f7abf72ef00",
  measurementId: "G-9SNYNLLKLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
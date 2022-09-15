// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCyNOmBSCOdyISW1nJqe58j2fHALCYtNoc",
  authDomain: "airloc-95e1d.firebaseapp.com",
  databaseURL: "https://airloc-95e1d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "airloc-95e1d",
  storageBucket: "airloc-95e1d.appspot.com",
  messagingSenderId: "763743522492",
  appId: "1:763743522492:web:68a9aac6aa9c32faeb4ab9"
}; 
 
// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

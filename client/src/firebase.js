// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeland-3696c.firebaseapp.com",
  projectId: "homeland-3696c",
  storageBucket: "homeland-3696c.appspot.com",
  messagingSenderId: "126083540199",
  appId: "1:126083540199:web:5191e91e7768afa82bee42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  
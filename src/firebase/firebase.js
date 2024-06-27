// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKHzKl8OEgI-Mvur7fXjwVZWTXdtjKJM",
  authDomain: "avanzado-manana.firebaseapp.com",
  projectId: "avanzado-manana",
  storageBucket: "avanzado-manana.appspot.com",
  messagingSenderId: "711615606136",
  appId: "1:711615606136:web:e96ef2d2309d2eeec02c8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

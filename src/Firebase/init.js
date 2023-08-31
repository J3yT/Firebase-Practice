// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDABMmrgrJfG6Nho3ckANP6Tz7rxQDOOvs",
  authDomain: "fir-practise-8c2ce.firebaseapp.com",
  projectId: "fir-practise-8c2ce",
  storageBucket: "fir-practise-8c2ce.appspot.com",
  messagingSenderId: "1084087914376",
  appId: "1:1084087914376:web:1652089ce7195d379ef43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
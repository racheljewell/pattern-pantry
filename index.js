// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSKnhkBsxcS67z9xWi-RaqexRAWh5Cz4I",
  authDomain: "pattern-pantry.firebaseapp.com",
  projectId: "pattern-pantry",
  storageBucket: "pattern-pantry.firebasestorage.app",
  messagingSenderId: "296465081352",
  appId: "1:296465081352:web:bf0e7c272559d6964e5dbd",
  measurementId: "G-PNHV1LVRCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
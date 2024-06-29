// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnvWnIRZddXdf2okI0IVWqGia_PUf3h2g",
  authDomain: "sportybet.firebaseapp.com",
  projectId: "sportybet",
  storageBucket: "sportybet.appspot.com",
  messagingSenderId: "1025752428247",
  appId: "1:1025752428247:web:7e9c027769915640a7ca92",
  measurementId: "G-EPGGYT1SJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
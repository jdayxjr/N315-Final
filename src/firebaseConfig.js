// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxIbQx_f9_DI0aUslM2Cb6yhVhPG_fsU",
  authDomain: "n315-final-3b3e4.firebaseapp.com",
  projectId: "n315-final-3b3e4",
  storageBucket: "n315-final-3b3e4.firebasestorage.app",
  messagingSenderId: "2547902891",
  appId: "1:2547902891:web:01ec5c4d0444c4086d8aee",
  measurementId: "G-LWKVSHR7B8"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
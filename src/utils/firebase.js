// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-aee8f.firebaseapp.com",
  projectId: "netflixgpt-aee8f",
  storageBucket: "netflixgpt-aee8f.appspot.com",
  messagingSenderId: "818371593784",
  appId: "1:818371593784:web:36358d73963650c50508cd",
  measurementId: "G-2T7EHZ9969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
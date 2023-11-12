// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIsuLbyncsHIjYlQIc96rFfXBxkLlQ-BA",
  authDomain: "expense-tracker-29.firebaseapp.com",
  projectId: "expense-tracker-29",
  storageBucket: "expense-tracker-29.appspot.com",
  messagingSenderId: "663470929579",
  appId: "1:663470929579:web:9e13f7b787f9305b20e9ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
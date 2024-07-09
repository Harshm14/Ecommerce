// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNS3JVKB63mmetkxxAZceGF0ffbknsqwI",
  authDomain: "ecommerce-4f273.firebaseapp.com",
  projectId: "ecommerce-4f273",
  storageBucket: "ecommerce-4f273.appspot.com",
  messagingSenderId: "1071467181420",
  appId: "1:1071467181420:web:72106d7b313140ca28ef49",
  measurementId: "G-LC2LEJZDSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs7BV9Fhqm6NgE3c3Q6banYAAJqX50T2E",
  authDomain: "projectb-bda62.firebaseapp.com",
  databaseURL: "https://projectb-bda62-default-rtdb.firebaseio.com",
  projectId: "projectb-bda62",
  storageBucket: "projectb-bda62.appspot.com",
  messagingSenderId: "317345610049",
  appId: "1:317345610049:web:2f83bf10658d76913349c0",
  measurementId: "G-0FYJ1T3990"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
export default app;

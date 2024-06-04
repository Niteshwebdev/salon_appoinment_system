// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCpwBxWU9xUu4BZIka2k67Y2SjIKJmfqhs",
  authDomain: "salon-4d23b.firebaseapp.com",
  projectId: "salon-4d23b",
  storageBucket: "salon-4d23b.appspot.com",
  messagingSenderId: "716987836562",
  appId: "1:716987836562:web:2a3b84b8a17b58a5d0de4b",
  measurementId: "G-XD5RZTKF6J"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
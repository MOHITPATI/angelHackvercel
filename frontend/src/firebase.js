// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDzOqC_dh5rZABhQBaRZSaY-18OV9zeg3w",
//   authDomain: "angel-hack-c039d.firebaseapp.com",
//   projectId: "angel-hack-c039d",
//   storageBucket: "angel-hack-c039d.appspot.com",
//   messagingSenderId: "984498005938",
//   appId: "1:984498005938:web:6aa6f9abdd378e7b6866ab",
//   measurementId: "G-3K7P76PBSK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzOqC_dh5rZABhQBaRZSaY-18OV9zeg3w",
//   authDomain: "angel-hack-c039d.firebaseapp.com",
//   projectId: "angel-hack-c039d",
//   storageBucket: "angel-hack-c039d.appspot.com",
//   messagingSenderId: "984498005938",
//   appId: "1:984498005938:web:6aa6f9abdd378e7b6866ab",
//   measurementId: "G-3K7P76PBSK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2LFababdMnfgh0DTcm2sQY9e1e1YjUc",
  authDomain: "angelhack-5c175.firebaseapp.com",
  projectId: "angelhack-5c175",
  storageBucket: "angelhack-5c175.appspot.com",
  messagingSenderId: "891868152016",
  appId: "1:891868152016:web:7641d2269f5707fcff1ed5",
  measurementId: "G-2MT1BJZ3CL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

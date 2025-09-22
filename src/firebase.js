// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfjGikLhE_S7p90yU-60VBSSozt4yLSXo",
  authDomain: "learn-a3f4a.firebaseapp.com",
  projectId: "learn-a3f4a",
  storageBucket: "learn-a3f4a.firebasestorage.app",
  messagingSenderId: "1086929051910",
  appId: "1:1086929051910:web:d7a6145edba556d5e0be87",
  measurementId: "G-J4KMRRQRPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKiTrCZjLXeAScxxm_WHkHHI9x3-sEj3U",
  authDomain: "login-d31d2.firebaseapp.com",
  projectId: "login-d31d2",
  storageBucket: "login-d31d2.appspot.com",
  messagingSenderId: "913181252507",
  appId: "1:913181252507:web:442e2cd0f41c9bcda45f3e",
  measurementId: "G-E12TDC1DVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
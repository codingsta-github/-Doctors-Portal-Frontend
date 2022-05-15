// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEpxSvfPI-WQXfH36taFS6y-C-snVqEMQ",
  authDomain: "doctors-portal-30cd8.firebaseapp.com",
  projectId: "doctors-portal-30cd8",
  storageBucket: "doctors-portal-30cd8.appspot.com",
  messagingSenderId: "938949558411",
  appId: "1:938949558411:web:ecc18e199dc3338d93d48e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
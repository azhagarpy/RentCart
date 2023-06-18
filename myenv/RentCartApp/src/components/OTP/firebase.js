import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWdBd2TQU1gWWRAJEeeLXym1yIIgsJGgo",
    authDomain: "rentcart-22feb.firebaseapp.com",
    projectId: "rentcart-22feb",
    storageBucket: "rentcart-22feb.appspot.com",
    messagingSenderId: "415175060355",
    appId: "1:415175060355:web:04579d71bd6510d05fe4b6",
    measurementId: "G-PZPVY9R5FF"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuTWlACtdHPWysbfAqkNoe8eLWrnvU5gM",
  authDomain: "tp-integrador-backend.firebaseapp.com",
  databaseURL: "https://tp-integrador-backend-default-rtdb.firebaseio.com",
  projectId: "tp-integrador-backend",
  storageBucket: "tp-integrador-backend.appspot.com",
  messagingSenderId: "488141630126",
  appId: "1:488141630126:web:3c2d025a183379653d5b3f"
};


const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;


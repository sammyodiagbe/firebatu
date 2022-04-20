import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ1QT8rgezQYLSDyE8NGtNT3rWRv5rCpw",
  authDomain: "batu-fc5e3.firebaseapp.com",
  projectId: "batu-fc5e3",
  storageBucket: "batu-fc5e3.appspot.com",
  messagingSenderId: "392780618709",
  appId: "1:392780618709:web:a3e27d5b2b9c7e2a2bbb5c",
  measurementId: "G-S88CP633GT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const realtimeDb = getDatabase(app);

export { auth, firestore, realtimeDb };

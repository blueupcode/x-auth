import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAZdtGB_RhGSoa-M-Dgasz_kCj9XsQXFLc",
  authDomain: "ba-space.firebaseapp.com",
  projectId: "ba-space",
  storageBucket: "ba-space.appspot.com",
  messagingSenderId: "786816085655",
  appId: "1:786816085655:web:bf293c349e5649056a43d2",
  measurementId: "G-YYHLTLZLV0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// / Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCEsFgvocGYSC_0HQCjXEnreB_l4EZDB38",
  authDomain: "ibkdatabase.firebaseapp.com",
  databaseURL: "https://ibkdatabase-default-rtdb.firebaseio.com",
  projectId: "ibkdatabase",
  storageBucket: "ibkdatabase.appspot.com",
  messagingSenderId: "981434023230",
  appId: "1:981434023230:web:ebf9e08fe41a52a514c06f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

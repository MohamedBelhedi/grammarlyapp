// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore,getStorage } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXOefz_3ccgyKbZm1QjbiFENGALBYaaAQ",
  authDomain: "grammerlyapp.firebaseapp.com",
  projectId: "grammerlyapp",
  storageBucket: "grammerlyapp.appspot.com",
  messagingSenderId: "586218217484",
  appId: "1:586218217484:web:d619071c31288016ba8e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const clietID='client_Dn1ZCRrauR12cEkAcUgXaj'
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Z0bnng5xXoMa79HnCfnpgItgk_U9xcs",
  authDomain: "netflix-clone-64c52.firebaseapp.com",
  databaseURL: "https://netflix-clone-64c52-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-64c52",
  storageBucket: "netflix-clone-64c52.appspot.com",
  messagingSenderId: "271667735549",
  appId: "1:271667735549:web:ef72487b41fabbb90b8794"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { auth };

export default db;
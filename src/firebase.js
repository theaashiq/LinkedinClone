// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAuth } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'



// import { firebase } from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyBhD3lw6STi8Pws9aAh-bMdVjuA43MDTTg",
    authDomain: "linkedin-clone-f605c.firebaseapp.com",
    projectId: "linkedin-clone-f605c",
    storageBucket: "linkedin-clone-f605c.appspot.com",
    messagingSenderId: "476488191113",
    appId: "1:476488191113:web:ea13cdf3e1ceb58c5a4a58",
    measurementId: "G-WP58LJ3PYN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
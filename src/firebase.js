// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDH4pU829ncQV3ck1sTgBtGGsd4yMLCTiU",
    authDomain: "todo-app-cp-8c579.firebaseapp.com",
    projectId: "todo-app-cp-8c579",
    storageBucket: "todo-app-cp-8c579.appspot.com",
    messagingSenderId: "155282153349",
    appId: "1:155282153349:web:016a7c3e33598df282eeec",
    measurementId: "G-PFLMF9QF9W"
  });

const db = firebaseApp.firestore();

export default db;


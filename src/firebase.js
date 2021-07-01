import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdySyGo9SXb2igoeV__XcCEzEkY41slTg",
    authDomain: "challenge-2ef9a.firebaseapp.com",
    projectId: "challenge-2ef9a",
    storageBucket: "challenge-2ef9a.appspot.com",
    messagingSenderId: "1087487663346",
    appId: "1:1087487663346:web:6cef6834db79505f44846b",
    measurementId: "G-3DPGLB4N7R"
  };
  
  //initialize the app

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //initialize the data-base

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
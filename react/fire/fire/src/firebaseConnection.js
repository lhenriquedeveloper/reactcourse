import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDFXrZHoSc2eO7nqCMenFV8kIfbSk_TD3M",
  authDomain: "cursoreact-96949.firebaseapp.com",
  projectId: "cursoreact-96949",
  storageBucket: "cursoreact-96949.appspot.com",
  messagingSenderId: "1021530283972",
  appId: "1:1021530283972:web:a76e75c6f26bbc23f08e91",
  measurementId: "G-Y3RJNTMM2Z",
};

// Abrindo conexão Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

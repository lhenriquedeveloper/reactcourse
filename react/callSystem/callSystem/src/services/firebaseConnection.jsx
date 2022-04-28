import firebase from "firebase/app";
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCF58g_CdbRHJRVo9LwHJqHPibV7H9xDmk",
    authDomain: "callsystemudemy.firebaseapp.com",
    projectId: "callsystemudemy",
    storageBucket: "callsystemudemy.appspot.com",
    messagingSenderId: "244941579034",
    appId: "1:244941579034:web:e748ca1b1c40ca395642a3",
    measurementId: "G-4VW2QN7MZG"
};

if (!firebase.apps.lenght) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
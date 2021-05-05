import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsUK0z44TbbWwKvLuTzVjOHuRPfDtVyQk",
    authDomain: "marioplan-e4d0b.firebaseapp.com",
    databaseURL: "https://marioplan-e4d0b.firebaseio.com",
    projectId: "marioplan-e4d0b",
    storageBucket: "marioplan-e4d0b.appspot.com",
    messagingSenderId: "903569205332",
    appId: "1:903569205332:web:11e77ba6a64aa044c3a5c1"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;
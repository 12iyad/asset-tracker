import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyDqKRaVFyMJeNLvz7-4KQWot3BpkceQtUk",
    authDomain: "asset-tracker-90cdc.firebaseapp.com",
    projectId: "asset-tracker-90cdc",
    storageBucket: "asset-tracker-90cdc.appspot.com",
    messagingSenderId: "481398242233",
    appId: "1:481398242233:web:720f6a06299c6491015468"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref(); 
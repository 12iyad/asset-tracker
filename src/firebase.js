import firebase from "firebase/compat/app";
<<<<<<< Updated upstream
import {getFirestore} from "@firebase/firestore"
import {initializeApp}  from "firebase/app";
=======
import "firebase/compat/database";
import initializeApp from "firebase/compat/app";
>>>>>>> Stashed changes


const firebaseConfig = {
    apiKey: "AIzaSyDqKRaVFyMJeNLvz7-4KQWot3BpkceQtUk",
    authDomain: "asset-tracker-90cdc.firebaseapp.com",
    projectId: "asset-tracker-90cdc",
    storageBucket: "asset-tracker-90cdc.appspot.com",
    messagingSenderId: "481398242233",
    appId: "1:481398242233:web:720f6a06299c6491015468"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCpmu5k4XMiU0i3CrXncwkpCWkffUnTNeg",
  authDomain: "reactdejesus.firebaseapp.com",
  projectId: "reactdejesus",
  storageBucket: "reactdejesus.appspot.com",
  messagingSenderId: "632602991706",
  appId: "1:632602991706:web:ea471280908a21310b8c63"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
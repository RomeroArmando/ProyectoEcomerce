// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcN3J7Y8NplRX-Cl2sDn5mdsCiIoEUXuc",
  authDomain: "ecomerce-react-coderhous-e8530.firebaseapp.com",
  projectId: "ecomerce-react-coderhous-e8530",
  storageBucket: "ecomerce-react-coderhous-e8530.appspot.com",
  messagingSenderId: "1002521564489",
  appId: "1:1002521564489:web:2230fff4212b3b64af3698"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUveUa8ki_j5Gq4WtRqONBbu_WJ4HgeY",
  authDomain: "fittrack-6c8dc.firebaseapp.com",
  projectId: "fittrack-6c8dc",
  storageBucket: "fittrack-6c8dc.firebasestorage.app",
  messagingSenderId: "943414834803",
  appId: "1:943414834803:web:b5406a3a28cd98beb35c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

export { db };

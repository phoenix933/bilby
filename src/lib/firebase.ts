import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: move this to env variables
const firebaseConfig = {
    apiKey: "AIzaSyA0v6sbrzwp1w3vJ-uF6kLLHsOKcfg9t2U",
    authDomain: "bilby-c26d5.firebaseapp.com",
    projectId: "bilby-c26d5",
    storageBucket: "bilby-c26d5.appspot.com",
    messagingSenderId: "706915265202",
    appId: "1:706915265202:web:c9ffb2be34988f656837ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
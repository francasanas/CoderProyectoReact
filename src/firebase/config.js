// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4zfgWwgxy4oWB7hM1KFQTo9K7sUkfAVg",
    authDomain: "proyectoreactjs-f18fe.firebaseapp.com",
    projectId: "proyectoreactjs-f18fe",
    storageBucket: "proyectoreactjs-f18fe.appspot.com",
    messagingSenderId: "730725021893",
    appId: "1:730725021893:web:6e67eb9902e80fdf9018ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
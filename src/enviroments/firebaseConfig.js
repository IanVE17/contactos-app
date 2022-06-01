// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZxfDnSpOxYvSn8UZ-36_KxlfQQscSRcI",
    authDomain: "contactos-app-da467.firebaseapp.com",
    projectId: "contactos-app-da467",
    storageBucket: "contactos-app-da467.appspot.com",
    messagingSenderId: "362288892856",
    appId: "1:362288892856:web:5502b58358840b1e60dd4d",
    measurementId: "G-V9H0TZSNEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;


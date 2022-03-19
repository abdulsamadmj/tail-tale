// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWqU5e8ePGpDLCIzwouSjmn3SCQujeJgY",
    authDomain: "tail-tale.firebaseapp.com",
    projectId: "tail-tale",
    storageBucket: "tail-tale.appspot.com",
    messagingSenderId: "256779276065",
    appId: "1:256779276065:web:090de119486810c707b860",
    measurementId: "G-64EN4L22HH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
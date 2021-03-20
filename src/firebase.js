// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUzvPiWt6fVulYBpTjwO49kGJ1791v9nQ",
  authDomain: "zilp-8807e.firebaseapp.com",
  projectId: "zilp-8807e",
  storageBucket: "zilp-8807e.appspot.com",
  messagingSenderId: "288331005914",
  appId: "1:288331005914:web:828c5d7a555128c4cc8ae3",
  measurementId: "G-R8P6XD5H93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

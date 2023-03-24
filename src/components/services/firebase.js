// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzoxmBLjjOrh89gOvxQJJxVKXrIkCv4Rs",
  authDomain: "the-fullbelly-project.firebaseapp.com",
  projectId: "the-fullbelly-project",
  storageBucket: "the-fullbelly-project.appspot.com",
  messagingSenderId: "842196816948",
  appId: "1:842196816948:web:f1ca96433115a7c13de661",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBjV_vwuy9cO6QZ1CJOchcKczMC3aH0d0",
  authDomain: "unityui8.firebaseapp.com",
  projectId: "unityui8",
  storageBucket: "unityui8.appspot.com",
  messagingSenderId: "376002153556",
  appId: "1:376002153556:web:1f722c6dabd495b12ff1c1",
  measurementId: "G-25GTGLHTQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmYmezvIVlNwwZy3nqvtnCw3NH8p6_s54",
  authDomain: "bengali-chefs.firebaseapp.com",
  projectId: "bengali-chefs",
  storageBucket: "bengali-chefs.appspot.com",
  messagingSenderId: "964994884972",
  appId: "1:964994884972:web:9ba9288c505e63cd667f49"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
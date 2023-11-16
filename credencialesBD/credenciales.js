// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWYE3D1UBt6kty1txTk6B9IrcciAHod4s",
  authDomain: "react-native-sosya.firebaseapp.com",
  projectId: "react-native-sosya",
  storageBucket: "react-native-sosya.appspot.com",
  messagingSenderId: "85668902737",
  appId: "1:85668902737:web:7c94d021cf5dd658798570"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
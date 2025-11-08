// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTvlD3E9shFa6PF_Z-1byqRWbUkM2Sw20",
  authDomain: "foodies-28d86.firebaseapp.com",
  projectId: "foodies-28d86",
  storageBucket: "foodies-28d86.firebasestorage.app",
  messagingSenderId: "1087807563575",
  appId: "1:1087807563575:web:4506c55403d7bad9565cb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

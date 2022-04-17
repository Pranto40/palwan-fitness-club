// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa9c0ly8Dgq0AiTvNJxdhnGblPcjNfpjY",
  authDomain: "palwan-fitness-club.firebaseapp.com",
  projectId: "palwan-fitness-club",
  storageBucket: "palwan-fitness-club.appspot.com",
  messagingSenderId: "208427207070",
  appId: "1:208427207070:web:d537acb7562357b224ae8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
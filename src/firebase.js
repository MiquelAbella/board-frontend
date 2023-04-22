import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0ixzDoaAoZqt2Op3h-i0McgdzmEe-q3o",
  authDomain: "clickapp-f0899.firebaseapp.com",
  projectId: "clickapp-f0899",
  storageBucket: "clickapp-f0899.appspot.com",
  messagingSenderId: "473527196896",
  appId: "1:473527196896:web:ad8005c313407c29d30485",
  measurementId: "G-Q038X2W0J2",
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();

export default app;

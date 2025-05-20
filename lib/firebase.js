
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8W_G2yAJrkdf5HOe0YLquzXzA3bhe4nc",
  authDomain: "euroclips-auth.firebaseapp.com",
  projectId: "euroclips-auth",
  storageBucket: "euroclips-auth.firebasestorage.app",
  messagingSenderId: "930198954287",
  appId: "1:930198954287:web:d444e2f7e001b2c07d01da"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

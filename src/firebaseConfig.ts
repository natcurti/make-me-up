import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcrCtM5t1ZhEUgXmjc2EXLDi2lkfXDxQg",
  authDomain: "make-me-up-4cdae.firebaseapp.com",
  projectId: "make-me-up-4cdae",
  storageBucket: "make-me-up-4cdae.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);

export default auth;

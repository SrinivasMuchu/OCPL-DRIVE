// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqakY9IDTqrhIkgEvHuw_0s7ahLsZVnYY",
  authDomain: "ocpl-drive-5ee9b.firebaseapp.com",
  projectId: "ocpl-drive-5ee9b",
  storageBucket: "ocpl-drive-5ee9b.appspot.com",
  messagingSenderId: "964544231177",
  appId: "1:964544231177:web:bb6ea0db68a4ec299045d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
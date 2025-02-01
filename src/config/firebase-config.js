// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlL97XVteLCGCJVALIRwldKIaHu_1Y-sI",
  authDomain: "parisfoot-a1e2d.firebaseapp.com",
  projectId: "parisfoot-a1e2d",
  storageBucket: "parisfoot-a1e2d.firebasestorage.app",
  messagingSenderId: "784264282441",
  appId: "1:784264282441:web:ec85d9020a43e72c65da98",
  measurementId: "G-1RK3S86Y0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
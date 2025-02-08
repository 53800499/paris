import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* const firebaseConfig = {
  apiKey: "AIzaSyB1vaxvVpvIcoFwMarCGfT3fQG8Uo8qxVc",
  authDomain: "shobmarket-341da.firebaseapp.com",
  projectId: "shobmarket-341da",
  storageBucket: "shobmarket-341da.appspot.com", // Correction ici
  messagingSenderId: "1044280370715",
  appId: "1:1044280370715:web:27c80f201ee2ae55e23abe",
  measurementId: "G-E5NMJ48H4D"
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAlL97XVteLCGCJVALIRwldKIaHu_1Y-sI",
  authDomain: "parisfoot-a1e2d.firebaseapp.com",
  projectId: "parisfoot-a1e2d",
  storageBucket: "parisfoot-a1e2d.firebasestorage.app",
  messagingSenderId: "784264282441",
  appId: "1:784264282441:web:ec85d9020a43e72c65da98",
  measurementId: "G-1RK3S86Y0L"
};

// ✅ Vérifie si Firebase est déjà initialisé
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

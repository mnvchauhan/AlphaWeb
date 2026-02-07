import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyBarF8BGeaLywwEVhs_9fVKE_s8KXsjdeg",
//   authDomain: "alpha-research-survey.firebaseapp.com",
//   projectId: "alpha-research-survey",
//   storageBucket: "alpha-research-survey.appspot.com",
//   messagingSenderId: "240487952882",
//   appId: "1:240487952882:web:b553531f0e6fe0c6cfbb6b",
//   measurementId: "G-3VJRS0YYC0",
//   databaseURL: "https://alpha-research-survey-default-rtdb.firebaseio.com/",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDQqbkmxB2pJXhL51rK64Rx1D-ykebyPto",
  authDomain: "alpha-test-f749f.firebaseapp.com",
  projectId: "alpha-test-f749f",
  storageBucket: "alpha-test-f749f.firebasestorage.app",
  messagingSenderId: "861623450883",
  appId: "1:861623450883:web:1ec22dc054c9df3b477d36",
  measurementId: "G-8Z9FX372RV",
};

// Initialize app if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize services
const Auth = getAuth(app);
const Db = getFirestore(app);
const Storage = getStorage(app);
console.log("app: ", Db, Storage);

export { app, Auth, Db, Storage };

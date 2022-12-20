
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBe6Nykp7fBtO8yVJODxyEkP4f-Cca6kxk",
  authDomain: "clone-a08c5.firebaseapp.com",
  projectId: "clone-a08c5",
  storageBucket: "clone-a08c5.appspot.com",
  messagingSenderId: "317358442120",
  appId: "1:317358442120:web:edb320aaed8855d847413d",
  measurementId: "G-GZE42HZKZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
// const auth=firebase.auth();

export {db,app};
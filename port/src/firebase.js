// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7_rl37poQIoNeeSCPK_iA62pDG3qf9p4",
  authDomain: "portfolio-ebf09.firebaseapp.com",
  databaseURL: "https://portfolio-ebf09-default-rtdb.firebaseio.com",
  projectId: "portfolio-ebf09",
  storageBucket: "portfolio-ebf09.appspot.com",
  messagingSenderId: "58891833008",
  appId: "1:58891833008:web:1813ebc50f7e636397b575",
  measurementId: "G-K1RJ8H2F54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db,app}

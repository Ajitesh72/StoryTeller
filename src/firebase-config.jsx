import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,initializeFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyCH55Kv4X1sWZ6is9HWHXecLy4yiM1ootQ",
  authDomain: "storyteller-31012.firebaseapp.com",
  projectId: "storyteller-31012",
  storageBucket: "storyteller-31012.appspot.com",
  messagingSenderId: "96777408453",
  appId: "1:96777408453:web:bfa95dfd66bfb1bc1085ac",
  // measurementId: "G-T4TBJMXHDD"
};


const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
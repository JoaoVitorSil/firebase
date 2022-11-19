import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, addDoc, getDocs } from "./node_modules/firebase/firestore/lite";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4Bck0iKPVRHHJUG073LhpOhg_vSaE-JU",
    authDomain: "ect2525-2022.firebaseapp.com",
    projectId: "ect2525-2022",
    storageBucket: "ect2525-2022.appspot.com",
    messagingSenderId: "886112431532",
    appId: "1:886112431532:web:fb4ce054de33a59dfede09",
    measurementId: "G-948HV3D38T"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }
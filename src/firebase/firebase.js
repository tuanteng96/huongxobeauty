import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAf6CS7jdEOYn9HTDSnCP_YeCSFnTSjn8E",
    authDomain: "huongxobeauty-24691.firebaseapp.com",
    projectId: "huongxobeauty-24691",
    storageBucket: "huongxobeauty-24691.appspot.com",
    messagingSenderId: "180638729729",
    appId: "1:180638729729:web:46dea46a488968b4a96200",
    measurementId: "G-BB3BL52689"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };
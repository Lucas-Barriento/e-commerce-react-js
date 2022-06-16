// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8n9tOaG2Gb8KYdA4Su7C5OcnsUbo59bs",
    authDomain: "coderhouse-react-ecommer-c4bd7.firebaseapp.com",
    projectId: "coderhouse-react-ecommer-c4bd7",
    storageBucket: "coderhouse-react-ecommer-c4bd7.appspot.com",
    messagingSenderId: "668837139084",
    appId: "1:668837139084:web:19054fd6c9c3a1ef66e1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export default dataBase;
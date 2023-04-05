import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAkzyzWh-mYcpXm9POIFCxW2syCpwm7B9I",
    authDomain: "excel-project-31466.firebaseapp.com",
    databaseURL: "https://excel-project-31466-default-rtdb.firebaseio.com",
    projectId: "excel-project-31466",
    storageBucket: "excel-project-31466.appspot.com",
    messagingSenderId: "1008166966157",
    appId: "1:1008166966157:web:2170d142a10d37c1c763c4",
    measurementId: "G-5BW3RXJ5ZB"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
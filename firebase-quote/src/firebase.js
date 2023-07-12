// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { addDoc, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYbrlrBw3sCi_wz5OogHLCxF0AhVVmhOA",
  authDomain: "quotes-9ec9b.firebaseapp.com",
  projectId: "quotes-9ec9b",
  storageBucket: "quotes-9ec9b.appspot.com",
  messagingSenderId: "211743211837",
  appId: "1:211743211837:web:95104ee783bdb88e994554",
  measurementId: "G-PY5TY4E586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  //app sad sadrzi mnogo inf koje ce nas povezat sa firebase uslugama
export const db=getFirestore(app)


export const getQuotes = async () => {
    const quotesCollection = collection(db, "quotes");
    const quoteResults = await getDocs(quotesCollection);
    console.log(quoteResults)
    const quoteList = quoteResults.docs.map((doc) => doc.data());
    return quoteList;
  };
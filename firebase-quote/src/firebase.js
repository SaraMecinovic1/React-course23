// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYbrlrBw3sCi_wz5OogHLCxF0AhVVmhOA",
  authDomain: "quotes-9ec9b.firebaseapp.com",
  projectId: "quotes-9ec9b",
  storageBucket: "quotes-9ec9b.appspot.com",
  messagingSenderId: "211743211837",
  appId: "1:211743211837:web:95104ee783bdb88e994554",
  measurementId: "G-PY5TY4E586",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // predstavlja inicijalizovanu Firebase aplikaciju.
export const db = getFirestore(app); //pristup celoj aplikaciji,dokumentu, kolekciji ili upitu u bazi podataka

export const getQuotes = async () => {
  const quotesCollection = collection(db, "quotes"); //iz koje kolekcije uzimam
  const quoteResults = await getDocs(quotesCollection); //getDocs===koristi se za čitanje dokumenata iz kolekcije. //uzima podatke iz kolekcije
  console.log(quoteResults); // docs === predstavlja rezultate upita nad kolekcijom dokumenata.
  const quoteList = quoteResults.docs.map((doc) => {
    // mapiramo dobijene podatke iz kolekcije
    const data = doc.data(); //podaci
    const id = doc.id; //id dokumenta
    return { ...data, id: id };
  });
  return quoteList;
};

export const getQuoteById = async (id) => {
  const docRef = doc(db, "quotes", id); // doc===koristi se za kreiranje reference na dokument
  const docSnap = await getDoc(docRef); // getDoc===za asinhrono dobavljanje podataka iz određenog dokumenta
  const data = docSnap.data(); //cuvamo podatke
  return { ...data, id: id };
};

export const likeQuote = async (id, likes) => {
  const docRef = doc(db, "quotes", id);
  return await updateDoc(docRef, { likes: likes }); //updateDoc ===koristi se za ažuriranje postojećeg dokumenta u Firebase Firestore bazi podataka
};

export const updateQuoteData = async (id, data) => {
  const docRef = doc(db, "quotes", id); //referenca tom podatku
  return await updateDoc(docRef, data); //updateDoc ===koristi se za ažuriranje postojećeg dokumenta u Firebase Firestore bazi podataka
};

export const deleteQuote = async (id) => {
  const docRef = doc(db, "quotes", id); //referenca tom podatku
  return await deleteDoc(docRef); //deleteDoc === brisanje podatka iz baze
};

export const addQuote = async (data) => {
  const result = await addDoc(collection(db, "quotes"), data);
  return result;
};

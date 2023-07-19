import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMI0CtDi1rr0BTudaGmDRk77BuVLQjNBk",
  authDomain: "todo-list-4951f.firebaseapp.com",
  projectId: "todo-list-4951f",
  storageBucket: "todo-list-4951f.appspot.com",
  messagingSenderId: "714559256008",
  appId: "1:714559256008:web:5187c8968b98eb3a36bcfd",
  measurementId: "G-7S1JWTT698",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// da ih prikazemo
export const getToDoList = async () => {
  const todolistCollection = collection(db, "todo-list");
  const todolistResults = await getDocs(todolistCollection); //uzememo sve podatke iz kolekcije
  const todolistList = todolistResults.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  });
  return todolistList;
};

// da posaljemo obavezu
export const addToDoItem = async (data) => {
  const result = await addDoc(collection(db, "todo-list"), data);
  return result;
};

export const deleteQuote = async (id) => {
  const docRef = doc(db, "todo-list", id); //referenca tom podatku
  return await deleteDoc(docRef); //deleteDoc === brisanje podatka iz baze
};

////////////////// AUTH ////////////////

const register = async () => {
  
};

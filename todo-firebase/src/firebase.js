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


const firebaseConfig = {
  apiKey: "AIzaSyCMI0CtDi1rr0BTudaGmDRk77BuVLQjNBk",
  authDomain: "todo-list-4951f.firebaseapp.com",
  projectId: "todo-list-4951f",
  storageBucket: "todo-list-4951f.appspot.com",
  messagingSenderId: "714559256008",
  appId: "1:714559256008:web:5187c8968b98eb3a36bcfd",
  measurementId: "G-7S1JWTT698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

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

export const addToDoItem = async (data) => {
  const result = await addDoc(collection(db, "todo-list"), data);
  return result;
};
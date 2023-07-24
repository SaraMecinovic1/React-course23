import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqoUm9MKWRMES1MLzBGBo5zg-aCaGQmqQ",
  authDomain: "auth-a0e33.firebaseapp.com",
  projectId: "auth-a0e33",
  storageBucket: "auth-a0e33.appspot.com",
  messagingSenderId: "437805905694",
  appId: "1:437805905694:web:07017398d11e8de1cafb0f",
  measurementId: "G-V1QNKC2NKN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
  
   const signUp = async ({ email, password }) => {
    console.log(auth)
    await createUserWithEmailAndPassword({
      auth,
      email,
      password,
    })}

  return (
    <div>
      <input placeholder="name"></input>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={signUp()}>Sign up</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default App;
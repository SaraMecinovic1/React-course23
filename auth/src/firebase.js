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

export const signUp = async ({ email, password }) => {
  console.log(auth)
  await createUserWithEmailAndPassword({
    auth,
    email,
    password,
  });
  //   try{
  //     const userCredential = await createUserWithEmailAndPassword({
  //       auth,
  //       email,
  //       password,
  //     });
  //     const user = userCredential.user;
  //     console.log(user,"---sign up")
  //   }catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message

  // }
};

export const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const logout = async () => {
  await signOut(auth);
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: null,
    email: null,
    
   
  };
  
  export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
      setData(state, actions) {
        const data = actions.payload;
        state = data;  //state===tim podacima
        return state;
      },
      logout(state, actions) {
        return initialState;
      },
    },
  });
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { countSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  counter: countSlice.reducer,
  // test: testSlice.reducer,
});
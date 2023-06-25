import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    povecajNum(state, actions) {
      state.num++;
      return state;
    },
    resetNum(state, actions) {
      state.num = 0;
      return state;
    },
    saveValue(state, actions) {
      const saveNum = state.num;
      // const trenutniDatum = new Date().toLocaleDateString();
     
      return state;
    },
  },
});

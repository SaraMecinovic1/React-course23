import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
  saved: []
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
      const userData = actions.payload; // {fullName: '...', id: '....'}
      const item = {
        counter: state.num,
        user: userData,
        date: new Date().toISOString(),
      };
      state.num = 0;
      state.saved.push(item);
      return state;
    },
  },
});

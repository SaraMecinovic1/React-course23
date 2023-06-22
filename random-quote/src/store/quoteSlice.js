import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setFavorite(state, actions) {
      const quote = actions.payload;
      state.favorites.push(quote);
      return state;
    },
    clearFavorites(state, actions) {
      return initialState;
    },
    selectQuote(state, action) {
      const quote = action.payload;
      state.selectedQuote = quote;
      return state;
    },
  },
});

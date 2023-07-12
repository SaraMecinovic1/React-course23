import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setFavorite(state, actions) {
      const quote = actions.payload;  //taj podatak sto cemo staviti u favorites
      state.favorites.push(quote); // u s.fav pusaj taj podatak(quote)
      return state;  //vrati mi azurirani state
    },
    clearFavorites(state, actions) { //action-funkcija
      return initialState;  //prazan niz
    },
    selectQuote(state, action) {
      const quote = action.payload;
      state.selectedQuote = quote;
      return state;
    },
  },
});

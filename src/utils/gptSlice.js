import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: null,
    // movieNames: null, // NEED NEW ACCOUNT FOR GPT API
  },
  reducers: {
    toggleGptSearchView : (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.movieResults = action.payload;
    }
    // NEED NEW ACCOUNT FOR GPT API
    // addGptMovieResult: (state, action) => {
    //   const { movieNames, movieResults } = action.payload;
    //   state.movieNames = movieNames;
    //   state.movieResults = movieResults;
    // }
  }
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
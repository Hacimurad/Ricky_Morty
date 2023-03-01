import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterList: [],
};

export const characterReducer = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.characterList = action.payload;
    },
    deleteCharacters: (state) => {
      state.characterList = [];
    },
  },
});

export const { addCharacters, deleteCharacters } = characterReducer.actions;

export default characterReducer.reducer;

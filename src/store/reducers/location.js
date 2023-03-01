import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationList: [],
};

export const locationReducer = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocations: (state, action) => {
      state.locationList = action.payload;
    },
    deleteLocations: (state) => {
      state.locationList = [];
    },
  },
});

export const { addLocations, deleteLocations } = locationReducer.actions;

export default locationReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import tracksData from "../../JsonData/data.json"

const initialState = {
  tracks: tracksData,
};

const getTracksSlice = createSlice({
  name: "getTracks",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload; 
    },
  },
});

export const selectTracks = (state) => state.getTracks.tracks;

export const { setTracks } = getTracksSlice.actions;
export default getTracksSlice.reducer;

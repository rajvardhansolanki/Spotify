import { createSlice } from "@reduxjs/toolkit";
import tracksData from "../../data/tracks.json";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    items: tracksData,
  },
  reducers: {},
});

export const selectTracks = (state) => state.tracks.items;
export default tracksSlice.reducer;

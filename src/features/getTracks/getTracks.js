import { createSlice } from "@reduxjs/toolkit";
import tracksData from "../../JsonData/data.json";

const initialState = {
  currentTrackId: tracksData[0]?.id || null, // default to first track
  tracks: tracksData,
};

const getTracksSlice = createSlice({
  name: "getTracks",
  initialState,
  reducers: {
    setCurrentTrackId: (state, action) => {
      state.currentTrackId = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { setCurrentTrackId, setTracks } = getTracksSlice.actions;

export const selectTracks = (state) => state.getTracks.tracks;

export const selectCurrentTrack = (state) =>
  state.getTracks.tracks.find((t) => t.id === state.getTracks.currentTrackId) || state.getTracks.tracks[0];

export default getTracksSlice.reducer;

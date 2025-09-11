import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrackId: null,
  isPlaying: false,
  queue: [],
  volume: 0.7,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentTrackId: (state, action) => {
      state.currentTrackId = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    addToQueue: (state, action) => {
      state.queue.push(action.payload);
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  setCurrentTrackId,
  togglePlay,
  setIsPlaying,
  setQueue,
  addToQueue,
  setVolume,
} = playerSlice.actions;

export const selectCurrentTrackId = (state) => state.player.currentTrackId;
export const selectIsPlaying = (state) => state.player.isPlaying;
export const selectQueue = (state) => state.player.queue;
export const selectVolume = (state) => state.player.volume;

export default playerSlice.reducer;

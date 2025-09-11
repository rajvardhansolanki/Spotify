import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const trackId = action.payload;
      if (state.includes(trackId)) {
        return state.filter((id) => id !== trackId);
      } else {
        state.push(trackId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites;
export default favoritesSlice.reducer;

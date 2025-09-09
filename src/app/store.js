import { configureStore } from "@reduxjs/toolkit";
import getTracksReducer from "../features/getTracks/getTracks";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    getTracks: getTracksReducer,
  },
});

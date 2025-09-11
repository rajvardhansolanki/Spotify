import { createSlice, nanoid } from "@reduxjs/toolkit";
import playlistsData from "../../data/playlists.json";

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: playlistsData,
  reducers: {
    createPlaylist: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
            tracks: [],
            coverImage: "/thumbnails/playlist1.jpg",
          },
        };
      },
    },
    deletePlaylist: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    addTrackToPlaylist: (state, action) => {
      const { playlistId, trackId } = action.payload;
      const playlist = state.find((p) => p.id === playlistId);
      if (playlist && !playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
      }
    },
    removeTrackFromPlaylist: (state, action) => {
      const { playlistId, trackId } = action.payload;
      const playlist = state.find((p) => p.id === playlistId);
      if (playlist) {
        playlist.tracks = playlist.tracks.filter((id) => id !== trackId);
      }
    },
  },
});

export const {
  createPlaylist,
  deletePlaylist,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
    darkMode: true, // ✅ boolean flag
    colors: {
        backgroundColor: '#000000',
        fontColor: '#fff',
    }
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.mode === 'light') {
                state.mode = 'dark';
                state.darkMode = true; // ✅ dark mode active
                state.colors.backgroundColor = '#000000';
                state.colors.fontColor = '#fff';
            } else {
                state.mode = 'light';
                state.darkMode = false; // ✅ light mode active
                state.colors.backgroundColor = '#0f172b';
                state.colors.fontColor = '#fff';
            }
        },
        setTheme: (state, action) => {
            state.mode = action.payload.mode;
            state.darkMode = action.payload.mode === 'dark'; // ✅ auto-update flag
            state.colors = action.payload.colors;
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

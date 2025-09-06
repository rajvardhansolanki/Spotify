import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
    darkMode: true,
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
                state.darkMode = true;
                state.colors.backgroundColor = '#000000';
                state.colors.fontColor = '#fff';
            } else {
                state.mode = 'light';
                state.darkMode = false;
                state.colors.backgroundColor = '#004030';
                state.colors.fontColor = '#fff';
            }
        },
        setTheme: (state, action) => {
            state.mode = action.payload.mode;
            state.darkMode = action.payload.mode === 'dark';
            state.colors = action.payload.colors;
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

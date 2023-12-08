import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  searching: false,
  mobileMenu: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,

  reducers: {
    // getIcon: (state, action) => {
    //   state.button = action.payload;
    // },

    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    showSearching: (state) => {
      state.searching = !state.searching;
    },

    showMobileMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
      const body = document.querySelector('body');
      body.style.overflow = state.mobileMenu ? 'hidden' : 'unset';
    },
  },
});

export const { switchDarkMode, showSearching, showMobileMenu } =
  navigationSlice.actions;

export default navigationSlice.reducer;

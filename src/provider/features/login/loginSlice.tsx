import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignin: true,
  isLogged: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    changeSignin: (state) => {
      state.isSignin = !state.isSignin;
    },

    setLogin: (state) => {
      state.isLogged = true;
    },

    setLogout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { changeSignin, setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;

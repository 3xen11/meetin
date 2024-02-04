import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignin: true,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    changeSignin: (state) => {
      state.isSignin = !state.isSignin;
    },
  },
});

export const { changeSignin } = loginSlice.actions;

export default loginSlice.reducer;

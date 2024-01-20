import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventsCardsDisplay: true,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,

  reducers: {
    switchEventRoomsDisplay: (state) => {
      state.eventsCardsDisplay = !state.eventsCardsDisplay;
    },
  },
});

export const { switchEventRoomsDisplay } = eventsSlice.actions;

export default eventsSlice.reducer;

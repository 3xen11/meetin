import { createSlice } from '@reduxjs/toolkit';
import roomsData from '@/data/roomsData';

const initialState = {
  eventsCardsDisplay: true,
  roomsData: roomsData,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,

  reducers: {
    switchEventRoomsDisplay: (state) => {
      state.eventsCardsDisplay = !state.eventsCardsDisplay;
    },
    toggleFavoriteButton: (state, action) => {
      const { id } = action.payload;
      console.log(id);

      state.roomsData.forEach((room) => {
        if (room.id === id) {
          return { ...state.roomsData, favorite: !room.favorite };
        }
      });
    },
  },
});

export const { switchEventRoomsDisplay, toggleFavoriteButton } =
  eventsSlice.actions;

export default eventsSlice.reducer;

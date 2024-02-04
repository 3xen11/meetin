import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigation/navigationSlice';
import eventsReducer from '../features/events/eventsSlice';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    events: eventsReducer,
    login: loginReducer,
  },
});

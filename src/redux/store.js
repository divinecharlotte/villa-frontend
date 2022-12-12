/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { reservationReducer } from './reservations/reservations';
import { userReducer } from './user/user';

const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    user: userReducer,
  },
});

export default store;

// /* eslint-disable import/no-named-as-default */
// /* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import authenticateSlice from '../authenticateSlice';

// export const store = configureStore({
//   reducer: {
//     authforms: authenticateSlice,

//   },

// });
// import React from 'react'

const Store = configureStore({
  reducer: {
    authforms: authenticateSlice,

  },
});

export default Store;

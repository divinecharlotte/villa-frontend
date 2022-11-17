// /* eslint-disable import/no-named-as-default */
// /* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import authenticateSlice from '../authenticateSlice';

const Store = configureStore({
  reducer: {
    authforms: authenticateSlice,

  },
});

export default Store;

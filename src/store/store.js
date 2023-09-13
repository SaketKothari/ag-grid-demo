import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from '../slices/tabsSlice';

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});

export default store;

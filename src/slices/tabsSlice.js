// tabsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabs: [
      {
        text: 'Code',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
        isVisible: true,
      },
      {
        text: 'About',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
        isVisible: true,
      },
      {
        text: 'Contact',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
        isVisible: true,
      },
    ],
    activeTab: 0,
  },
  reducers: {
    addTab: (state, action) => {
      state.tabs.push(action.payload);
    },
    removeTab: (state, action) => {
      state.tabs.splice(action.payload, 1);
      state.activeTab = state.tabs.length > 0 ? 0 : -1;
    },
    toggleTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { addTab, removeTab, toggleTab } = tabsSlice.actions;
export default tabsSlice.reducer;

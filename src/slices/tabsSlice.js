// tabsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabs: [
      {
        text: 'Code',
        contentFromAPI: false,
        content: '1',
        isVisible: true,
        data: {
          userId: null,
          body: null,
        },
      },
      {
        text: 'About',
        contentFromAPI: false,
        content: '12',
        isVisible: true,
        data: {
          userId: null,
          body: null,
        },
      },
      {
        text: 'Contact',
        contentFromAPI: false,
        content: '123',
        isVisible: true,
        data: {
          userId: null,
          body: null,
        },
      },
    ],
    activeTab: -1,
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
    updateTabContent: (state, action) => {
      const { index, data } = action.payload;
      state.tabs[index].data.userId = data.userId;
      state.tabs[index].data.body = data.body;
      state.tabs[index].contentFromAPI = true;
    },
  },
});

export const { addTab, removeTab, toggleTab, updateTabContent } =
  tabsSlice.actions;
export default tabsSlice.reducer;

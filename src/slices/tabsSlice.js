import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabs: [
      {
        text: 'Code',
        content: '1',
        isVisible: true,
      },
      {
        text: 'About',
        content: '12',
        isVisible: true,
        data: {
          userId: null,
          body: null,
        },
      },
      {
        text: 'Contact',
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
    removeTab: (state, action) => {
      state.tabs.splice(action.payload, 1);
      state.activeTab = state.tabs.length > 0 ? 0 : -1;
    },
    toggleTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { removeTab, toggleTab } = tabsSlice.actions;
export default tabsSlice.reducer;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabState } from './tabTypes';

const getActiveTabFromLocalStorage = (key: string, defaultValue: number) => {
  const savedTab = localStorage.getItem(key);
  return savedTab ? parseInt(savedTab, 10) : defaultValue;
};

const initialState: TabState = {
  parentTab: getActiveTabFromLocalStorage('parentTab', 0), // Default to 'PayIns'
  activeTab: getActiveTabFromLocalStorage('activeTab', 0), // Default to first child tab
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<number>) {
      state.activeTab = action.payload;
      localStorage.setItem('activeTab', action.payload.toString());
    },
    setParentTab(state, action: PayloadAction<number>) {
      state.parentTab = action.payload;
      localStorage.setItem('parentTab', action.payload.toString());
    },
  },
});

export const { setActiveTab, setParentTab } = tabSlice.actions;
export default tabSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataEntryState } from './dataEntryTypes';

const initialState: DataEntryState = {
  bankResponse: [],
  checkUtrHistory: [],
  totalCount: 0,
};

const dataEntrySlice = createSlice({
  name: 'dataEntry',
  initialState,
  reducers: {
    // Replace entire bankResponse list
    getBankResponses: (state, action: PayloadAction<DataEntryState>) => {
      state.bankResponse = action.payload.bankResponse;
      state.totalCount = action.payload.totalCount;
    },

    // Replace entire checkUtrHistory list
    getCheckUtrHistories: (state, action: PayloadAction<DataEntryState>) => {
      state.checkUtrHistory = action.payload.checkUtrHistory;
      state.totalCount = action.payload.totalCount;
    },
  },
});

// Export actions to use in components
export const { getBankResponses, getCheckUtrHistories } =
  dataEntrySlice.actions;

// Export reducer to use in store
export default dataEntrySlice.reducer;

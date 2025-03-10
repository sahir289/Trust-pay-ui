import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataEntryState } from './dataEntryTypes';

const initialState: DataEntryState = {
  bankResponse: [],
  checkUtrHistory: [],
  totalCount: 0,
  loading: false,
  error: null,
  refreshDataEntries: false,
};

const dataEntrySlice = createSlice({
  name: 'dataEntry',
  initialState,
  reducers: {
    getBankResponses: (state, action: PayloadAction<DataEntryState>) => {
      state.bankResponse = action.payload?.bankResponse;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.error = null;
    },
    getCheckUtrHistories: (state, action: PayloadAction<DataEntryState>) => {
      state.checkUtrHistory = action.payload?.checkUtrHistory;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    setRefreshDataEntries: (state, action) => {
      state.refreshDataEntries = action.payload;
    },
  },
});

export const {
  getBankResponses,
  getCheckUtrHistories,
  onload,
  setRefreshDataEntries
} = dataEntrySlice.actions;

export default dataEntrySlice.reducer;

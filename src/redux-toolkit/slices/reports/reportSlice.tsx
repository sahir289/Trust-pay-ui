import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reports, ReportState } from "./reportTypes";

//reducer

const initialState: ReportState = {
  token: null,
  isAuthenticated: false,
  reports: [],
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    getMerchantReports: (state, action: PayloadAction<Reports[]>) => {
      state.reports = action.payload;
    },
  },
});

export const { getMerchantReports } = reportSlice.actions;
export default reportSlice.reducer;

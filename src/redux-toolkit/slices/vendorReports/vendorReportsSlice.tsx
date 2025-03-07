/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VendorReports, VendorReportState } from "./vendorReportTypes";

//reducer

const initialState: VendorReportState = {
  token: null,
  isAuthenticated: false,
  reports: [],
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    getVendorReportsSlice: (state, action: PayloadAction<VendorReports[]>) => {
      state.reports = action.payload;
    },
  },
});

export const { getVendorReportsSlice } = reportSlice.actions;
export default reportSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reports, ReportState, VendorReports } from "./reportTypes";

// Reducer
const initialState: ReportState = {
  token: null,
  isAuthenticated: false,
  reports: [],
  loading: false,
  error: null,
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    getMerchantReports: (state, action: PayloadAction<Reports[]>) => {
      state.reports = action.payload;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
const vendorReportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    getVendorReportsSlice: (state, action: PayloadAction<VendorReports[]>) => {
      state.reports = action.payload;
    },
  },
});


export const { getMerchantReports, onload, setError } = reportSlice.actions;
export const {  getVendorReportsSlice } = vendorReportSlice.actions;

export default reportSlice.reducer;

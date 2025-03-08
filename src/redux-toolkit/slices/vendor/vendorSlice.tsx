/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vendor, VendorState } from "./vendorTypes";

// Reducer
const initialState: VendorState = {
  token: null,
  isAuthenticated: false,
  vendors: [],
  loading: false,
  error: null,
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    getVendorsSlice: (state, action: PayloadAction<Vendor[]>) => {
      state.vendors = action.payload;
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

export const { getVendorsSlice, onload, setError } = vendorSlice.actions;
export default vendorSlice.reducer;

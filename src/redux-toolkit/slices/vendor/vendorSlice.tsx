/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vendor, VendorState } from "./vendorTypes";

//reducer

const initialState: VendorState = {
  token: null,
  isAuthenticated: false,
  vendors: [],
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    getVendorsSlice: (state, action: PayloadAction<Vendor[]>) => {
      state.vendors = action.payload;
    },
  },
});

export const { getVendorsSlice } = vendorSlice.actions;
export default vendorSlice.reducer;

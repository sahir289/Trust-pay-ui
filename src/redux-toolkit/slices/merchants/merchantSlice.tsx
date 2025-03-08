import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant, MerchantState } from "./merchantTypes";

const initialState: MerchantState = {
  token: null,
  isAuthenticated: false,
  merchants: [],
  loading: false,
  error: null,
};

const merchantSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {
    getMerchants: (state, action: PayloadAction<Merchant[]>) => {
      state.merchants = action.payload;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    addMerchant: (state, action: PayloadAction<Merchant>) => {
      state.merchants.push(action.payload);
    },
    updateMerchant: (state, action: PayloadAction<Merchant>) => {
      const updatedMerchant = action.payload;
      const index = state.merchants.findIndex((merchant) => merchant.id === updatedMerchant.id);
      if (index !== -1) {
        state.merchants[index] = updatedMerchant;
      }
    },
    deleteMercHantData: (state, action: PayloadAction<string>) => {
      console.log(action.payload, "action.payload");
      const merchantId = action.payload;
      state.merchants = state.merchants.filter((merchant) => merchant.id !== merchantId);
    },
  },
});

export const { getMerchants, addMerchant, updateMerchant, deleteMercHantData, onload } = merchantSlice.actions;
export default merchantSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Merchant, MerchantState } from "./merchantTypes";

const initialState: MerchantState = {
  token: null,
  isAuthenticated: false,
  users: [],
};

const merchantSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    getMerchants: (state, action: PayloadAction<Merchant[]>) => {
      state.users = action.payload;
    },
    addMerchant: (state, action: PayloadAction<Merchant>) => {
      state.users.push(action.payload);
    },
    updateMerchant: (state, action: PayloadAction<Merchant>) => {
      const updatedMerchant = action.payload;
      const index = state.users.findIndex(
        (user) => user.id === updatedMerchant.id,
      );
      if (index !== -1) {
        state.users[index] = updatedMerchant;
      }
    },
    deleteMerchant: (state, action: PayloadAction<Merchant>) => {
      const updatedMerchant = action.payload;
      const index = state.users.findIndex(
        (user) => user.id === updatedMerchant.id,
      );
      if (index !== -1) {
        state.users[index] = updatedMerchant;
      }
    },
  },
});

export const { getMerchants, addMerchant, updateMerchant,deleteMerchant } = merchantSlice.actions;
export default merchantSlice.reducer;

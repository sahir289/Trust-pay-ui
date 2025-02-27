import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payin, PayinState } from "./payinTypes";

const initialState: PayinState = {
  payin: [],
};

const payinSlice = createSlice({
  name: "payin",
  initialState,
  reducers: {
    // Replace entire payin list
    getPayins: (state, action: PayloadAction<Payin[]>) => {
      state.payin = action.payload;
    },

    // Update amount for a specific payin
    updateAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.amount = action.payload.amount;
      }
    },

    // Update status for a specific payin
    updateStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.status = action.payload.status;
      }
    },

    // Update is_notified flag for a specific payin
    updateIsNotified: (state, action: PayloadAction<{ id: string; is_notified: boolean }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.is_notified = action.payload.is_notified;
      }
    },
  },
});

// Export actions to use in components
export const { getPayins, updateAmount, updateStatus, updateIsNotified } = payinSlice.actions;

// Export reducer to use in store
export default payinSlice.reducer;

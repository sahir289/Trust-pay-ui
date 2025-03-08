import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayOutState } from "./payoutTypes";

const initialState: PayOutState = {
  payout: [],
  totalCount: 0,
};

const payoutSlice = createSlice({
  name: "payout",
  initialState,
  reducers: {
    // Replace entire payout list
    getPayOuts: (state, action: PayloadAction<PayOutState>) => {
      state.payout = action.payload.payout;
      state.totalCount = action.payload.totalCount;
    },

    // Update amount for a specific payout
    updateAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const payout = state.payout.find((p) => p.id === action.payload.id);
      if (payout) {
        payout.amount = action.payload.amount;
      }
    },

    // Update status for a specific payout
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const payout = state.payout.find((p) => p.id === action.payload.id);
      if (payout) {
        payout.status = action.payload.status;
      }
    },
  },
});

// Export actions to use in components
export const { getPayOuts, updateAmount, updateStatus } =
  payoutSlice.actions;

// Export reducer to use in store
export default payoutSlice.reducer;

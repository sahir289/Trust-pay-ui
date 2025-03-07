import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayOut, PayOutState } from "./payoutTypes";

const initialState: PayOutState = {
  payout: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const payoutSlice = createSlice({
  name: "payout",
  initialState,
  reducers: {
    getPayOuts: (state, action: PayloadAction<PayOut[]>) => {
      state.payout = action.payload;
      state.totalCount = action.payload.length;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    addPayOut: (state, action: PayloadAction<PayOut>) => {
      state.payout.push(action.payload);
      state.totalCount++;
    },
    updateAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const payout = state.payout.find((p) => p.id === action.payload.id);
      if (payout) {
        payout.amount = action.payload.amount;
      }
    },
    updateStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const payout = state.payout.find((p) => p.id === action.payload.id);
      if (payout) {
        payout.status = action.payload.status;
      }
    },
  },
});

export const { getPayOuts, onload, addPayOut, updateAmount, updateStatus } = payoutSlice.actions;
export default payoutSlice.reducer;

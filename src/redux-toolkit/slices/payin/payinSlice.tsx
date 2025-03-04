import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayInState } from "./payinTypes";

const initialState: PayInState = {
  payin: [],
  totalCount: 0,
};

const payinSlice = createSlice({
  name: "payin",
  initialState,
  reducers: {
    // Replace entire payin list
    getPayIns: (state, action: PayloadAction<PayInState>) => {
      state.payin = action.payload.payin;
      state.totalCount = action.payload.totalCount;
    },

    // Update amount for a specific payin
    updateAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.amount = action.payload.amount;
      }
    },

    // Update status for a specific payin
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.status = action.payload.status;
      }
    },

    // Update is_notified flag for a specific payin
    updateIsNotified: (
      state,
      action: PayloadAction<{ id: string; is_notified: boolean }>
    ) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.is_notified = action.payload.is_notified;
      }
    },
  },
});

// Export actions to use in components
export const { getPayIns, updateAmount, updateStatus, updateIsNotified } =
  payinSlice.actions;

// Export reducer to use in store
export default payinSlice.reducer;

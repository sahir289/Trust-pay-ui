import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettlementState } from "./settlementTypes";

const initialState: SettlementState = {
  settlement: [],
  totalCount: 0,
};

const settlementSlice = createSlice({
  name: "settlement",
  initialState,
  reducers: {
    // Replace entire settlement list
    getSettlements: (state, action: PayloadAction<SettlementState>) => {
      state.settlement = action.payload.settlement;
      state.totalCount = action.payload.totalCount;
    },

    // Update amount for a specific settlement
    updateAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const settlement = state.settlement.find((p) => p.id === action.payload.id);
      if (settlement) {
        settlement.amount = action.payload.amount;
      }
    },

    // Update status for a specific settlement
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const settlement = state.settlement.find((p) => p.id === action.payload.id);
      if (settlement) {
        settlement.status = action.payload.status;
      }
    },
  },
});

// Export actions to use in components
export const { getSettlements, updateAmount, updateStatus } =
  settlementSlice.actions;

// Export reducer to use in store
export default settlementSlice.reducer;

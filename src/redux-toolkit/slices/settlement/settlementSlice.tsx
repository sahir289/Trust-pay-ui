import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Settlement, SettlementState } from "./settlementTypes";

const initialState: SettlementState = {
  settlement: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const settlementSlice = createSlice({
  name: "settlement",
  initialState,
  reducers: {
    getSettlements: (state, action: PayloadAction<Settlement[]>) => {
      state.settlement = action.payload;
      state.totalCount = action.payload.length;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    addSettlement: (state, action: PayloadAction<Settlement>) => {
      state.settlement.push(action.payload);
      state.totalCount++;
    },
    updateAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const settlement = state.settlement.find((p) => p.id === action.payload.id);
      if (settlement) {
        settlement.amount = action.payload.amount;
      }
    },
    updateStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const settlement = state.settlement.find((p) => p.id === action.payload.id);
      if (settlement) {
        settlement.status = action.payload.status;
      }
    },
  },
});

export const { getSettlements, onload, addSettlement, updateAmount, updateStatus } = settlementSlice.actions;
export default settlementSlice.reducer;
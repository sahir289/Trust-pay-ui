import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayIn, PayInState } from "./payinTypes";

const initialState: PayInState = {
  payin: [],
  totalCount: 0,
  loading: false,
  error: null,
  refreshPayIn: false
};

const payinSlice = createSlice({
  name: "payin",
  initialState,
  reducers: {
    getPayIns: (state, action: PayloadAction<PayInState>) => {
      state.payin = action.payload.payin;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    addPayIn: (state, action: PayloadAction<PayIn>) => {
      state.payin.push(action.payload);
      state.totalCount++;
    },
    updateAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.amount = action.payload.amount;
      }
    },
    updateStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.status = action.payload.status;
      }
    },
    updateIsNotified: (state, action: PayloadAction<{ id: string; is_notified: boolean }>) => {
      const payin = state.payin.find((p) => p.id === action.payload.id);
      if (payin) {
        payin.is_notified = action.payload.is_notified;
      }
    },
    setRefreshPayIn: (state, action) => {
      state.refreshPayIn = action.payload;
    },
  },
});

export const { getPayIns, onload, addPayIn, updateAmount, updateStatus, updateIsNotified, setRefreshPayIn } = payinSlice.actions;
export default payinSlice.reducer;

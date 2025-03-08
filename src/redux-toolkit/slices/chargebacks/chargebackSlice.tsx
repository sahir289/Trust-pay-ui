/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chargeback, ChargebackState } from "./chargebackType";

const initialState: ChargebackState = {
  chargeback: [],
};

const userSlice = createSlice({
  name: "chargebacks",
  initialState,
  reducers: {
    getChargebacks: (state, action: PayloadAction<Chargeback[]>) => {
      state.chargeback = action.payload;
    },
    addChargebacks: (state, action: PayloadAction<Chargeback>) => {
      state.chargeback.push(action.payload);
    },
    updateChargebacks: (state, action: PayloadAction<Chargeback>) => {
      const updatedChargeback = action.payload;
      const index = state.chargeback.findIndex((chargeback) => chargeback.id === updatedChargeback.id);
      if (index !== -1) {
        state.chargeback[index] = updatedChargeback;
      }
    },
  },
});

export const { getChargebacks, addChargebacks, updateChargebacks } = userSlice.actions;
export default userSlice.reducer;

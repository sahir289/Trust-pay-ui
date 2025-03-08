import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bankDetails, bankDetailsState } from './bankDetailsTypes';

const initialState: bankDetailsState = {
  users: [],
};

const bankDetailSlice = createSlice({
  name: 'bankDetails',
  initialState,
  reducers: {
    getBankDetailsSlice: (state, action: PayloadAction<bankDetails[]>) => {
      state.users = action.payload;
    },
    addBankDetailSlice: (state, action: PayloadAction<bankDetails>) => {
      state.users.push(action.payload);
    },
    updateBankDetailSlice: (state, action: PayloadAction<bankDetails>) => {
      const updatedBankDetail = action.payload;
      const index = state.users.findIndex(
        (user) => user.id === updatedBankDetail.id,
      );
      if (index !== -1) {
        state.users[index] = updatedBankDetail;
      }
    },
    deleteBankDetailSlice: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  getBankDetailsSlice,
  addBankDetailSlice,
  updateBankDetailSlice,
  deleteBankDetailSlice,
} = bankDetailSlice.actions;
export default bankDetailSlice.reducer;

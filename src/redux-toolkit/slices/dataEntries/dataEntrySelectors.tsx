/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from '../../store/store';

// Select the entire list of bankResponses
export const getAllBankResponseData = (state: RootState) =>
  state.dataEntries;

// Select a specific bankResponse by ID
export const getBankResponseById = (id: string) => (state: RootState) =>
  state.dataEntries.bankResponse.find((p) => p.id === id);

// Select the entire list of checkUtrHistories
export const getAllCheckUtrHistoryData = (state: RootState) =>
  state?.dataEntries;

// Select a specific checkUtrHistory by ID
export const getCheckUtrHistoryById = (id: string) => (state: RootState) => {
  if (state?.dataEntries?.checkUtrHistory) {
    return state.dataEntries.checkUtrHistory.find((p) => p.id === id);
  }
  return undefined;
};

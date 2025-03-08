import { RootState } from '../../store/store';
import { bankDetails } from './bankDetailsTypes';

// Select all bank details from the store
export const selectAllBankDetails = (state: RootState): bankDetails[] =>
  state.bankDetails.users;
// Select a single bank detail by ID
export const selectBankDetailsById = (
  state: RootState,
  bankId: string,
): bankDetails | undefined =>
  state.bankDetails.users.find((user) => user.id === bankId);

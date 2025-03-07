import { RootState } from "../../store/store";
import { Merchant } from "./merchantTypes";

export const selectAllMerchants = (state: RootState): Merchant[] => state.merchant.users
export const selectMerchantById = (state: RootState, merchantId: string): Merchant | undefined =>state.merchant.users.find((merchant) => merchant.id === merchantId);
// export const selectMerchantsCount = (state: RootState): number => state.merchant.length;
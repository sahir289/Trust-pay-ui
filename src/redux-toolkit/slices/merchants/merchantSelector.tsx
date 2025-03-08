/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from "../../store/store";
import { Merchant } from "./merchantTypes";

export const selectAllMerchants = (state: RootState): Merchant[] => state.merchant.merchants
export const selectAllMerchantCodes = (state: RootState) => state.merchant.merchantCodes
export const selectMerchantById = (state: RootState, merchantId: string): Merchant | undefined =>state.merchant.merchants.find((merchant) => merchant.id === merchantId);
// export const selectMerchantsCount = (state: RootState): number => state.merchant.length;
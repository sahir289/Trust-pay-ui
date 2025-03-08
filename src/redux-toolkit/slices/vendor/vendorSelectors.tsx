import { RootState } from "../../store/store";
import { Vendor } from "./vendorTypes";

//Selectors help fetch specific data from the store.

export const selectVendors = (state: RootState): Vendor[] => state.vendors.vendors
// export const selectUserById = (state: RootState, vendorId: string): Vendor | undefined =>
//   state.vendors.vendors.find((vendors) => vendors.id === vendorId);
// export const selectUserById = (state: RootState, vendorId: string): Vendor | undefined =>
//   state.vendors.vendors.find((vendors) => vendors.id === vendorId);
export const selectUserById = (state: RootState, userId: string): Vendor | undefined =>
  state.vendors.vendors.find((vendor: { id: string; }) => vendor.id === userId);

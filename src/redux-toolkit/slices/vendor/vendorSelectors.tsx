import { RootState } from "../../store/store";
import { Vendor } from "./vendorTypes";

//Selectors help fetch specific data from the store.

export const selectVendors = (state: RootState): Vendor[] => state.vendors.vendors

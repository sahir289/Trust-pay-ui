import { RootState } from "../../store/store";
import { Reports } from "./reportTypes";
import { VendorReports } from "./reportTypes";

//Selectors help fetch specific data from the store.

export const selectReports = (state: RootState): Reports[] => state.report.reports
export const selectVendorReports = (state: RootState): VendorReports[] => state.report.reports

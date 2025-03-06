import { RootState } from "../../store/store";
import { VendorReports } from "./vendorReportTypes";

//Selectors help fetch specific data from the store.

export const selectReports = (state: RootState): VendorReports[] => state.vendorReport.reports

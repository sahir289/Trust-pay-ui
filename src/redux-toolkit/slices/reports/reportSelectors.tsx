import { RootState } from "../../store/store";
import { Reports } from "./reportTypes";

//Selectors help fetch specific data from the store.

export const selectReports = (state: RootState): Reports[] => state.report.reports

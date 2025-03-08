/* eslint-disable no-unused-vars */
import api from "../../services/api"; 
import { ApiVendorReportsResponse, VendorReports } from "./vendorReportTypes";
//Actions are functions that dispatch payloads to the reducer(userSlice.ts)
//all apis called

export const getVendorReports = async (_p0?: string): Promise<VendorReports[]> => {
    try {
      const response = await api.get<ApiVendorReportsResponse<VendorReports[]>> (`/reports/get-vendors-reports`);
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch merchant report:", error);
      throw error;
    }
  };


//   export const getSelectedMerchantsReports = async (
//     merchantCode: string,
//     startDate: string,  // Use ISO date string format
//     endDate: string
//   ): Promise<any[]> => {
//     try {
//       const response = await api.get<any[]>(
//         `/reports/get-merchants-reports?code=${encodeURIComponent(merchantCode)}&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Failed to fetch merchants reports:", error);
//       throw error;
//     }
//   };
  
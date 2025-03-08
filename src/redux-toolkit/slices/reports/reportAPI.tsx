/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../../services/api';
import { ApiReportsResponse, Reports } from './reportTypes';
//Actions are functions that dispatch payloads to the reducer(userSlice.ts)
//all apis called

export const getMerchantsReports = async (_p0?: string): Promise<Reports[]> => {
  try {
    const response = await api.get<ApiReportsResponse<Reports[]>>(
      `/reports/get-merchants-reports`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch merchant report:', error);
    throw error;
  }
};

export const getSelectedMerchantsReports = async (
  merchantCode: string,
  startDate: string, // Use ISO date string format
  endDate: string,
): Promise<any[]> => {
  try {
    const response = await api.get<any[]>(
      `/reports/get-merchants-reports?code=${encodeURIComponent(
        merchantCode,
      )}&startDate=${encodeURIComponent(
        startDate,
      )}&endDate=${encodeURIComponent(endDate)}`,
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch merchants reports:', error);
    throw error;
  }
};

/* eslint-disable no-unused-vars */
import api from '../../services/api';
import { ApiVendorResponse, Vendor } from './vendorTypes';

export const getAllVendor = async (_p0?: string): Promise<Vendor[]> => {
  try {
    const response = await api.get<ApiVendorResponse<Vendor[]>>(`/vendors`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const createVendor = async (vendorData: {
  first_name?: string;
  last_name?: string;
  balance?: number;
  payin_commission?: string;
  payout_commission?: string;
}): Promise<Vendor> => {
  try {
    const response = await api.post<Vendor>(`/vendors/create-vendor`, vendorData);
    return response.data;
  } catch (error) {
    console.error("Failed to create vendor:", error);
    throw error;
  }
};

export const updateVendor = async (
  id: {id?: string},
  vendorData: {
  first_name?: string;
  last_name?: string;
  balance?: number;
  payin_commission?: string;
  payout_commission?: string;
}): Promise<Vendor> => {
  try {
    const response = await api.put<Vendor>(`/vendors/update-vendor/${id}`, vendorData);
    return response.data;
  } catch (error) {
    console.error("Failed to create vendor:", error);
    throw error;
  }
};

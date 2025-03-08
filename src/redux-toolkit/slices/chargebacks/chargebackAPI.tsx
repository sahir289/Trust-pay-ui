import api from "../../services/api";
import { ApiChargebackResponse, Chargeback } from "./chargebackType";

export const getChargebacks = async (_p0?: string): Promise<Chargeback[]> => {
  try {
    const response = await api.get<ApiChargebackResponse<Chargeback[]>>(`/chargeBacks`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}
export const getChargebackById = async (id: string): Promise<Chargeback[]> => {
  try {
    const response = await api.get<ApiChargebackResponse<Chargeback[]>>(`/chargeBacks/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
export const createChargeback = async (chargebackData: {
  merchant_user_id?: string;
  vendor_user_id?: string;
  payin_id?: string;
  bank_acc_id?: string;
  amount?: string;
  when?: string;
}): Promise<Chargeback> => {
  try {
    const response = await api.post<Chargeback>(`/chargeBacks/create-chargeback`, chargebackData);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const updateChargeback = async (
  id: { id?: string },
  chargebackData: {
    merchant_user_id?: string;
    vendor_user_id?: string;
    payin_id?: string;
    bank_acc_id?: string;
    amount?: string;
    when?: string;
  }): Promise<Chargeback>=>{
    try {
      const response = await api.put<Chargeback>(`/chargeBacks/update-chargeback/${id}`, chargebackData);
      return response.data;
    } catch (error) {
      console.error("Failed to create vendor:", error);
      throw error;
    }
  }

  export const deleteChargeback = async (
    id: { id?: string },
    ): Promise<Chargeback>=>{
      try {
        const response = await api.delete<Chargeback>(`/chargeBacks/update-chargeback/${id}`);
        return response.data;
      } catch (error) {
        console.error("Failed to create vendor:", error);
        throw error;
      }
    }
  
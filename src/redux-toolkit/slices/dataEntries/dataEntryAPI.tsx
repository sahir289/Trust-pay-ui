/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllBankResponses = async (queryString: string) => {
  const response = await api.get(`/bankResponses?${queryString}`);
  return response.data;
};

export const getAllCheckUtrHistories = async (queryString: string) => {
  const response = await api.get(`/checkUtrHistory?${queryString}`);
  return response.data;
};
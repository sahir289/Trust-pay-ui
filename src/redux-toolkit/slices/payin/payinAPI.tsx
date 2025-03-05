/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllPayIns = async (queryString: string) => {
  const response = await api.get(`/payIn?${queryString}`);
  return response.data;
};

export const updatePayIns = async (url: string, data: any = {}) => {
  const response = await api.put(`/payIn/${url}`, data);
  return response.data;
};

export const createPayIns = async (url: string, data: any = {}) => {
  const response = await api.post(`/payIn/${url}`, data);
  return response.data;
};

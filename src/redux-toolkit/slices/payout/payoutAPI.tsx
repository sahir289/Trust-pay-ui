/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllPayOuts = async (queryString: string) => {
  const response = await api.get(`/payout?${queryString}`);
  return response.data;
};
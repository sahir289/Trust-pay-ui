/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllSettlements = async (queryString: string) => {
  const response = await api.get(`/settlement?${queryString}`);
  return response.data;
};
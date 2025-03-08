

import { RootState } from "../../store/store";

export const selectChargeback = (state: RootState) => state.chargeback;
export const selectChargebackById = (id: string) => (state: RootState) =>
  state.chargeback.chargeback.find((p: { id: string; }) => p.id === id);

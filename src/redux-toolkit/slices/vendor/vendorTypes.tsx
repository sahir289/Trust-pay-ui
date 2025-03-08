export interface Vendor {
  id: string;
  role_id: number;
  user_id: string;
  first_name: number;
  last_name: number;
  code: string;
  payin_commission: string;
  payout_commission: string;
  balance: string;
  created_by: string;
  updated_by : string;
  config: object;
  created_at: string;
  updated_at : string;
  designation_id : string;
  designation_name: string;
}

export interface ApiVendorResponse<T> {
  data: T;
  message?: string;
  status?: string;
}
export interface VendorState {
  vendors: Vendor[];
  loading: boolean;
  error: string | null;
}
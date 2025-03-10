export interface Merchant {
  id: string;
  role_id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  code: string;
  min_payin: number;
  max_payin: number;
  payin_commission: number;
  min_payout: number;
  max_payout: number;
  payout_commission: number;
  is_test_mode: boolean;
  is_enabled: boolean;
  dispute_enabled: boolean;
  is_demo: boolean;
  balance: number;
  config: {
    keys: {
      secret: string;
      public: string;
    };
    urls: {
      site: string;
      return: string;
      payin_notify: string;
      payout_notify: string;
    };
  };
  created_by: string;
  updated_by: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  designation_id: string;
  full_name: string;
  designation_name: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

export interface MerchantCodes {
  value: string;
  label: string;
}
export interface MerchantState {
  token: string | null;
  isAuthenticated: boolean;
  merchants: Merchant[];
  merchantCodes: MerchantCodes[];
  loading: boolean;
  error: string | null;
}

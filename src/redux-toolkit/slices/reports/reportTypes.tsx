export interface Reports {
  id: string;
  user_id: string;
  total_payin_count: number;
  total_payin_amount: number;
  total_payin_commission: number;
  total_payout_count: number;
  total_payout_amount: number;
  total_payout_commission: number;
  total_settlement_count: number;
  total_settlement_amount: number;
  total_chargeback_count: number;
  total_chargeback_amount: number;
  current_balance: number;
  net_balance: number;
  created_at: number;
  updated_at: number;
  code: string;
  calculation_user_id: string

}

export interface VendorReports {
  id: string;
  user_id: string;
  total_payin_count: number;
  total_payin_amount: number;
  total_payin_commission: number;
  total_payout_count: number;
  total_payout_amount: number;
  total_payout_commission: number;
  total_settlement_count: number;
  total_settlement_amount: number;
  total_chargeback_count: number;
  total_chargeback_amount: number;
  current_balance: number;
  net_balance: number;
  created_at: number;
  updated_at: number;
  code: string;
  calculation_user_id: string

}

export interface ReportState {
  token: string | null;
  isAuthenticated: boolean;
  reports: Reports[];
  loading: boolean;
  error: string | null;
}
export interface ApiReportsResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

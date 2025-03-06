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
  
  export interface VendorReportState {
    token: string | null;
    isAuthenticated: boolean;
    reports: VendorReports[];
  }
  
  export interface ApiVendorReportsResponse<T> {
    data: T;
    message?: string;
    status?: string;
  }
  
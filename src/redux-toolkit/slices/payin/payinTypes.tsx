/* eslint-disable @typescript-eslint/no-explicit-any */
interface BankResponse {
  amount: number | null;
  utr: string | null;
}

export interface Payin {
  id: string | null;
  sno: string | null;
  upi_short_code: string | null;
  amount: number | null;
  status: string | null;
  is_notified: boolean;
  user_submitted_utr: string | null;
  merchant_order_id: string | null;
  user: string | null;
  bank_acc_id: string | null;
  merchant_id: string | null;
  bank_response_id: string | null;
  bank_account: any; // Define as needed
  merchant: any;  // Define as needed
  vendor: any;  // Define as needed
  bank_response: BankResponse;
  payin_merchant_commission: number | null;
  payin_vendor_commission: number | null;
  user_submitted_image: string | null;
  duration: number | null;
  approved_at: string | null;
  failed_at: string | null;
  config: any;  // Define as needed
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface PayinState {
  payin: Payin[],
}


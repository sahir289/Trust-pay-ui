export interface BankResponse {
  id: string | null;
  sno: number | null; // Updated from string to number
  upi_short_code: string | null;
  amount: number | null;
  status: string;
  nick_name: string | null;
  utr: string | null;
  is_used: boolean;
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface PayInDetails {
  merchant_order_id: string | null;
  status: string;
}

export interface CheckUtrHistory {
  id: string | null;
  sno: number | null;
  payin_details: PayInDetails;
  utr: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface DataEntryState {
  bankResponse: BankResponse[];
  checkUtrHistory?: CheckUtrHistory[];
  totalCount: number;
}

// export interface ResetHistory {
//   id: string | null;
//   sno: number | null; // Updated from string to number
//   upi_short_code: string | null;
//   amount: number | null;
//   status: string;
//   nick_name: string | null;
//   utr: string | null;
//   is_used: boolean;
//   created_by: string | null;
//   updated_by: string | null;
//   created_at: string | null;
//   updated_at: string | null;
// }

// export interface ResetHistoryState {
//   resetHistory: ResetHistory[];
//   totalCount: number;
// }

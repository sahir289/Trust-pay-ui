interface SettlementDetails {
    acc_no: string | null;
    acc_holder_name: string | null;
    ifsc_code: string | null;
    bank_name: string | null;
    upi_id: string | null;
    utr_id: string | null;
}

export interface Settlement {
  id: string | null;
  sno: number | null;
  user: string | null;
  amount: number | null;
  status: string;
  settlement_details: SettlementDetails;
  approved_at: string | null;
  rejected_at?: string | null;
  rejected_reason?: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface SettlementState {
  settlement: Settlement[];
  totalCount: number;
  loading: boolean;
  error: string | null;
}

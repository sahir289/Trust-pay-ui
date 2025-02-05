import _ from "lodash";

export interface Payouts {
  id: string;
  action: string;
  merchantOrderId: string;
  merchant: string;
  bankDetails: string;
  amount: string;
  status: string;
  utrId: string;
  user: string;
  method: string;
  vendor: string;
  fromBank: string;
  payoutUuid: string;
  lastUpdated: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/users/*.{jpg,jpeg,png,svg}", { eager: true });

const fakersPayouts = {
  fakePayouts(): Array<Payouts> {
    const payouts: Payouts[] = [
      {
        id: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        action: "Processed",
        merchantOrderId: "MO123456",
        merchant: "ABC Pvt Ltd",
        bankDetails: "HDFC Bank - 1234567890",
        amount: "₹5,000",
        status: "Success",
        utrId: "UTR121212121212",
        user: "John Doe",
        method: "Bank Transfer",
        vendor: "Razorpay",
        fromBank: "ICICI Bank",
        payoutUuid: "PUUID123456",
        lastUpdated: "28/01/2025 at 05:01:23 PM",
      },
      {
        id: "2a34b5c6-1234-4bcd-9876-abcdef123456",
        action: "Pending",
        merchantOrderId: "MO987654",
        merchant: "XYZ Corp",
        bankDetails: "SBI - 9876543210",
        amount: "₹10,000",
        status: "Initiated",
        utrId: "UTR987654321012",
        user: "Alice Brown",
        method: "UPI",
        vendor: "PayU",
        fromBank: "HDFC Bank",
        payoutUuid: "PUUID987654",
        lastUpdated: "28/01/2025 at 06:15:00 PM",
      },
      {
        id: "3f45g6h7-5678-4efg-5432-bca987654321",
        action: "Failed",
        merchantOrderId: "MO654321",
        merchant: "LMN Industries",
        bankDetails: "Axis Bank - 1122334455",
        amount: "₹3,500",
        status: "Rejected",
        utrId: "UTR543212345678",
        user: "Robert Smith",
        method: "NEFT",
        vendor: "Paytm",
        fromBank: "Kotak Bank",
        payoutUuid: "PUUID654321",
        lastUpdated: "28/01/2025 at 07:20:45 PM",
      },
    ];

    return _.shuffle(payouts); // Randomize the order of payouts
  },
};

export default fakersPayouts;

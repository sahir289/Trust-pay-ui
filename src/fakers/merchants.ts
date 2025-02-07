import _ from "lodash";
export interface subMerchant {
  name: string;
  photo: string;

  code: string;
  site: string;
  apikey: string;
  public_api_key: string;
  balance: string;
  payin_range: string;
  payin_commission: string;
  payout_range: string;
  payout_commission: string;

  test_mode: string;
  allow_intent: string;
  created_at: string;
  actions: string;
}
export interface Merchant {
  name: string;
  photo: string;
  code: string;
  site: string;
  apikey: string;
  public_api_key: string;
  balance: string;
  payin_range: string;
  payin_commission: string;
  payout_range: string;
  payout_commission: string;
  test_mode: string;
  allow_intent: string;
  created_at: string;
  actions: string;
  submerchant: subMerchant[];
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/users/*.{jpg,jpeg,png,svg}", { eager: true });

const fakersMerchant = {
  fakeMerchants() {
    const merchants: Array<Merchant> = [
      {
        name: "Noah Centineo",
        photo: imageAssets["/src/assets/images/users/user1-50x50.jpg"].default,
        code: "tom",
        site: "https://NoahCentineo@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant: [
          {
            name: "Noah Centineo",
            photo: imageAssets["/src/assets/images/users/user1-50x50.jpg"].default,
            code: "tom",
            site: "https://heav@gmail.com",
            apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
            public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
            balance: "$0",
            payin_range: "$1 - $10",
            payin_commission: "$1 - $10",
            payout_range: "$1 - $10",
            payout_commission: "$1 - $10",
            test_mode: "",
            allow_intent: "",
            created_at: "28/01/2025 at 05:01:23 PM",
            actions: "",
          },
          {
            name: "Noah Centineo",
            photo: imageAssets["/src/assets/images/users/user1-50x50.jpg"].default,
            code: "tom",
            site: "https://heav@gmail.com",
            apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
            public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
            balance: "$0",
            payin_range: "$1 - $10",
            payin_commission: "$1 - $10",
            payout_range: "$1 - $10",
            payout_commission: "$1 - $10",
            test_mode: "",
            allow_intent: "",
            created_at: "28/01/2025 at 05:01:23 PM",
            actions: "",
          }

        ]
      },
      {
        name: "Meryl Streep",
        photo: imageAssets["/src/assets/images/users/user2-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Leonardo DiCaprio",
        photo: imageAssets["/src/assets/images/users/user3-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Angelina Jolie",
        photo: imageAssets["/src/assets/images/users/user4-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Brad Pitt",
        photo: imageAssets["/src/assets/images/users/user5-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Jennifer Lawrence",
        photo: imageAssets["/src/assets/images/users/user6-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Johnny Depp",
        photo: imageAssets["/src/assets/images/users/user7-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Cate Blanchett",
        photo: imageAssets["/src/assets/images/users/user8-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Denzel Washington",
        photo: imageAssets["/src/assets/images/users/user9-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
      {
        name: "Julia Roberts",
        photo: imageAssets["/src/assets/images/users/user10-50x50.jpg"].default,
        code: "tom",
        site: "https://heav@gmail.com",
        apikey: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        public_api_key: "1d54f8a4-7040-4e65-9254-ef55aa72efdc",
        balance: "₹0",
        payin_range: "₹1 - ₹10",
        payin_commission: "5%",
        payout_range: "₹1 - ₹10",
        payout_commission: "5%",
        test_mode: "",
        allow_intent: "",
        created_at: "28/01/2025 at 05:01:23 PM",
        actions: "",
        submerchant:[]
      },
    ];

    return (merchants);
  },
};

export default fakersMerchant;

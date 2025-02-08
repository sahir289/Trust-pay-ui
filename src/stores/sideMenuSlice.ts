import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "DASHBOARDS",
    {
      icon: "LayoutDashboard",
      pathname: "/layout/dashboard-overview-1",
      title: "Dashboard",
    },
    "TRANSACTIONS",
    {
      icon: "ArrowRightLeft",
      pathname: "/layout/transaction-list",
      title: "Transactions",
    },
    "SETTLEMENTS & CHARGEBACKS",
    {
      icon: "NotebookText",
      pathname: "/layout/settlement",
      title: "Settltemets",
    },
    {
      icon: "ArrowLeftCircle",
      pathname: "/layout/chargeback",
      title: "ChargeBacks",
    },
    "BANK ACCOUNTS",
    {
      icon: "Landmark",
      pathname: "/layout/bankaccounts",
      title: "Bank Accounts",
    },
    "USERS",
    {
      icon: "Users",
      pathname: "/layout/users",
      title: "Users",
    },
    {
      icon: "CreditCard",
      pathname: "/layout/merchants",
      title: "Merchants",
    },
    {
      icon: "Store",
      pathname: "/layout/vendors",
      title: "Vendors",
    },
    "ROLES & RESPONSIBILITIES",
    {
      icon: "CircleUserRound",
      pathname: "/layout/roles",
      title: "Roles",
    },
    {
      icon: "UserCog",
      pathname: "/layout/designation",
      title: "Designation",
    },
    "DATA ENTRIES",
    {
      icon: "FileText",
      pathname: "/layout/add-data",
      title: "Data Entries",
    },
    "ACCOUNT REPORTS",
    {
      icon: "SquareUser",
      pathname: "/layout/account-reports",
      title: "Account Report",
    },
    {
      icon: "SquareUser",
      pathname: "/layout/vendor-account-reports",
      title: "Vendor Account Report",
    },
    "CHAT SUPPORT",
    {
      icon: "MailOpen",
      pathname: "/layout/chat",
      title: "Chat",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;

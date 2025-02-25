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
    "USERS",
    {
      icon: "Users",
      pathname: "/layout/users",
      title: "Users",
    },
    "Clients",
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
    "REPORTS",
    {
      icon: "SquareUser",
      pathname: "/layout/reports",
      title: "Report",
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

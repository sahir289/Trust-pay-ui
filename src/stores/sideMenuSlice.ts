/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
      pathname: "/layout/dashboard",
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
    "BANK Details",
    {
      icon: "Landmark",
      pathname: "/layout/bankaccounts",
      title: "Bank Details",
    },
    "USERS",
    {
      icon: "Users",
      pathname: "/layout/users",
      title: "Users",
    },
    "CLIENTS",
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
    "ROLES & DESIGNATIONS",
    {
      icon: "CircleUserRound",
      pathname: "/layout/roles",
      title: "Roles",
    },
    {
      icon: "UserCog",
      pathname: "/layout/designation",
      title: "Designations",
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
    // "CHAT SUPPORT",
    // {
    //   icon: "MailOpen",
    //   pathname: "/layout/chat",
    //   title: "Chat",
    // },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;

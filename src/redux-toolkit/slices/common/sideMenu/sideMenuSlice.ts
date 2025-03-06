/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
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
      pathname: "/auth/dashboard",
      title: "Dashboard",
    },
    "TRANSACTIONS",
    {
      icon: "ArrowRightLeft",
      pathname: "/auth/transaction-list",
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
      pathname: "/auth/merchants",
      title: "Merchants",
    },
    {
      icon: "Store",
      pathname: "/auth/vendors",
      title: "Vendors",
    },
    "REPORTS",
    {
      icon: "SquareUser",
      pathname: "/auth/reports",
      title: "Reports",
    },
    "SETTLEMENTS & CHARGEBACKS",
    {
      icon: "NotebookText",
      pathname: "/auth/settlement",
      title: "Settlements",
    },
    {
      icon: "ArrowLeftCircle",
      pathname: "/auth/chargeback",
      title: "ChargeBacks",
    },
    "BANK Details",
    {
      icon: "Landmark",
      pathname: "/auth/bankaccounts",
      title: "Bank Details",
    },
    "USERS",
    {
      icon: "Users",
      pathname: "/auth/users",
      title: "Users",
    },
    "CLIENTS",
    {
      icon: "CreditCard",
      pathname: "/auth/merchants",
      title: "Merchants",
    },
    {
      icon: "Store",
      pathname: "/auth/vendors",
      title: "Vendors",
    },
    "ROLES & DESIGNATIONS",
    {
      icon: "CircleUserRound",
      pathname: "/auth/roles",
      title: "Roles",
    },
    {
      icon: "UserCog",
      pathname: "/auth/designation",
      title: "Designations",
    },
    "DATA ENTRIES",
    {
      icon: "FileText",
      pathname: "/auth/add-data",
      title: "Data Entries",
    },
    
    // "CHAT SUPPORT",
    // {
    //   icon: "MailOpen",
    //   pathname: "/auth/chat",
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

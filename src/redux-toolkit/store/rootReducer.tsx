import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlice";
import userReducer from "../slices/user/userSlice";
import themeReducer from "../slices/theme/themeSlice";
import payInReducer from "../slices/payin/payinSlice";
import payOutReducer from "../slices/payout/payoutSlice";
import settlementReducer from "../slices/settlement/settlementSlice";
import calculationsReducer from "../slices/calculations/calculationsSlice";
import dataEntriesReducer from "../slices/dataEntries/dataEntrySlice";
import roleReducer from "../slices/roles/roleSlice";
import designationReducer from '../slices/designations/designationSlice';
import paramsReducer from "../slices/common/params/paramsSlice";
import tabReducer from "../slices/common/tabs/tabSlice";
import darkModeReducer from "../slices/common/darkMode/darkModeSlice";
import colorSchemeReducer from "../slices/common/colorScheme/colorSchemeSlice";
import sideMenuReducer from "../slices/common/sideMenu/sideMenuSlice";
import compactMenuReducer from "../slices/common/compactMenu/compactMenuSlice";
import pageLoaderReducer from "../slices/common/pageLoader/pageLoaderSlice";
import merchantReducer from "../slices/merchants/merchantSlice"
import reportReducer from "../slices/reports/reportSlice";
import vendorReducer from "../slices/vendor/vendorSlice"
import chargebackReducer from "../slices/chargebacks/chargebackSlice"
//This file configures the Redux store.

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  report : reportReducer,
  vendors : vendorReducer ,
  payin: payInReducer,
  chargeback : chargebackReducer,
  payout: payOutReducer,
  settlement: settlementReducer,
  calculations: calculationsReducer,
  dataEntries: dataEntriesReducer,
  role: roleReducer,
  designation: designationReducer,
  params: paramsReducer,
  tab: tabReducer,
  theme: themeReducer,
  merchant: merchantReducer,
  darkMode: darkModeReducer,
  colorScheme: colorSchemeReducer,
  sideMenu: sideMenuReducer,
  compactMenu: compactMenuReducer,
  pageLoader: pageLoaderReducer,
});

export default rootReducer;

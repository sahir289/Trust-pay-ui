import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlice";
import userReducer from "../slices/user/userSlice";
import themeReducer from "../slices/theme/themeSlice";
import payInReducer from "../slices/payin/payinSlice";
import darkModeReducer from "../slices/common/darkMode/darkModeSlice";
import colorSchemeReducer from "../slices/common/colorScheme/colorSchemeSlice";
import sideMenuReducer from "../slices/common/sideMenu/sideMenuSlice";
import compactMenuReducer from "../slices/common/compactMenu/compactMenuSlice";
import pageLoaderReducer from "../slices/common/pageLoader/pageLoaderSlice";
import merchantReducer from "../slices/merchants/merchantSlice"
import reportReducer from "../slices/reports/reportSlice";
import vendorReportsReducer from "../slices/vendorReports/vendorReportsSlice"
import vendorReducer from "../slices/vendor/vendorSlice"
//This file configures the Redux store.

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  report : reportReducer,
  vendorReport : vendorReportsReducer, 
  vendors : vendorReducer ,
  payin: payInReducer,
  theme: themeReducer,
  merchant: merchantReducer,
  darkMode: darkModeReducer,
  colorScheme: colorSchemeReducer,
  sideMenu: sideMenuReducer,
  compactMenu: compactMenuReducer,
  pageLoader: pageLoaderReducer,
});

export default rootReducer;

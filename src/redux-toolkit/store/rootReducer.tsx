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
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
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

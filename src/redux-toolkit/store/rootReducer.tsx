import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlice";
import userReducer from "../slices/user/userSlice";
import themeReducer from "../slices/theme/themeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  theme: themeReducer,
//   darkMode: darkModeReducer,
//   colorScheme: colorSchemeReducer,
//   sideMenu: sideMenuReducer,
//   compactMenu: compactMenuReducer,
//   pageLoader: pageLoaderReducer,
});

export default rootReducer;

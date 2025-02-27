import ScrollToTop from "@/components/Base/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store/store";
import Router from "./router";
import "./assets/css/app.css";
import { AuthProvider } from "./components/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <Router />
      </AuthProvider>,
    </Provider>
    <ScrollToTop />
  </BrowserRouter>
);

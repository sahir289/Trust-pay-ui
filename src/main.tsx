import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store/store";
import Router from "./router";
import "./assets/css/app.css";
import ScrollToTop from "@/components/Base/ScrollToTop";
import { AuthProvider } from "./components/context/AuthContext";
import { SocketProvider } from "@/socket/socketContext"; // Import Socket Provider

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <AuthProvider>
        <SocketProvider>
          <Router />
        </SocketProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

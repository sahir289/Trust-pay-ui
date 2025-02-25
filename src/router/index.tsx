/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRoutes } from "react-router-dom";
// import { useAuth } from "../components/context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardOverview1 from "../pages/DashboardOverview1";
import Users from "../pages/Users";
import Vendors from "../pages/Vendors";
import Merchant from "../pages/Merchant";
import Roles from "../pages/Roles";
import VendorAccountReports from "../pages/VendorAccountReports";
import TransactionList from "../pages/TransactionList";
// import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Settlement from "../pages/Settlement";
import ChargeBack from "../pages/ChargeBack";
import AddData from "../pages/AddData";
import Designation from "../pages/Designation";
import Layout from "../themes";
import Bankaccount from "../pages/BankAccount";
import AccountReports from "@/pages/AccountReports";
import Unauthorized from "../pages/Unauthorized";
import { Role } from "@/constants";

function Router() {

  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "layout",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.MERCHANT_OPERATIONS, Role.VENDOR, Role.VENDOR_OPERATIONS]} />,
          children: [{ path: "", element: <DashboardOverview1 /> }],
        },
        {
          path: "vendors",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.VENDOR]} />,
          children: [{ path: "", element: <Vendors /> }],
        },
        {
          path: "users",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.MERCHANT_OPERATIONS, Role.VENDOR, Role.VENDOR_OPERATIONS]} />,
          children: [{ path: "", element: <Users /> }],
        },
        {
          path: "merchants",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT]} />,
          children: [{ path: "", element: <Merchant /> }],
        },
        {
          path: "vendor-account-reports",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.VENDOR]} />,
          children: [{ path: "", element: <VendorAccountReports /> }],
        },
        {
          path: "account-reports",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.VENDOR]} />,
          children: [{ path: "", element: <AccountReports /> }],
        },
        {
          path: "transaction-list",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.MERCHANT_OPERATIONS, Role.VENDOR, Role.VENDOR_OPERATIONS]} />,
          children: [{ path: "", element: <TransactionList /> }],
        },
        {
          path: "settlement",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.MERCHANT_OPERATIONS, Role.VENDOR, Role.VENDOR_OPERATIONS]} />,
          children: [{ path: "", element: <Settlement /> }],
        },
        {
          path: "chargeback",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.MERCHANT_ADMIN, Role.MERCHANT, Role.SUB_MERCHANT, Role.VENDOR]} />,
          children: [{ path: "", element: <ChargeBack /> }],
        },
        {
          path: "add-data",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS]} />,
          children: [{ path: "", element: <AddData /> }],
        },
        // {
        //   path: "chat",
        //   element: <Chat />
        // },
        {
          path: "bankaccounts",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TRANSACTIONS, Role.OPERATIONS, Role.VENDOR, Role.VENDOR_OPERATIONS]} />,
          children: [{ path: "", element: <Bankaccount /> }],
        },
        {
          path: "designation",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN]} />,
          children: [{ path: "", element: <Designation /> }],
        },
        {
          path: "roles",
          element: <ProtectedRoute allowedRoles={[Role.ADMIN]} />,
          children: [{ path: "", element: <Roles /> }],
        },
      ],
    },
    {
      path: "/landing-page",
      element: <LandingPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
  ];

  return useRoutes(routes);
}

export default Router;

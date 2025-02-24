/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { userRole } = useAuth();

  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

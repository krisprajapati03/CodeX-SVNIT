import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, userRole, allowedRole }) => {
  return userRole === allowedRole ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

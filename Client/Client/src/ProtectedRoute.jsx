// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, userRole, allowedRole }) => {
//   return userRole === allowedRole ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, userRole, allowedRole }) => {
  if (userRole !== allowedRole) {
    // Redirect to main dashboard if user does not have permission
    return <Navigate to="/" />;
  }

  return children; // Render the children if the user has the correct role
};

export default ProtectedRoute;

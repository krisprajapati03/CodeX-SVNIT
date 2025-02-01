import React, { useState } from "react";
import AppRoutes from "./routes";

const App = () => {
  const [userRole, setUserRole] = useState(null); // "user" or "admin"

  return <AppRoutes userRole={userRole} setUserRole={setUserRole} />;
};

export default App;

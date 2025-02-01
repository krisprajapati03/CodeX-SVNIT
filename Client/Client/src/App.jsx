  // import React from "react";
  // import { BrowserRouter, Routes, Route,useNavigate  } from "react-router-dom";
  // // import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

  
  // import ForgetPass from "./components/ForgetPass";
  // import MainDashbord from "./components/MainDashbord";
  // import Navbar from "./components/Navbar";
  // import LoginForm from './components/LoginForm'
  // import RegisterForm from './components/RegisterForm'

  // import UserDashBoard from "./user/UserDashBoard";
  // import ApplicationForm from "./user/ApplicationForm";
  // import ApplicationTracker from "./user/ApplicationTracker";
  // import ProfileSettings from "./user/ProfileSettings";

  // import Dashboard from "./admin/Dashboard"; 
  // import DocumentVerificationPanel from "./admin/DocumentVerificationPanel";
  // import ForUserDB from "./admin/forUserDB"; 

  // import ProtectedRoute from "./ProtectedRoute";

  // const App = () => {
  //   const [userRole, setUserRole] = React.useState(null); // Manage user role state
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     // Check if there's a token and role in localStorage
  //     const role = localStorage.getItem("role");
  //     const token = localStorage.getItem("token");
  
  //     if (role && token) {
  //       setUserRole(role);
  //       if (role === "user") {
  //         navigate("/user/dashboard");
  //       } else if (role === "admin") {
  //         navigate("/admin/dashboard");
  //       } else {
  //         navigate("/");
  //       }
  //     }
  //   }, [navigate]);

  //   return (
  //     <>
  //       <Navbar/>

  //       <Routes>
                  
  //             {/* Common Routes */}
  //             <Route path="/login" element={<LoginForm />} />
  //             <Route path="/RegisterForm" element={<RegisterForm />} />
  //             <Route path="/LoginForm" element={<LoginForm />} />


  //             <Route path="/forget-password" element={<ForgetPass />} />
  //             <Route path="/" element={<MainDashbord />} />


  //             <Route path="/user/dashboard" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="user"
  //                 >
  //                 <UserDashBoard />
  //                 </ProtectedRoute>
  //             } />
  //             <Route path="/user/application-form" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="user"
  //                 >
  //                 <ApplicationForm />
  //                 </ProtectedRoute>
  //             } />
  //             <Route path="/user/application-status" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="user"
  //                 >
  //                 <ApplicationTracker />
  //                 </ProtectedRoute>
  //             } />
  //             <Route path="/user/profile-settings" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="user"
  //                 >
  //                 <ProfileSettings />
  //                 </ProtectedRoute>
  //             } />




  //             <Route path="/admin/dashboard" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="admin"
  //                 >
  //                 <Dashboard />
  //                 </ProtectedRoute>
  //             } />
  //             <Route path="/admin/documents" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="admin"
  //                 >
  //                 <DocumentVerificationPanel />
  //                 </ProtectedRoute>
  //             } />
  //             <Route path="/admin/for-user-dashboard" element={
  //                 <ProtectedRoute 
  //                 // userRole={userRole} allowedRole="admin"
  //                 >
  //                 <ForUserDB /> 
  //                 </ProtectedRoute>
  //             } /> 
  //       </Routes>
  //     </>
  //   );
  // };

  // export default App;



  import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ForgetPass from "./components/ForgetPass";
import MainDashbord from "./components/MainDashbord";
import Navbar from "./components/Navbar";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserDashBoard from "./user/UserDashBoard";
import ApplicationForm from "./user/ApplicationForm";
import ApplicationTracker from "./user/ApplicationTracker";
import ProfileSettings from "./user/ProfileSettings";
import Dashboard from "./admin/Dashboard"; 
import DocumentVerificationPanel from "./admin/DocumentVerificationPanel";
import ForUserDB from "./admin/forUserDB"; 
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [userRole, setUserRole] = useState(null); // Manage user role state
  const navigate = useNavigate();

  // This useEffect will check for role and token in localStorage when the component mounts
  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (role && token) {
      setUserRole(role); // Set role from localStorage
      if (role === "user") {
        navigate("/user/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/"); // Default redirection
      }
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <Routes>
        {/* Common Routes */}
        <Route path="/login" element={<LoginForm setUserRole={setUserRole} />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/" element={<MainDashbord />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={
          <ProtectedRoute userRole={userRole} allowedRole="user">
            <UserDashBoard />
          </ProtectedRoute>
        } />
        <Route path="/user/application-form" element={
          <ProtectedRoute userRole={userRole} allowedRole="user">
            <ApplicationForm />
          </ProtectedRoute>
        } />
        <Route path="/user/application-status" element={
          <ProtectedRoute userRole={userRole} allowedRole="user">
            <ApplicationTracker />
          </ProtectedRoute>
        } />
        <Route path="/user/profile-settings" element={
          <ProtectedRoute userRole={userRole} allowedRole="user">
            <ProfileSettings />
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute userRole={userRole} allowedRole="admin">
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/documents" element={
          <ProtectedRoute userRole={userRole} allowedRole="admin">
            <DocumentVerificationPanel />
          </ProtectedRoute>
        } />
        <Route path="/admin/for-user-dashboard" element={
          <ProtectedRoute userRole={userRole} allowedRole="admin">
            <ForUserDB /> 
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
};

export default App;

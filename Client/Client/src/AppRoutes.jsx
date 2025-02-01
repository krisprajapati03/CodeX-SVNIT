import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgetPass from "./components/ForgetPass";
import MainDashbord from "./components/MainDashbord";
import Navbar from "./components/Navbar";

// import UserDashBoard from "./user/UserDashBoard";
// import ApplicationForm from "./user/ApplicationForm";
// import ApplicationTracker from "./user/ApplicationTracker";
// import ProfileSettings from "./user/ProfileSettings";

// import Dashboard from "./admin/Dashboard"; // ✅ Fixed duplicate import
// import DocumentVerificationPanel from "./admin/Documents"; // ✅ Ensure correct file name
// import ForUserDB from "./admin/forUserDB"; // ✅ Corrected component name

// import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = ({ userRole }) => {
  return (
    <>
        <Navbar/>
            <Routes>
                
            {/* Common Routes */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forget-password" element={<ForgetPass />} />
            <Route path="/" element={<MainDashbord />} />
        {/* 
            
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
            } /> */}
            </Routes>
    </>
  );
};

export default AppRoutes;

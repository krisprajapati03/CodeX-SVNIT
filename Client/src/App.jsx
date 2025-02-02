import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ForgetPass from "./components/ForgetPass";
import MainDashbord from "./components/MainDashbord";
import Navbar from "./components/Navbar";
import LoginForm from './user/LoginRegister';
import RegisterForm from './components/RegisterForm';
import UserDashBoard from "./user/UserDashBoard";
import ApplicationForm from "./user/ApplicationForm";
import ApplicationTracker from "./user/ApplicationTracker";
import ProfileSettings from "./user/ProfileSettings";
import Dashboard from "./admin/Dashboard"; 
import DocumentVerificationPanel from "./admin/DocumentVerificationPanel";
import ForUserDB from "./admin/forUserDB"; 
import ProtectedRoute from "./ProtectedRoute";
import Application from "./components/Application";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Common Routes */}
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/" element={<MainDashbord />} />
        <Route path="/application/:id" element= {<Application />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={
        <ProtectedRoute>
          <UserDashBoard />
        </ProtectedRoute>
      } />

<Route path="/user/application-form" element={
          <ProtectedRoute>
            <ApplicationForm />
          </ProtectedRoute>
        } />

        <Route path="/user/application-status" element={
          <ProtectedRoute>
            <ApplicationTracker />
          </ProtectedRoute>
        } />
        <Route path="/user/profile-settings" element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/documents/:id" element={
          <ProtectedRoute>
            <DocumentVerificationPanel />
          </ProtectedRoute>
        } />
        <Route path="/admin/for-user-dashboard" element={
          <ProtectedRoute>
            <ForUserDB /> 
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
};

export default App;

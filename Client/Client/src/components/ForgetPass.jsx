import React, { useState } from "react";

const ForgetPass = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    setEmailSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    setOtpVerified(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      alert("Password reset successfully!");
      // Redirect to login page (or any further action)
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>

      {/* Reset Password Form */}
      <div className="min-h-screen flex pt-12 justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="Government Emblem"
              className="h-20 mx-auto"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-blue-800">
              Reset Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {otpVerified
                ? "Set your new password"
                : "Enter your registered email to receive OTP"}
            </p>
          </div>

          {/* Form Handling */}
          <form className="mt-8 space-y-6">
            {!emailSent && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            )}

            {emailSent && !otpVerified && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800 sm:text-sm"
                  placeholder="Enter OTP"
                />
                <p className="mt-2 text-sm text-gray-500">
                  OTP has been sent to your email address
                </p>
              </div>
            )}

            {otpVerified && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800 sm:text-sm"
                    placeholder="Create new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800 sm:text-sm"
                    placeholder="Confirm new password"
                  />
                </div>
              </>
            )}

            {/* Buttons */}
            {!emailSent ? (
              <button
                onClick={handleSendOtp}
                className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900"
              >
                Send OTP
              </button>
            ) : !otpVerified ? (
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Verify OTP
              </button>
            ) : (
              <button
                onClick={handleResetPassword}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Reset Password
              </button>
            )}

            <div className="text-center">
              <a href="/login" className="text-blue-800 hover:text-blue-900">
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;

import React, { useState } from "react";

const RegisterForm = ({ switchToLogin }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!fullName || !mobileNumber || !aadharNumber || !email || !address || !password) {
      setError("All fields are required.");
      return;
    }

    // Validate Aadhaar number (12 digits)
    if (!/^\d{12}$/.test(aadharNumber)) {
      setError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate email format
    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Validate password strength (at least 8 characters)
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Create user object for registration
    const user = {
      name: fullName,
      phone: mobileNumber,
      aadhar: aadharNumber,
      email,
      address,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/citizens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        switchToLogin(); // Switch to login form
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Network error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-neutral-200/20 overflow-hidden shadow-md p-6">
      <h2 className="text-lg font-medium text-neutral-900 text-center mb-4">
        Citizen Registration
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Aadhaar Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Aadhaar number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Displaying error message */}
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
        >
          Register
        </button>

        <div className="text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <button
              onClick={switchToLogin}
              className="text-blue-600 hover:text-blue-500"
            >
              Login here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

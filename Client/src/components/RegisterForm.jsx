import React from "react";

const RegisterForm = ({ switchToLogin }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-neutral-200/20 overflow-hidden shadow-md p-6">
      {/* Title */}
      <h2 className="text-lg font-medium text-neutral-900 text-center mb-4">
        Citizen Registration
      </h2>

      {/* Sign-Up Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
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
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
        >
          Register
        </button>

        <div className="text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <button onClick={switchToLogin} className="text-blue-600 hover:text-blue-500">
              Login here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

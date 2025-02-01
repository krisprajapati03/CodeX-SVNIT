import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ switchToSignUp }) => {
  const [activeTab, setActiveTab] = useState("citizen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/ForgetPass");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const loginData = { email, password };

    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-neutral-200/20 overflow-hidden shadow-md p-6">
      <div className="flex">
        <button
          onClick={() => setActiveTab("citizen")}
          className={`flex-1 py-4 text-center text-sm font-medium ${
            activeTab === "citizen"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          Citizen Login
        </button>
        <button
          onClick={() => setActiveTab("official")}
          className={`flex-1 py-4 text-center text-sm font-medium ${
            activeTab === "official"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          Official Login
        </button>
      </div>

      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
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
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-neutral-200/20 rounded"
            />
            <label className="ml-2 text-sm text-neutral-600">Remember me</label>
          </div>
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-500"
            onClick={handleAboutClick}
          >
            Forgot Password?
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{" "}
            <button
            onClick={switchToSignUp}
            className="text-blue-600 hover:text-blue-500"
            >
            Register here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

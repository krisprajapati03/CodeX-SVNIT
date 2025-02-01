// import React, { useState } from "react";
// import Login from "../components/LoginForm";
// import SignUp from "../components/RegisterForm";

// const LoginPage = () => {
//   const [isRegistering, setIsRegistering] = useState(false);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//       {isRegistering ? (
//         <SignUp switchToLogin={() => setIsRegistering(false)} />
//       ) : (
//         <Login switchToSignUp={() => setIsRegistering(true)} />
//       )}
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login (Replace with API call)
    if (email === "user@example.com" && password === "user123") {
      setUserRole("user");
      navigate("/user/dashboard");
    } else if (email === "admin@example.com" && password === "admin123") {
      setUserRole("admin");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md" placeholder="Enter email"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md" placeholder="Enter password"/>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
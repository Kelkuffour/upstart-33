/*import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Log in</h2>

        {/* Social Login Buttons /}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-md shadow-sm text-gray-700 hover:bg-gray-50">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-md shadow-sm text-gray-700 hover:bg-gray-50">
            <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple Logo" />
            Continue with Apple
          </button>
        </div>

        {/* Divider /}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Login /}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
        />
        <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-md text-lg font-semibold">
          Continue
        </button>

        {/* Forgot Password /}
        <p className="mt-4 text-sm text-teal-700 text-center cursor-pointer">
          Don't know your password?
        </p>

        {/* Back Button /}
        <button
          className="mt-6 w-full bg-gray-200 py-2 rounded-md text-lg font-semibold"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default Login;
*/

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login validation (You can replace with actual authentication logic)
    if (email === "user@example.com" && password === "password123") {
      navigate("/my-account"); // Redirect to MyAccount page
    } else {
      alert("Invalid login credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-semibold text-gray-900">Log in</h1>

      <form className="mt-6 w-full max-w-sm" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-md text-lg"
        />
        <button type="submit" className="mt-4 w-full bg-teal-700 text-white py-3 rounded-md">
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-teal-600">Forgot your password?</p>
    </div>
  );
};

export default Login;

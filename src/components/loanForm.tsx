/* 
import React from "react";

const LoanForm: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-20">
      {/* Logo (Optional) /}
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center">
        How much would you like to borrow?
      </h1>

      {/* Loan Input /}
      <div className="mt-6 w-full max-w-md">
        <input
          type="number"
          placeholder="Loan amount"
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
        />
        <p className="text-gray-500 text-sm mt-1">
          Enter an amount between $1,000 and $50,000
        </p>
      </div>

      {/* Info Box /}
      <div className="bg-blue-50 p-5 mt-8 rounded-md w-full max-w-md text-gray-700">
        <h3 className="text-lg font-medium">Personal loans through Upstart</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>✅ Check your rate in 5 minutes.</li>
          <li>✅ No pre-payment penalty.</li>
          <li>✅ 38% lower rates than a traditional model.</li>
        </ul>
      </div>

      {/* Next Button /}
      <button className="bg-teal-700 text-white px-8 py-3 rounded-md text-lg font-semibold mt-6 w-full max-w-md">
        Next
      </button>
    </div>
  );
};

export default LoanForm;
*/
import Login from "./login";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoanForm: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-20">
      {/* Logo (Optional) */}
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center">
        How much would you like to borrow?
      </h1>

      {/* Loan Input */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="number"
          placeholder="Loan amount"
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
        />
        <p className="text-gray-500 text-sm mt-1">
          Enter an amount between $1,000 and $50,000
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 p-5 mt-8 rounded-md w-full max-w-md text-gray-700">
        <h3 className="text-lg font-medium">Personal loans through Upstart</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>✅ Check your rate in 5 minutes.</li>
          <li>✅ No pre-payment penalty.</li>
          <li>✅ 38% lower rates than a traditional model.</li>
        </ul>
      </div>

      {/* Next Button */}
      <button
        className="bg-teal-700 text-white px-8 py-3 rounded-md text-lg font-semibold mt-6 w-full max-w-md"
        onClick={() => navigate("/login")} // Change this to the next step in your process
      >
        Next
      </button>

      {/* Back Button */}
      <button
        className="mt-4 text-teal-700 font-medium"
        onClick={() => navigate(-1)} // Navigate back to the HeroSection
      >
        ← Go Back
      </button>
    </div>
  );
};

export default LoanForm;


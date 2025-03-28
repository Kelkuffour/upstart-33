import React from "react";

const MyAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-teal-700 text-white py-4 px-6 text-center text-lg font-semibold">
        Welcome back, Donxkelo!
      </header>

      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Personal Loan</h2>
        <div className="border rounded-md p-4 mb-6">
          <p className="font-medium">Loan Status:</p>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-teal-600 font-semibold">Check for offers</span>
            <span className="text-gray-400">→ Choose offer → Submit request → Verify & sign → Get funded</span>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-gray-600">Started on: <strong>3/23/2025</strong></p>
            <p className="text-gray-600">Loan Amount: <strong>$1,000</strong></p>
          </div>
          <button className="mt-4 bg-teal-700 text-white px-6 py-2 rounded-md">Continue</button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Explore Loans</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-md bg-white shadow">
            <h3 className="text-lg font-medium">Personal Loan</h3>
            <p className="text-gray-600">Consolidate debt and more</p>
          </div>
          <div className="p-4 border rounded-md bg-white shadow">
            <h3 className="text-lg font-medium">Car Refinance Loan</h3>
            <p className="text-gray-600">Swap your car loan and save</p>
          </div>
          <div className="p-4 border rounded-md bg-white shadow">
            <h3 className="text-lg font-medium">Short-term Relief</h3>
            <p className="text-gray-600">For everyday bills & expenses</p>
          </div>
          <div className="p-4 border rounded-md bg-white shadow">
            <h3 className="text-lg font-medium">Home Equity Line of Credit</h3>
            <p className="text-gray-600">Get more cash with your home equity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

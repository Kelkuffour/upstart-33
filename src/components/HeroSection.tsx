/*import React from "react";
import heroImge from "../assets/images/ill.png"

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800">Personal loans with low fixed rates*</h2>
        <p className="text-gray-600 mt-2">Next day funding with no hidden fees. Ever.</p>
        <button className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-md">Check your rate</button>
        <p className="text-sm text-gray-500 mt-2">Won't affect your credit score</p>
      </div>
      <img src={heroImge} alt="Loan Illustration" className="w-1/2 hidden md:block" />
    </section>
  );
};

export default HeroSection;
*/
/*
import heroImge from "../assets/images/ill.png"
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side - Text Content }
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Personal loans with <br /> low fixed rates*
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Next day funding⁴ with no hidden fees. <em>Ever.</em>
        </p>
        <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Check your rate
        </button>
        <p className="mt-2 text-sm text-gray-500">
          🔒 Won't affect your credit score
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ⭐ Excellent 4.9 out of 5 <span className="text-green-600">Trustpilot</span>
        </p>
      </div>

      {/* Right Side - Image }
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={heroImge}
          alt="Loan Illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
*/

/*import heroImge from "../assets/images/ill.png";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side - Text Content /}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Personal loans with <br /> low fixed rates*
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Next day funding⁴ with no hidden fees. <em>Ever.</em>
        </p>
        {/* Navigate to loan form page when button is clicked /}
        <button
          className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
          onClick={() => navigate("/loan-form")}
        >
          Check your rate
        </button>
        <p className="mt-2 text-sm text-gray-500">
          🔒 Won't affect your credit score
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ⭐ Excellent 4.9 out of 5 <span className="text-green-600">Trustpilot</span>
        </p>
      </div>

      {/* Right Side - Image /}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={heroImge}
          alt="Loan Illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import heroImge from "../assets/images/ill.png";

const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side - Text Content /}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Personal loans with <br /> low fixed rates*
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Next day funding⁴ with no hidden fees. <em>Ever.</em>
        </p>

        {/* Check Your Rate Button /}
        <button
          className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
          onClick={() => navigate("/loan-form")}
        >
          Check your rate
        </button>

        {/* Login Button (Ensure it's working) /}
        <button
          className="ml-4 bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
          onClick={() => navigate("/login")}
        >
          LOG IN
        </button>

        <p className="mt-2 text-sm text-gray-500">
          🔒 Won't affect your credit score
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ⭐ Excellent 4.9 out of 5 <span className="text-green-600">Trustpilot</span>
        </p>
      </div>

      {/* Right Side - Image /}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img src={heroImge} alt="Loan Illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default HeroSection;
*/

import React from "react";
import { useNavigate } from "react-router-dom";
import heroImge from "../assets/images/ill.png";

const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Personal loans with <br /> low fixed rates*
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Next day funding⁴ with no hidden fees. <em>Ever.</em>
        </p>

        {/* Check Your Rate Button */}
        <button
          className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
          onClick={() => navigate("/loan-form")}
        >
          Check your rate
        </button>

        
        <p className="mt-2 text-sm text-gray-500">
          🔒 Won't affect your credit score
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ⭐ Excellent 4.9 out of 5 <span className="text-green-600">Trustpilot</span>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img src={heroImge} alt="Loan Illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default HeroSection;



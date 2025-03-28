/*import React from "react";
// import Navbar from "./components/Navbar";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";
import LoanForm from "./components/loanform"; // Import LoanForm component
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/loan-form" element={<LoanForm />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LoanForm from "./components/LoanForm";
import Login from "./components/login"; // Import the existing LoginForm
import MyAccount from "./components/MyAccount"; // Import MyAccount page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/login" element={<Login />} /> {/* Link LoginForm here */}
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

export default App;


import React from "react";
import { useNavigate} from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between font-bold items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-teal-600">Upstart</h1>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="#">BORROW</a></li>
        <li><a href="#">FOR LENDERS</a></li>
        <li><a href="#">FOR DEALERS</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">RESOURCES</a></li>
      </ul>
      <button
          className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-semibold"
          onClick={() => navigate("/login")}
        >
          LOG IN
        </button>
    </nav>
  );
};

export default Navbar;

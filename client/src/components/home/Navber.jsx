import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <button
          className="md:hidden px-3 py-2 border border-white rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <ul
        className={`md:flex md:items-center md:justify-center mt-3 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 text-base font-medium ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li><Link to="/" className="block hover:underline">Home</Link></li>
        <li><Link to="/about" className="block hover:underline">About</Link></li>
        <li><Link to="/admission" className="block hover:underline">Admission</Link></li>
        <li><Link to="/result" className="block hover:underline">Result</Link></li>
        <li><Link to="/teachers" className="block hover:underline">Teachers</Link></li>
        <li><Link to="/contact" className="block hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/admission", label: "Admission" },
    { to: "/result", label: "Result" },
    { to: "/teachers", label: "Teachers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] text-white p-4 shadow-md">
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
        {navItems.map(({ to, label }) => (
          <li key={to} className="group relative">
            <Link
              to={to}
              className={`block px-2 py-1 uppercase font-semibold transition-all duration-300 ${
                location.pathname === to ? "text-white" : "text-white/80"
              }`}
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

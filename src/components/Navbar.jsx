import { NavLink, Link } from "react-router";
import logo from "../assets/wellnex-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-md font-medium border-b-2 pb-0.5"
      : "text-md font-medium border-b-2 border-transparent pb-0.5 hover:border-[#0088FF] transition-colors";

  const activeStyle = { borderColor: "#0088FF", color: "#0088FF" };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Wellnex Logo" className="h-8" />
          <span className="font-semibold text-2xl" style={{ color: "#0088FF" }}>
            WellneX
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {["/", "/products", "/login", "/register"].map((path, i) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={linkClass}
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                {["Home", "Products", "Login", "Register"][i]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {["/", "/products", "/login"].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setMenuOpen(false)}
            >
              {["Home", "Products", "Login", "Register"][i]}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

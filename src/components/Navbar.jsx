import { NavLink, Link } from "react-router";
import logo from "../assets/wellnex-logo.png";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  // Navbar UI logics
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-md font-medium border-b-2 pb-0.5"
      : "text-md font-medium border-b-2 border-transparent pb-0.5 hover:border-[#0088FF] transition-colors";

  const activeStyle = { borderColor: "#0088FF", color: "#0088FF" };
  // Navbar user logics
  const { user, logout, success } = useAuth();
  const myName = user?.username;
  const nameFirstLetter = myName?.charAt(0);
  // console.log(user);
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
          <li>
            <NavLink
              to="/"
              end
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Blogs
            </NavLink>
          </li>
          {/* conditional rendering */}
          {user && user ? (
            <>
              <li>
                <NavLink
                  to="/aaa/products"
                  className={linkClass}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  Products
                </NavLink>
              </li>
              <li>
                {success && (
                  <p className="text-green-500 text-center mt-2 font-bold">
                    {success}
                  </p>
                )}
                <button
                  onClick={logout}
                  className="cursor-pointer text-md font-medium border-b-2 border-transparent pb-0.5 hover:border-[#0088FF] hover:text-[#0088FF]"
                >
                  Logout
                </button>
              </li>
              <div className="relative group inline-block">
                {/* avatar */}
                <div className="bg-[#0088ff] rounded-full font-bold h-8 w-8 flex justify-center items-center text-white cursor-pointer">
                  {nameFirstLetter}
                </div>
                {/* dropdown */}
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-3
      opacity-0 scale-95 translate-y-2
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
      transition-all duration-200 ease-out
      pointer-events-none group-hover:pointer-events-auto"
                >
                  <p className="font-semibold text-gray-800">
                    {user?.username}
                  </p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={linkClass}
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                Login
              </NavLink>
            </li>
          )}
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
          <NavLink
            to="/"
            end
            className={linkClass}
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={linkClass}
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          {/* conditional */}
          {user ? (
            <>
              <NavLink
                to="/aaa/products"
                className={linkClass}
                style={({ isActive }) => (isActive ? activeStyle : {})}
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                className="text-md font-medium"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

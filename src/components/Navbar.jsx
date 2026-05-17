import { NavLink, Link } from "react-router";
import logo from "../assets/wellnex-logo.png";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import UserInfoDropdown from "./UserInfoDropdown";
import CartInformation from "./CartInformation";

const Navbar = () => {
  // Navbar UI logics
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-md font-medium border-b-2 pb-0.5 inline block"
      : "text-md font-medium border-b-2 border-transparent pb-0.5 hover:border-[#0088FF] transition-colors";

  const activeStyle = { borderColor: "#0088FF", color: "#0088FF" };
  // Authenticated user logics
  const { user, logout, success } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm h-15">
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
                  to="/products"
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
                  className="cursor-pointer text-md font-medium border-b-2 border-transparent hover:border-[#0088FF] hover:text-[#0088FF]"
                >
                  Logout
                </button>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={linkClass}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  <CartInformation />
                </NavLink>
              </li>
              <li>
                <UserInfoDropdown />
              </li>
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
        <ul className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          <li>
            <NavLink
              to="/"
              end
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={linkClass}
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </NavLink>
          </li>
          {/* conditional rendering */}
          {user && user ? (
            <>
              <li>
                <NavLink
                  to="/products"
                  className={linkClass}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                {success && (
                  <p className="text-green-500 font-bold">{success}</p>
                )}

                <button
                  className="text-md font-medium text-left border-b-2 border-transparent hover:border-[#0088FF] hover:text-[#0088FF]"
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={linkClass}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  onClick={() => setMenuOpen(false)}
                >
                  <CartInformation />
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={linkClass}
                style={({ isActive }) => (isActive ? activeStyle : {})}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

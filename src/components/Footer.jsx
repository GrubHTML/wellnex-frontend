import logo from "../assets/wellnex-logo.png";
import { Link } from "react-router";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f0f7ff]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,32L30,58.7C60,85,120,139,180,165.3C240,192,300,192,360,170.7C420,149,480,107,540,85.3C600,64,660,64,720,96C780,128,840,192,900,202.7C960,213,1020,171,1080,138.7C1140,107,1200,85,1260,96C1320,107,1380,149,1410,170.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-xs text-gray-500 mb-0.5">Phone Number:</p>
          <p className="text-sm text-gray-700 mb-3">(+880) 123-456-7890</p>
          <p className="text-xs text-gray-500 mb-0.5">Email:</p>
          <p className="text-sm text-gray-700">info@wellnex.com</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Location</h3>
          <p className="text-sm text-gray-700 mb-4">
            123 Wellnex LTD, Dhaka, Dhanmondi, 1209
          </p>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-[#0088FF] transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-[#0088FF] transition-colors">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="hover:text-[#0088FF] transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Logo */}
        <div>
          <div className="flex md:justify-end items-start">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Wellnex Logo" className="h-8" />
              <span className="font-bold text-2xl" style={{ color: "#0088FF" }}>
                WellneX
              </span>
            </Link>
          </div>
          <span className="text-sm text-gray-700 mt-4 flex md:justify-end items-start">
            Your Neighborhood Health Partner.
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="flex items-center justify-center border-2 mb-2"> */}
      <p className="text-xs text-gray-400 px-8 py-4 text-center">
        © 2026 Wellnex. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

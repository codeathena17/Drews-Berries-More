import React, { useState } from "react";
import { Link } from "react-router";
import { Page } from "../constants";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Common class for the animated underline effect
  const underlineStyle =
    "relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#4B5320] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100";

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group transition-all"
            >
              <div className="w-10 h-10 bg-[#4B5320] rounded-full flex items-center justify-center text-white">
                <Leaf size={20} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xl font-bold text-[#2D2A26] serif">
                  Drew’s Berries
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#5C4033] font-medium">
                  Drusus Foundation
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.Home
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.About
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/membership"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.Membership
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              Membership
            </Link>
            <Link
              to="/offerings"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.Offerings
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              Offerings
            </Link>
            <Link
              to="/cabins"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.Cabins
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              Cabins
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#4B5320] ${underlineStyle} ${
                currentPage === Page.Contact
                  ? "text-[#4B5320] after:scale-x-100"
                  : "text-stone-600"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-[#4B5320] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#3d441a] transition-all shadow-sm"
            >
              Join the Association
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-stone-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-stone-100 py-4 px-4 space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.Home
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.About
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            About
          </Link>
          <Link
            to="/membership"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.Membership
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            Membership
          </Link>
          <Link
            to="/offerings"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.Offerings
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            Offerings
          </Link>
          <Link
            to="/cabins"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.Cabins
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            Cabins
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${
              currentPage === Page.Contact
                ? "text-[#4B5320] bg-stone-50"
                : "text-stone-600"
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block w-full bg-[#4B5320] text-white py-3 rounded-sm font-medium text-center"
          >
            Join the Association
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-darker shadow-lg backdrop-blur-sm" : "bg-bg-darkest"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white font-sans">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="EventUp Logo" className="w-30 md:w-40" />
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop */}
        <div
          className={`absolute md:static top-full left-0 w-full bg-bg-darkest md:bg-transparent md:flex md:items-center md:justify-between md:w-full transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible md:visible md:opacity-100 md:translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:justify-center md:flex-1 md:items-center text-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
            {["Home", "About", "Pricing", "Career", "Blog"].map(
              (link, index) => (
                <li
                  key={link}
                  className={`transition-all duration-300 ${
                    isOpen
                      ? `delay-[${index * 75}ms] opacity-100 translate-y-0`
                      : "opacity-0 translate-y-[-10px] md:opacity-100 md:translate-y-0"
                  }`}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="relative group font-medium hover:text-accent-mid transition"
                  >
                    {link}
                    <span className="block h-[2px] w-0 bg-accent-mid group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 px-4 md:px-0 mb-6 md:mb-0">
            <button className="text-sm hover:text-accent-mid transition">
              Log In
            </button>
            <button className="bg-accent-mid text-sm px-5 py-2 rounded-md hover:bg-accent-dark transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

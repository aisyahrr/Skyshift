import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const baseClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-full z-50 bg-black/40 backdrop-blur-xl fixed top-0 left-0">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#2d49ff] to-[#91c6e2] bg-clip-text text-transparent tracking-widest">
          Sky<span className="text-lg">Shift</span>
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-10 items-center text-white font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? "after:w-full" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? "after:w-full" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? "after:w-full" : ""}`
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact (desktop only) */}
        <button className="hidden md:block border-blue-500 border hover:bg-blue-500/30 py-2 px-8 rounded-lg font-semibold text-white">
          Contact
        </button>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1 group"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-7 h-[3px] bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/50 backdrop-blur-xl ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 text-white font-semibold gap-5">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={baseClass}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={baseClass}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              onClick={() => setOpen(false)}
              className={baseClass}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <button className="border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500/30">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

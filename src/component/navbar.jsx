import { NavLink } from "react-router-dom";

function Navbar() {
  const baseClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="flex justify-between p-3 items-center">
      <h2 className="text-2xl font-bold bg-linear-to-r from-[#2d49ff] to-[#91c6e2] bg-clip-text text-transparent tracking-widest">
        Sky<span className="text-lg">Shift</span>
      </h2>

      <div className="py-3 px-10 bg-white/10 backdrop-blur-3xl shadow-2xl rounded-lg text-white font-semibold">
        <ul className="flex gap-10 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "after:w-full" : "after:w-0"} hover:after:w-full`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "after:w-full" : "after:w-0"} hover:after:w-full`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "after:w-full" : "after:w-0"} hover:after:w-full`
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="border-blue-500 border hover:bg-blue-500/30 py-2 px-8 rounded-lg font-semibold">
        Contact
      </button>
    </div>
  );
}

export default Navbar;

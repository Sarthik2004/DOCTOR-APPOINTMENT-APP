import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-violet-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
        >
          MediBook
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className="hover:text-cyan-400 duration-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/doctors"
            className="hover:text-cyan-400 duration-300"
          >
            Doctors
          </NavLink>

          <NavLink
            to="/my-appointments"
            className="hover:text-cyan-400 duration-300"
          >
            My Appointments
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="hidden md:block hover:text-cyan-400 duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hidden md:block bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            Sign Up
          </Link>

          <FaUserCircle
            size={32}
            className="text-cyan-400 cursor-pointer hidden md:block"
          />

          {/* Mobile Menu Icon */}
          <HiMenuAlt3
            size={30}
            className="md:hidden cursor-pointer"
          />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
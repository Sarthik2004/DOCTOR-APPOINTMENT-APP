import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-violet-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
        >
          BookMyDoctor
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">

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
            Appointments
          </NavLink>

        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4 text-white">

          {token ? (
            <>
              <FaUserCircle
                size={32}
                className="text-cyan-400"
              />

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-cyan-400 duration-300"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-6 py-5">

          <div className="flex flex-col gap-5 text-white">

            <NavLink
              to="/"
              onClick={closeMenu}
              className="hover:text-cyan-400"
            >
              Home
            </NavLink>

            <NavLink
              to="/doctors"
              onClick={closeMenu}
              className="hover:text-cyan-400"
            >
              Doctors
            </NavLink>

            <NavLink
              to="/my-appointments"
              onClick={closeMenu}
              className="hover:text-cyan-400"
            >
              Appointments
            </NavLink>

            <hr className="border-slate-700" />

            {token ? (
              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="bg-red-500 py-2 rounded-xl font-semibold"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="text-center py-2 border border-cyan-500 rounded-xl"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="text-center py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
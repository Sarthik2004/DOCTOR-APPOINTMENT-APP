import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-950 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              BookMyDoctor
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Book appointments with trusted doctors anytime,
              anywhere. Fast, secure and hassle-free healthcare
              booking platform.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-400 hover:text-cyan-400 duration-300"
              >
                Home
              </Link>

              <Link
                to="/doctors"
                className="text-slate-400 hover:text-cyan-400 duration-300"
              >
                Doctors
              </Link>

              <Link
                to="/my-appointments"
                className="text-slate-400 hover:text-cyan-400 duration-300"
              >
                My Appointments
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <p className="text-slate-400">
              📧 support@bookmydoctor.com
            </p>

            <p className="text-slate-400 mt-2">
              📍 Chandigarh, India
            </p>

            <div className="flex gap-5 mt-6 text-2xl">

              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-pink-500 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-white duration-300"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center">

          <p className="text-slate-500 text-sm">
            © 2026 BookMyDoctor. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function DoctorCard() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] duration-300">

      <div className="h-60 bg-slate-700 flex items-center justify-center">
        <span className="text-7xl">👨‍⚕️</span>
      </div>

      <div className="p-6">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            Dr. Rahul Sharma
          </h2>

          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>4.9</span>
          </div>
        </div>

        <p className="text-cyan-400 mt-2">
          Cardiologist
        </p>

        <p className="text-slate-400 mt-4">
          10+ Years Experience
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-2xl font-bold text-violet-400">
            ₹800
          </span>

          <Link
            to="/book/1"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 duration-300"
          >
            Book
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DoctorCard;
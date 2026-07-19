import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function DoctorCard({ doctor }) {
 
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] duration-300">

      {/* Doctor Image */}
     <div className="h-72 bg-slate-700 overflow-hidden">
  {doctor.image ? (
    <img
      src={doctor.image}
      alt={doctor.name}
      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-7xl">👨‍⚕️</span>
    </div>
  )}
</div>

      <div className="p-6">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            {doctor.name}
          </h2>

          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>{doctor.rating || "4.9"}</span>
          </div>
        </div>

        <p className="text-cyan-400 mt-2">
          {doctor.specialization}
        </p>

        <p className="text-slate-400 mt-4">
          {doctor.experience} Years Experience
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-2xl font-bold text-violet-400">
            ₹{doctor.fees}
          </span>

          <Link
            to={`/doctor/${doctor._id}`}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 duration-300"
          >
            View Profile
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DoctorCard;
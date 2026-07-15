import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDoctor = async () => {
    try {
      const res = await api.get(`/doctors/${id}`);

      if (res.data.success) {
        setDoctor(res.data.doctor);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex justify-center items-center text-2xl text-white">
          Loading...
        </div>
      </MainLayout>
    );
  }

  if (!doctor) {
    return (
      <MainLayout>
        <div className="min-h-screen flex justify-center items-center text-2xl text-red-500">
          Doctor Not Found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-20 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 h-[500px] flex items-center justify-center">

            {doctor.image ? (
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            ) : (
              <span className="text-9xl">👨‍⚕️</span>
            )}

          </div>

          {/* Right */}
          <div>

            <h1 className="text-5xl font-bold text-white">
              {doctor.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <FaStar className="text-yellow-400" />
              <span className="text-white">4.9 Rating</span>
            </div>

            <p className="text-cyan-400 text-2xl mt-6">
              {doctor.specialization}
            </p>

            <p className="text-slate-300 mt-4 text-lg">
              Experience : {doctor.experience} Years
            </p>

            <p className="text-violet-400 text-3xl font-bold mt-6">
              Consultation Fee : ₹{doctor.fees}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-3">
                About Doctor
              </h2>

              <p className="text-slate-400 leading-8">
                Experienced specialist dedicated to providing quality healthcare
                and personalized treatment for every patient.
              </p>
            </div>

            <Link
              to={`/book/${doctor._id}`}
              className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 duration-300"
            >
              Book Appointment
            </Link>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default DoctorDetails;
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard";
import api from "../../services/api";

function Home() {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <MainLayout>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-slate-900 min-h-[90vh]">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30">
              🩺 Trusted Healthcare Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Book Your{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Doctor Appointment
              </span>{" "}
              Online
            </h1>

            <p className="text-slate-400 mt-6 text-lg leading-8">
              Find experienced doctors, schedule appointments instantly, and
              manage your healthcare journey with ease.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/doctors"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 duration-300"
              >
                Find Doctors
              </Link>

              <Link
                to="/signup"
                className="px-8 py-3 rounded-xl border border-violet-500 hover:bg-violet-600/20 duration-300"
              >
                Get Started
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-14">

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-cyan-400">100+</h2>
                <p className="text-slate-400 mt-2">Doctors</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-violet-400">5000+</h2>
                <p className="text-slate-400 mt-2">Patients</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
                <p className="text-slate-400 mt-2">Support</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-3xl opacity-30"></div>

              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-10 w-[380px] h-[500px] flex items-center justify-center">

                <div className="text-center">

                  <div className="text-8xl">👨‍⚕️</div>

                  <h2 className="mt-6 text-3xl font-bold">
                    Find Your Best Doctor
                  </h2>

                  <p className="mt-3 text-slate-400">
                    Professional healthcare at your fingertips.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURED DOCTORS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Specialist Doctors
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Consult experienced specialists from different medical fields.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {doctors.length > 0 ? (
            doctors.slice(0, 3).map((doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
              />
            ))
          ) : (
            <h2 className="text-center text-white col-span-3">
              No Doctors Available
            </h2>
          )}

        </div>

      </section>

      {/* Baaki Why Choose Us, Testimonials aur CTA waise hi rehne do.
          Unme koi change nahi karna hai. */}

    </MainLayout>
  );
}

export default Home;
import { useEffect, useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorCard from "../../components/DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-900 py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-center text-white">
            Our Doctors
          </h1>

          <p className="text-slate-400 text-center mt-3 mb-12">
            Choose the best specialist for your healthcare.
          </p>

          {loading ? (
            <h2 className="text-center text-xl text-white">
              Loading Doctors...
            </h2>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                  />
                ))
              ) : (
                <h2 className="text-center text-red-400 col-span-3">
                  No Doctors Found
                </h2>
              )}

            </div>
          )}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Doctors;
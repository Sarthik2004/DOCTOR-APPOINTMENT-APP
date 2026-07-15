import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setAppointments(res.data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (id) => {
    try {
      const res = await api.delete(`/appointments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      fetchAppointments();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex justify-center items-center text-2xl text-white">
          Loading...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            My Appointments
          </h1>

          {appointments.length === 0 ? (
            <h2 className="text-center text-slate-400 text-xl">
              No Appointments Found
            </h2>
          ) : (
            <div className="space-y-6">
              {appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                  {/* Left */}
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {appointment.doctor.name}
                    </h2>

                    <p className="text-cyan-400 mt-2">
                      {appointment.doctor.specialization}
                    </p>

                    <p className="text-slate-400 mt-2">📅 {appointment.date}</p>

                    <p className="text-slate-400">🕒 {appointment.time}</p>

                    <p className="mt-3">
                      Status :
                      <span
                        className={`ml-2 font-semibold ${
                          appointment.status === "Approved"
                            ? "text-green-400"
                            : appointment.status === "Cancelled"
                              ? "text-red-400"
                              : "text-yellow-400"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </p>
                  </div>

                  {/* Right */}

                  {appointment.status === "Pending" && (
                    <button
                      onClick={() => cancelAppointment(appointment._id)}
                      className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 duration-300 text-white font-semibold"
                    >
                      Cancel Appointment
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

export default MyAppointments;

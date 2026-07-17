import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Fetch All Appointments
  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAppointments(res.data.appointments);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const res = await api.put(
        `/appointments/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
      fetchAppointments();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Update Failed");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-white mb-10">
            Manage Appointments
          </h1>

          {loading ? (
            <h2 className="text-center text-white text-xl">
              Loading Appointments...
            </h2>
          ) : appointments.length === 0 ? (
            <h2 className="text-center text-red-400 text-xl">
              No Appointments Found
            </h2>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full bg-slate-800 rounded-2xl overflow-hidden">

                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-4 text-left text-white">Patient</th>
                    <th className="p-4 text-left text-white">Doctor</th>
                    <th className="p-4 text-left text-white">Date</th>
                    <th className="p-4 text-left text-white">Time</th>
                    <th className="p-4 text-left text-white">Status</th>
                    <th className="p-4 text-center text-white">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((appointment) => (
                    <tr
                      key={appointment._id}
                      className="border-t border-slate-700"
                    >
                      <td className="p-4 text-white">
                        {appointment.user?.name}
                      </td>

                      <td className="p-4 text-cyan-400">
                        {appointment.doctor?.name}
                      </td>

                      <td className="p-4 text-white">
                        {appointment.date}
                      </td>

                      <td className="p-4 text-white">
                        {appointment.time}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            appointment.status === "Approved"
                              ? "bg-green-600 text-white"
                              : appointment.status === "Cancelled"
                              ? "bg-red-600 text-white"
                              : "bg-yellow-500 text-black"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex justify-center gap-3">

                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "Approved")
                            }
                            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "Cancelled")
                            }
                            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                          >
                            Cancel
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>
      </section>
    </MainLayout>
  );
}

export default ManageAppointments;
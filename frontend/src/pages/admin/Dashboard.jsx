import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";

function Dashboard() {
  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalUsers: 0,
    totalAppointments: 0,
    pendingAppointments: 0,
    approvedAppointments: 0,
    cancelledAppointments: 0,
  });

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchDashboardStats = async () => {
    try {
      const res = await api.get("/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data.dashboard);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-white mb-10">
            Admin Dashboard
          </h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <h2 className="text-white text-2xl font-semibold animate-pulse">
                Loading Dashboard...
              </h2>
            </div>
          ) : (
            <>
              {/* Stats Cards */}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 duration-300">
                  <h3 className="text-slate-400">Total Doctors</h3>

                  <p className="text-4xl font-bold text-cyan-400 mt-3">
                    {stats.totalDoctors}
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-violet-400 duration-300">
                  <h3 className="text-slate-400">Appointments</h3>

                  <p className="text-4xl font-bold text-violet-400 mt-3">
                    {stats.totalAppointments}
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-400 duration-300">
                  <h3 className="text-slate-400">Users</h3>

                  <p className="text-4xl font-bold text-green-400 mt-3">
                    {stats.totalUsers}
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-yellow-400 duration-300">
                  <h3 className="text-slate-400">Pending</h3>

                  <p className="text-4xl font-bold text-yellow-400 mt-3">
                    {stats.pendingAppointments}
                  </p>
                </div>

              </div>

              {/* Quick Actions */}

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <Link
                  to="/admin/doctors"
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 duration-300"
                >
                  <h2 className="text-2xl font-bold text-white">
                    Manage Doctors
                  </h2>

                  <p className="text-slate-400 mt-3">
                    Add, edit and delete doctors from the system.
                  </p>

                  <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold">
                    Open
                  </button>
                </Link>

                <Link
                  to="/admin/appointments"
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 duration-300"
                >
                  <h2 className="text-2xl font-bold text-white">
                    Manage Appointments
                  </h2>

                  <p className="text-slate-400 mt-3">
                    Approve, cancel and manage appointments.
                  </p>

                  <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold">
                    Open
                  </button>
                </Link>

              </div>

              {/* Extra Stats */}

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="bg-green-900/30 border border-green-500 rounded-2xl p-6">
                  <h3 className="text-green-400 text-lg font-semibold">
                    Approved Appointments
                  </h3>

                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.approvedAppointments}
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500 rounded-2xl p-6">
                  <h3 className="text-red-400 text-lg font-semibold">
                    Cancelled Appointments
                  </h3>

                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.cancelledAppointments}
                  </p>
                </div>

              </div>
            </>
          )}

        </div>
      </section>
    </MainLayout>
  );
}

export default Dashboard;
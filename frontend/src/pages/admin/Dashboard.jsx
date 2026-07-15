import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-10">
            Admin Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-slate-400">Total Doctors</h3>
              <p className="text-4xl font-bold text-cyan-400 mt-3">0</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-slate-400">Appointments</h3>
              <p className="text-4xl font-bold text-violet-400 mt-3">0</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-slate-400">Users</h3>
              <p className="text-4xl font-bold text-green-400 mt-3">0</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-slate-400">Pending</h3>
              <p className="text-4xl font-bold text-yellow-400 mt-3">0</p>
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
        </div>
      </section>
    </MainLayout>
  );
}

export default Dashboard;
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Doctors
  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  // Delete Doctor
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?",
    );

    if (!confirmDelete) return;

    try {
      const res = await api.delete(`/doctors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      // Refresh Doctors List
      fetchDoctors();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-white">Manage Doctors</h1>

            <Link
              to="/admin/doctors/add"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
            >
              Add Doctor
            </Link>
          </div>

          {/* Loading */}
          {loading ? (
            <h2 className="text-center text-white text-xl">
              Loading Doctors...
            </h2>
          ) : doctors.length === 0 ? (
            <h2 className="text-center text-red-400 text-xl">
              No Doctors Found
            </h2>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800 rounded-2xl overflow-hidden">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-4 text-left text-white">Doctor</th>

                    <th className="p-4 text-left text-white">Specialization</th>

                    <th className="p-4 text-left text-white">Experience</th>

                    <th className="p-4 text-left text-white">Fees</th>

                    <th className="p-4 text-center text-white">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor._id} className="border-t border-slate-700">
                      <td className="p-4 text-white">{doctor.name}</td>

                      <td className="p-4 text-cyan-400">
                        {doctor.specialization}
                      </td>

                      <td className="p-4 text-white">
                        {doctor.experience} Years
                      </td>

                      <td className="p-4 text-violet-400">₹{doctor.fees}</td>

                      <td className="p-4">
                        <div className="flex justify-center gap-3">
                          <Link
                            to={`/admin/doctors/edit/${doctor._id}`}
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => handleDelete(doctor._id)}
                            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                          >
                            Delete
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

export default ManageDoctors;

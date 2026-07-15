import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
    image: "",
  });

  const token = localStorage.getItem("token");

  // Get Doctor Details
  const fetchDoctor = async () => {
    try {
      const res = await api.get(`/doctors/${id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load doctor");
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  // Update Doctor
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put(`/doctors/${id}`, doctor, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);
      navigate("/admin/doctors");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Update Failed"
      );
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            Edit Doctor
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Doctor Name"
              value={doctor.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={doctor.specialization}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            <input
              type="number"
              name="fees"
              placeholder="Fees"
              value={doctor.fees}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={doctor.image || ""}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold"
            >
              Update Doctor
            </button>

          </form>

        </div>
      </section>
    </MainLayout>
  );
}

export default EditDoctor;
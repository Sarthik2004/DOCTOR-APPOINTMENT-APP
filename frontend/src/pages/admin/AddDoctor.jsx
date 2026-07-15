import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { toast } from "react-toastify";

function AddDoctor() {
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
    image: "",
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await api.post("/doctors", doctor, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      navigate("/admin/doctors");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to add doctor"
      );
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            Add Doctor
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Doctor Name"
              value={doctor.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
              required
            />

            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={doctor.specialization}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
              required
            />

            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
              required
            />

            <input
              type="number"
              name="fees"
              placeholder="Consultation Fees"
              value={doctor.fees}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL (Optional)"
              value={doctor.image}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
            >
              Add Doctor
            </button>

          </form>

        </div>
      </section>
    </MainLayout>
  );
}

export default AddDoctor;
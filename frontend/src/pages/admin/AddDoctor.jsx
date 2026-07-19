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
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();

      formData.append("name", doctor.name);
      formData.append("specialization", doctor.specialization);
      formData.append("experience", doctor.experience);
      formData.append("fees", doctor.fees);

      if (image) {
        formData.append("image", image);
      }

      const res = await api.post("/doctors", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message);

      navigate("/admin/doctors");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to add doctor");
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Add Doctor</h1>

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

            {/* Image Upload */}

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-xl border border-slate-600"
              />
            )}

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

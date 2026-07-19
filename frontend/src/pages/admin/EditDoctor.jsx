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
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const token = localStorage.getItem("token");

  // Fetch Doctor
  const fetchDoctor = async () => {
    try {
      const res = await api.get(`/doctors/${id}`);

      setDoctor({
        name: res.data.doctor.name,
        specialization: res.data.doctor.specialization,
        experience: res.data.doctor.experience,
        fees: res.data.doctor.fees,
      });

      setPreview(res.data.doctor.image);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load doctor");
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

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

    try {
      const formData = new FormData();

      formData.append("name", doctor.name);
      formData.append("specialization", doctor.specialization);
      formData.append("experience", doctor.experience);
      formData.append("fees", doctor.fees);

      if (image) {
        formData.append("image", image);
      }

      const res = await api.put(`/doctors/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      navigate("/admin/doctors");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Update Failed");
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
              required
            />

            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={doctor.specialization}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
              required
            />

            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
              required
            />

            <input
              type="number"
              name="fees"
              placeholder="Fees"
              value={doctor.fees}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
              required
            />

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
              className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
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
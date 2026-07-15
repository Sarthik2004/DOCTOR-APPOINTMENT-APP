import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/signup", formData);

      toast.success(res.data.message || "Signup Successful");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-3xl p-8">

        <h2 className="text-4xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-slate-400 text-center mt-3">
          Join MediBook today
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 py-4 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Signup;
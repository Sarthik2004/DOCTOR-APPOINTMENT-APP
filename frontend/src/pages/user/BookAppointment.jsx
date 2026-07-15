import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchDoctor = async () => {
    try {
      const res = await api.get(`/doctors/${id}`);

      if (res.data.success) {
        setDoctor(res.data.doctor);
      }
    } catch (error) {
      console.log(error);
      toast.error("Doctor not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (!date) {
      toast.error("Please select appointment date");
      return;
    }

    try {
      const res = await api.post(
        "/appointments",
        {
          doctor: doctor._id,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(res.data.message);

      navigate("/my-appointments");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Booking Failed");
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-2xl text-white">
          Loading...
        </div>
      </MainLayout>
    );
  }

  if (!doctor) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-2xl text-red-500">
          Doctor Not Found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-3xl border border-slate-700 p-10">
          <h1 className="text-4xl font-bold text-white text-center mb-10">
            Book Appointment
          </h1>

          <div className="text-center">
            <div className="text-7xl mb-4">👨‍⚕️</div>

            <h2 className="text-3xl font-bold text-white">{doctor.name}</h2>

            <p className="text-cyan-400 mt-2">{doctor.specialization}</p>

            <p className="text-violet-400 text-2xl font-bold mt-4">
              ₹{doctor.fees}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Date */}

            <div>
              <label className="block text-white mb-2">Select Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* Time */}

            <div>
              <label className="block text-white mb-2">Select Time</label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400"
              >
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
              </select>
            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold text-white hover:scale-105 duration-300"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default BookAppointment;

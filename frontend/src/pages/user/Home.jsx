import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard";

function Home() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-slate-900 min-h-[90vh]">
        {/* Background Blur */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30">
              🩺 Trusted Healthcare Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Book Your{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Doctor Appointment
              </span>{" "}
              Online
            </h1>

            <p className="text-slate-400 mt-6 text-lg leading-8">
              Find experienced doctors, schedule appointments instantly, and
              manage your healthcare journey with ease.
            </p>

            <div className="flex gap-5 mt-10">
              <Link
                to="/doctors"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 duration-300"
              >
                Find Doctors
              </Link>

              <Link
                to="/signup"
                className="px-8 py-3 rounded-xl border border-violet-500 hover:bg-violet-600/20 duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-cyan-400">100+</h2>
                <p className="text-slate-400 mt-2">Doctors</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-violet-400">5000+</h2>
                <p className="text-slate-400 mt-2">Patients</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
                <p className="text-slate-400 mt-2">Support</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-3xl opacity-30"></div>

              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-10 w-[380px] h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl">👨‍⚕️</div>

                  <h2 className="mt-6 text-3xl font-bold">
                    Find Your Best Doctor
                  </h2>

                  <p className="mt-3 text-slate-400">
                    Professional healthcare at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURED DOCTORS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Specialist Doctors
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Consult experienced specialists from different medical fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Choose Us
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            We provide the best healthcare experience with trusted doctors and
            an easy appointment booking process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:scale-105 duration-300">
            <div className="text-5xl">👨‍⚕️</div>
            <h3 className="text-2xl font-semibold mt-5">Expert Doctors</h3>
            <p className="text-slate-400 mt-3">
              Consult highly qualified and experienced specialists.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:scale-105 duration-300">
            <div className="text-5xl">📅</div>
            <h3 className="text-2xl font-semibold mt-5">Easy Booking</h3>
            <p className="text-slate-400 mt-3">
              Book appointments online in just a few clicks.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:scale-105 duration-300">
            <div className="text-5xl">⚡</div>
            <h3 className="text-2xl font-semibold mt-5">Fast Service</h3>
            <p className="text-slate-400 mt-3">
              Quick appointment confirmation and smooth experience.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:scale-105 duration-300">
            <div className="text-5xl">🛡️</div>
            <h3 className="text-2xl font-semibold mt-5">Secure Platform</h3>
            <p className="text-slate-400 mt-3">
              Your personal and appointment data is completely secure.
            </p>
          </div>
        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            What Our
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Patients Say
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Thousands of patients trust MediBook for a fast and reliable
            appointment booking experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:scale-105 duration-300">
            <div className="text-5xl">😊</div>

            <p className="text-slate-400 mt-6">
              Booking an appointment was super easy. The doctor was very
              professional and helpful.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Rahul Verma</h3>

            <p className="text-cyan-400">Chandigarh</p>
          </div>

          {/* Card 2 */}

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:scale-105 duration-300">
            <div className="text-5xl">😍</div>

            <p className="text-slate-400 mt-6">
              Amazing platform! I booked my appointment within minutes.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Priya Sharma</h3>

            <p className="text-cyan-400">Delhi</p>
          </div>

          {/* Card 3 */}

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:scale-105 duration-300">
            <div className="text-5xl">⭐</div>

            <p className="text-slate-400 mt-6">
              Highly recommended. Smooth booking experience and excellent
              doctors.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Aman Singh</h3>

            <p className="text-cyan-400">Mohali</p>
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-violet-700 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-5xl font-bold">
            Ready to Book Your Appointment?
          </h2>

          <p className="mt-6 text-lg text-slate-100 max-w-2xl mx-auto">
            Join thousands of happy patients and connect with experienced
            doctors today.
          </p>

          <div className="mt-10">
            <Link
              to="/doctors"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300 inline-block"
            >
              Explore Doctors
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;

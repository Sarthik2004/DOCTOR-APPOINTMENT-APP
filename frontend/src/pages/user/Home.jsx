import MainLayout from "../../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <section className="min-h-[90vh] flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-6xl font-bold leading-tight">

            Book Your

            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Doctor Appointment
            </span>

          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">

            Connect with experienced doctors and book appointments
            instantly from anywhere.

          </p>

          <div className="mt-10 flex justify-center gap-5">

            <button className="bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
              Book Now
            </button>

            <button className="border border-violet-500 px-7 py-3 rounded-xl hover:bg-violet-600/20 duration-300">
              Find Doctors
            </button>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Home;
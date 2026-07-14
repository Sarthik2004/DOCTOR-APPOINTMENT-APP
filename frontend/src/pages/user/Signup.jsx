import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-3xl p-8">

        <h2 className="text-4xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-slate-400 text-center mt-3">
          Join MediBook today
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-violet-500"
          />

          <button
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
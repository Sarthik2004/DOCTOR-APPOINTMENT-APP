import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-6">

      <div className="text-center">

        <div className="flex justify-center">
          <FaExclamationTriangle
            size={90}
            className="text-yellow-400"
          />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-white mt-6">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-4 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
        >
          ← Back to Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;
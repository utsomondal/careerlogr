import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  // countdown + redirect
  useEffect(() => {
    if (seconds === 0) {
      navigate("/dashboard");
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 font-body text-gray-400 px-6">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-full bg-accent/60 blur-xl"></div>
            {/* main circle */}
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-dark-800 border border-dark-700 shadow-inner">
              <FiAlertTriangle size={26} className="text-red-500 opacity-90" />
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-display text-white mb-2 tracking-wide">
          404
        </h1>
        <h2 className="text-lg font-medium text-white mb-2">Page not found</h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. <br />
          Redirecting in{" "}
          <span className="text-accent font-semibold">{seconds}</span>{" "}
          seconds...
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="px-5 py-2 rounded-lg bg-accent hover:opacity-90 text-white text-sm transition"
          >
            Go to Dashboard
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-sm text-gray-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

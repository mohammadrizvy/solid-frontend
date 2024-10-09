import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="/giphy.webp"
        alt="Error"
        className="w-64 h-64 mb-8"
      />
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist or an error occurred.
      </p>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-honey text-white font-semibold rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

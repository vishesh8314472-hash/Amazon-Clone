import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function NotFoundPage({ cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl md:text-[150px] font-bold text-gray-900 mb-4">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;

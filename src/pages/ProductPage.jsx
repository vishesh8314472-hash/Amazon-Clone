import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function ProductPage({ cartCount = 0, setCartCount = () => {} }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image Section */}
            <div className="flex items-center justify-center bg-white rounded-lg p-4 md:p-8 shadow-sm">
              <div
                className="w-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: "1" }}
              >
                <img
                  src="https://via.placeholder.com/400x400?text=Product+Image"
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col justify-start bg-white rounded-lg p-8">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Premium Product
                </h1>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Toggle Wishlist"
                >
                  {isWishlisted ? (
                    <FaHeart size={28} className="text-red-600" />
                  ) : (
                    <FiHeart
                      size={28}
                      className="text-gray-400 hover:text-gray-600"
                    />
                  )}
                </button>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-red-600">₹4,999</span>
                <span className="text-lg text-gray-500 line-through">
                  ₹9,999
                </span>
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  50% off
                </span>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">5★</span> 2,345
                  Ratings
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Description
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Experience premium quality with this outstanding product.
                  Designed with the latest technology and superior craftsmanship
                  to meet your needs.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>High-quality materials</li>
                  <li>Durable and long-lasting</li>
                  <li>Perfect for everyday use</li>
                  <li>Easy to use and maintain</li>
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Add to Cart
                </button>
                <button className="w-full bg-white border-2 border-orange-400 text-orange-400 hover:bg-orange-50 font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  Buy Now
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Free Delivery</span> on orders
                  over ₹500
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-semibold">Secure Payment</span> with
                  100% buyer protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;

// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Our Story */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Welcome to ShopSmart! We started with a simple mission — bring the
          best products to your doorstep with the most seamless shopping
          experience. Our team curates quality items and delivers them with care.
        </p>
        <img
          src="https://via.placeholder.com/400x250"
          alt="Our Story"
          className="rounded shadow"
        />
      </div>

      {/* Right: Buttons */}
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Browse Products
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default Home;

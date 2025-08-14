// In Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedbackModal from "./FeedbackModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        ShopSmart
      </div>

      {/* Menu Links */}
      <div className="flex items-center gap-6">
        <Link to="/about-us">About Us</Link>
        <Link to="/be-partner">Be Partner</Link>
        <button onClick={() => setFeedbackOpen(true)}>Feedback</button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Cart and Wishlist icons remain same */}
      </div>

      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </nav>
  );
};

export default Navbar;

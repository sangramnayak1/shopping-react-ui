import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Header({ cartCount, wishlistCount }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo click → Home */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer text-yellow-600"
        >
          ShopSmart
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
            <FaHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                {wishlistCount}
              </span>
            )}
          </div>
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-1 text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

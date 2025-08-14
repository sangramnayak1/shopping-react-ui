import React from "react";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-yellow-600 font-bold text-lg mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>

        {/* Add to Cart button at bottom */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

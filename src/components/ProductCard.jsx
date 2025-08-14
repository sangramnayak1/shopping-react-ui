import React from "react";

export default function ProductCard({ product, onViewDetails, onAddToCart }) {
  const getLabelClass = (label) => {
    switch (label) {
      case "Best Seller":
        return "bg-yellow-500 text-black";
      case "Offer":
        return "bg-red-500 text-white";
      case "New Arrival":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden relative">
      
      {/* Labels */}
      {product.flags && product.flags.length > 0 && (
        <div className="absolute top-2 left-2 space-y-1">
          {product.flags.map((flag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs rounded ${getLabelClass(flag)}`}
            >
              {flag}
            </span>
          ))}
        </div>
      )}

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => onViewDetails(product)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-yellow-600 font-bold">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-1 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onViewDetails(product)}
          className="mt-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-1 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// src/components/CheckoutModal.jsx
import React from "react";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[450px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {/* Mock order details */}
        <p>3 items, $150 total</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Payment</h3>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Card Number"
            className="border p-2 rounded w-full"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Expiry MM/YY"
              className="border p-2 rounded w-1/2"
            />
            <input
              type="text"
              placeholder="CVV"
              className="border p-2 rounded w-1/2"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Pay Now
          </button>
        </form>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const SaveForLaterModal = ({ onClose }) => {
  const { saveForLaterItems, moveBackToCart, removeFromSaveForLater } = useContext(CartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Save for Later</h2>
        {saveForLaterItems.length === 0 ? (
          <p>No items saved for later.</p>
        ) : (
          saveForLaterItems.map((item) => (
            <div key={item.id} className="border-b py-2 flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => moveBackToCart(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => removeFromSaveForLater(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveForLaterModal;

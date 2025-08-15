// src/components/CartModal.jsx
import { X } from 'lucide-react';
import { useCart } from '../contexts/CartContext.jsx';

export default function CartModal({ onClose }) {
  const { cart, saved, remove, moveToSaved, moveSavedToCart, removeSaved, clear } = useCart();
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div
      className="absolute right-4 top-[64px] z-50 w-full max-w-3xl bg-bg rounded-lg border border-border shadow-deep p-4"
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-lg font-semibold">Your Cart</div>
        <button className="btn-outline p-2 rounded-xl" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="divide-y divide-border max-h-[40vh] overflow-auto">
        {cart.length === 0 && (
          <div className="py-6 text-center text-muted">Cart is empty.</div>
        )}
        {cart.map((item) => (
          <div key={item.id} className="py-3 flex items-center gap-3">
            <img
              src={item.imageUrl?.[0]}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted">
                ₹{item.price} × {item.qty}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="btn-outline"
                onClick={() => moveToSaved(item)}
              >
                Save for Later
              </button>
              <button
                className="btn-outline"
                onClick={() => remove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="font-semibold">
          Total: ₹{total.toFixed(2)}
        </div>
        <div className="flex gap-2">
          <a href="/checkout" className="btn">
            Proceed to Checkout
          </a>
          <button className="btn-outline" onClick={clear}>
            Clear
          </button>
        </div>
      </div>

      {/* Saved for Later Section */}
      {saved.length > 0 && (
        <div className="mt-6 border-t border-border pt-4">
          <div className="text-lg font-semibold mb-2">Saved for Later</div>
          <div className="divide-y divide-border max-h-[20vh] overflow-auto">
            {saved.map((item) => (
              <div key={item.id} className="py-3 flex items-center gap-3">
                <img
                  src={item.imageUrl?.[0]}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted">₹{item.price}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="btn"
                    onClick={() => moveSavedToCart(item.id)}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => removeSaved(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

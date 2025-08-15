// Checkout.jsx
import { useState } from "react";
import { useCart } from "../contexts/CartContext.jsx";
import PaymentModal from "../components/PaymentModal.jsx";
import toast from "react-hot-toast";

export default function Checkout() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const grand = (totalAmount * 1.05 + (totalAmount > 0 ? 99 : 0)).toFixed(2)

  const handlePayment = () => {
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return;
    }
    setIsPaymentOpen(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length ? (
        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border p-3 rounded-lg"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}
          <div className="mt-3 text-sm flex justify-between">
            <span>Tax (5%)</span>
            <span>₹{(totalAmount * 0.05).toFixed(2)}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span>Delivery Charges</span>
            <span>₹{totalAmount > 0 ? 99 : 0}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{grand}</span>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="input w-full"
            >
              <option>Credit/Debit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
          </div>

          <button className="btn mt-5 w-full" onClick={handlePayment}>
            Proceed to Pay
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        paymentMethod={paymentMethod}
        amount={grand}
        cart={cart}
      />
    </div>
  );
}

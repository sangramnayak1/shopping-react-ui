import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(stored);
  }, []);

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleString();
  };

  if (!orders.length) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">No Orders Found</h1>
        <p className="text-gray-600">You haven’t placed any orders yet.</p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {orders.length === 0 && (
        <p className="text-gray-600">No orders yet.</p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`p-4 rounded shadow ${
              order.status === 'Paid'
                ? 'bg-green-50 border border-green-300'
                : 'bg-red-50 border border-red-300'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{order.orderName || 'Order'}</h3>
              <span
                className={`px-2 py-1 rounded text-sm font-medium ${
                  order.status === 'Paid'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-red-200 text-red-800'
                }`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-700">Order ID: {order.id}</p>
            <p className="text-sm text-gray-700">
              Date: {formatDate(order.date)}
            </p>
            <p className="text-sm text-gray-700">
              Customer: {order.customerName || 'N/A'}
            </p>
            <p className="text-sm text-gray-700">
              Mobile: {order.mobileNumber || 'N/A'}
            </p>
            <p className="text-sm text-gray-700">
              Delivery Address: {order.deliveryAddress || 'N/A'}
            </p>
            <p className="text-sm font-semibold mt-1">
              Amount: ₹{order.amount?.toFixed(2)}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Payment Method:</strong> {order.paymentMethod || "N/A"}
            </p>

            <div className="mt-3">
              <h4 className="font-medium">Items:</h4>
              {(order.items || []).length > 0 ? (
                <ul className="list-disc list-inside text-sm text-gray-800">
                  {(order.items || []).map((item, idx) => (
                    <li key={idx}>
                      {item.name} × {item.qty} — ₹
                      {(item.price * item.qty).toLocaleString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No items found</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

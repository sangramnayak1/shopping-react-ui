export default function Orders(){
  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="space-y-3">
        {orders.map(o => (
          <div key={o.id} className="card p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">Order #{o.id}</div>
              <div className="text-sm text-muted">{new Date(o.date).toLocaleString()}</div>
            </div>
            <div className="font-bold">₹{o.amount.toLocaleString()}</div>
            <div className="text-sm">{o.status}</div>
          </div>
        ))}
        {!orders.length && <div className="text-muted">No orders yet.</div>}
      </div>
    </section>
  )
}

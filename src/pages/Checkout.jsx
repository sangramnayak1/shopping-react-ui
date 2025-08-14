import { useCart } from '../contexts/CartContext.jsx'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const { cart, clear } = useCart()
  const navigate = useNavigate()
  const total = cart.reduce((a,c)=>a + c.price * c.qty, 0)
  const grand = (total*1.05 + (total>0?99:0))

  const payNow = () => {
    // mock payment + create a mock order in localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.unshift({
      id: Date.now(),
      amount: Number(grand.toFixed(2)),
      status: 'Paid',
      items: cart.map(({id,name,qty,price})=>({id,name,qty,price})),
      date: new Date().toISOString()
    })
    localStorage.setItem('orders', JSON.stringify(orders))
    clear()
    navigate('/orders')
  }

  return (
    <section className="my-6 grid lg:grid-cols-2 gap-6">
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <div className="space-y-2">
          {cart.map(item => (
            <div key={item.id} className="text-sm flex justify-between">
              <span>{item.name} × {item.qty}</span>
              <span>₹{(item.price*item.qty).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm flex justify-between"><span>Tax (5%)</span><span>₹{(total*0.05).toFixed(2)}</span></div>
        <div className="text-sm flex justify-between"><span>Delivery</span><span>₹{total>0?99:0}</span></div>
        <div className="mt-2 font-bold flex justify-between"><span>Total</span><span>₹{grand.toFixed(2)}</span></div>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Payment</h3>
        <p className="text-sm text-muted mb-3">Mock payment only. Click Pay Now to simulate success.</p>
        <div className="flex gap-2">
          <button className="btn" onClick={payNow}>Pay Now</button>
          <button className="btn-outline" onClick={()=>history.back()}>Go Back</button>
        </div>
      </div>
    </section>
  )
}

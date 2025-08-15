import { X } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'

export default function CartModal({ onClose }){
  const { cart, remove, moveToSaved, clear } = useCart()
  const total = cart.reduce((a,c)=>a + c.price * c.qty, 0)

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-bg w-full max-w-3xl rounded-lg border border-border shadow-deep p-4" onClick={e=>e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg font-semibold">Your Cart</div>
          <button className="btn-outline p-2 rounded-xl" onClick={onClose}><X size={18}/></button>
        </div>
        <div className="divide-y divide-border max-h-[60vh] overflow-auto">
          {cart.length === 0 && <div className="py-6 text-center text-muted">Cart is empty.</div>}
          {cart.map(item => (
            <div key={item.id} className="py-3 flex items-center gap-3">
              <img src={item.imageUrl?.[0]} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted">₹{item.price} × {item.qty}</div>
              </div>
              <div className="flex gap-2">
                <button className="btn-outline" onClick={()=>moveToSaved(item)}>Save for Later</button>
                <button className="btn-outline" onClick={()=>remove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="font-semibold">Total: ₹{total.toFixed(2)}</div>
          <div className="flex gap-2">
            <a href="/checkout" className="btn">Proceed to Checkout</a>
            <button className="btn-outline" onClick={clear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}
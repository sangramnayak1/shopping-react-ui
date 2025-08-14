import { useCart } from '../contexts/CartContext.jsx'
import { useWishlist } from '../contexts/WishlistContext.jsx'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { cart, remove, updateQty, moveToWishlist, moveToSaved } = useCart()
  const { add: addToWishlist } = useWishlist()
  const total = cart.reduce((a,c)=>a + c.price * c.qty, 0)

  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="card p-4 flex items-center gap-4">
              <img src={item.imageUrl[0]} className="w-24 h-24 object-cover rounded-xl" />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-muted">₹{item.price.toLocaleString()}</div>
                <div className="mt-2 flex items-center gap-2">
                  <label className="text-sm">Qty</label>
                  <input type="number" min="1" className="input w-20" value={item.qty} onChange={e=>updateQty(item.id, Number(e.target.value))} />
                </div>
                <div className="mt-2 flex gap-2">
                  <button className="btn-outline" onClick={()=>moveToWishlist(item, addToWishlist)}>Move to Wishlist</button>
                  <button className="btn-outline" onClick={()=>moveToSaved(item)}>Save for Later</button>
                  <button className="btn-outline" onClick={()=>remove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          {!cart.length && <div className="text-muted">Your cart is empty.</div>}
        </div>
        <div className="card p-4 h-fit">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <div className="text-sm flex justify-between"><span>Subtotal</span><span>₹{total.toLocaleString()}</span></div>
          <div className="text-sm flex justify-between"><span>Tax (5%)</span><span>₹{(total*0.05).toFixed(2)}</span></div>
          <div className="text-sm flex justify-between"><span>Delivery</span><span>₹{total>0?99:0}</span></div>
          <div className="mt-2 font-bold flex justify-between"><span>Total</span><span>₹{(total*1.05 + (total>0?99:0)).toFixed(2)}</span></div>
          <Link to="/checkout" className="btn w-full mt-3 text-center">Proceed to Checkout</Link>
        </div>
      </div>
    </section>
  )
}

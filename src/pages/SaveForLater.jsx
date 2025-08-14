import { useCart } from '../contexts/CartContext.jsx'
import { useWishlist } from '../contexts/WishlistContext.jsx'

export default function SaveForLater(){
  const { saved, moveSavedToCart, removeSaved } = useCart()
  const { add: addToWishlist } = useWishlist()

  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Saved for Later</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {saved.map(item => (
          <div key={item.id} className="card overflow-hidden">
            <img src={item.imageUrl[0]} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{item.name}</div>
              <div className="text-primary font-bold">₹{item.price.toLocaleString()}</div>
              <div className="mt-3 flex gap-2">
                <button className="btn" onClick={()=>moveSavedToCart(item.id)}>Move to Cart</button>
                <button className="btn-outline" onClick={()=>addToWishlist(item)}>Move to Wishlist</button>
                <button className="btn-outline" onClick={()=>removeSaved(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!saved.length && <div className="text-muted">Nothing saved for later.</div>}
    </section>
  )
}

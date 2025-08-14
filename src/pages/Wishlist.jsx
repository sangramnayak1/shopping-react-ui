import { useWishlist } from '../contexts/WishlistContext.jsx'
import { useCart } from '../contexts/CartContext.jsx'

export default function Wishlist(){
  const { wishlist, remove, moveToCart } = useWishlist()
  const { add: addToCart } = useCart()

  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {wishlist.map(item => (
          <div key={item.id} className="card overflow-hidden">
            <img src={item.imageUrl[0]} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{item.name}</div>
              <div className="text-primary font-bold">₹{item.price.toLocaleString()}</div>
              <div className="mt-3 flex gap-2">
                <button className="btn" onClick={()=>moveToCart(item, addToCart)}>Move to Cart</button>
                <button className="btn-outline" onClick={()=>remove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!wishlist.length && <div className="text-muted">Your wishlist is empty.</div>}
    </section>
  )
}

import { useCart } from '../contexts/CartContext.jsx'
import { useWishlist } from '../contexts/WishlistContext.jsx'
import { useState } from 'react'
import ProductModal from './ProductModal.jsx'

export default function ProductCard({ product }){
  const { add: addToCart } = useCart()
  const { add: addToWishlist } = useWishlist()
  const [open, setOpen] = useState(false)

  return (
    <div className="card overflow-hidden flex flex-col">
      <button onClick={()=>setOpen(true)} className="relative w-full aspect-[4/3] overflow-hidden">
        <img src={product.imageUrl[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition" />
      </button>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{product.name}</h3>
          <div className="text-primary font-bold">₹{product.price.toLocaleString()}</div>
        </div>
        <div className="mt-1 text-sm text-muted">⭐ {product.rating} · {product.category}</div>
        <div className="mt-3 flex gap-2">
          <button className="btn flex-1" onClick={()=>addToCart(product,1)}>Add to Cart</button>
          <button className="btn-outline flex-1" onClick={()=>setOpen(true)}>View Details</button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.flags?.map(f => <span key={f} className="text-xs px-2 py-0.5 rounded-full border border-border">{f}</span>)}
        </div>
      </div>
      {open && <ProductModal product={product} onClose={()=>setOpen(false)} onAdd={()=>addToCart(product,1)} onWish={()=>addToWishlist(product)} />}
    </div>
  )
}

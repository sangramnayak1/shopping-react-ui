import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useProducts } from '../contexts/ProductContext.jsx'
import { useState } from 'react'

export default function ProductModal({ product, onClose, onAdd, onWish }){
  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [onClose])

  const [slide, setSlide] = useState(0)
  const next = () => setSlide(s => (s + 1) % product.imageUrl.length)
  const prev = () => setSlide(s => (s - 1 + product.imageUrl.length) % product.imageUrl.length)

  const { addComment } = useProducts()
  const [username, setUsername] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  const submit = async (e) => {
    e.preventDefault()
    if(!username || !text) return
    await addComment(product.id, { user: username, text, rating: Number(rating) })
    setUsername(''); setText(''); setRating(5)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-bg max-w-4xl w-full mx-4 rounded-2xl shadow-deep border border-border grid md:grid-cols-2">
        <button className="absolute right-2 top-2 btn-outline p-2 rounded-xl" onClick={onClose}><X size={18}/></button>
        <div className="relative rounded-l-2xl overflow-hidden">
          <img src={product.imageUrl[slide]} className="w-full h-full object-cover" />
          {product.imageUrl.length > 1 && (
            <div className="absolute inset-x-0 bottom-3 mx-auto w-fit flex gap-2">
              <button className="btn-outline px-3 py-1" onClick={prev}>Prev</button>
              <button className="btn-outline px-3 py-1" onClick={next}>Next</button>
            </div>
          )}
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <div className="text-sm text-muted">{product.category}</div>
          <div className="mt-2 text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</div>
          <div className="mt-1">⭐ {product.rating} average</div>
          <p className="mt-3 text-sm">{product.description}</p>
          <div className="mt-4 flex gap-2">
            <button className="btn" onClick={onAdd}>Add to Cart</button>
            <button className="btn-outline" onClick={onWish}>Add to Wishlist</button>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Comments</h4>
            <div className="space-y-2 max-h-40 overflow-auto pr-2">
              {product.comments?.map((c, i) => (
                <div key={i} className="border border-border rounded-xl p-2">
                  <div className="text-sm font-medium">{c.user} <span className="text-xs text-muted">({c.rating}★)</span></div>
                  <div className="text-sm">{c.text}</div>
                </div>
              ))}
              {!product.comments?.length && <div className="text-sm text-muted">No comments yet.</div>}
            </div>
            <form onSubmit={submit} className="mt-3 grid gap-2">
              <input className="input" placeholder="Your name" value={username} onChange={e=>setUsername(e.target.value)} />
              <textarea className="input" rows="3" placeholder="Your comment" value={text} onChange={e=>setText(e.target.value)} />
              <div className="flex items-center gap-2">
                <label className="text-sm">Rating:</label>
                <select className="input w-24" value={rating} onChange={e=>setRating(e.target.value)}>
                  {[5,4,3,2,1].map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <button className="btn w-fit">Add Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

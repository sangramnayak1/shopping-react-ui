import { useCart } from '../contexts/CartContext.jsx'

export default function SaveForLater(){
  const { saved, moveSavedToCart, removeSaved } = useCart()

  return (
    <section className="my-6">
      <div className="card p-4">
        <h2 className="text-xl font-semibold mb-3">Save for Later</h2>
        {saved.length === 0 ? (
          <div className="text-muted">No saved items.</div>
        ) : (
          <div className="divide-y divide-border">
            {saved.map(item => (
              <div key={item.id} className="py-3 flex items-center gap-3">
                <img src={item.imageUrl?.[0]} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted">₹{item.price}</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn" onClick={()=>moveSavedToCart(item.id)}>Move to Cart</button>
                  <button className="btn-outline" onClick={()=>removeSaved(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  const [saved, setSaved] = useState(() => JSON.parse(localStorage.getItem('saved') || '[]'))

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('saved', JSON.stringify(saved)), [saved])

  const add = (product, qty = 1) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p)
      return [...prev, { ...product, qty }]
    })
  }
  const remove = id => setCart(prev => prev.filter(p => p.id !== id))
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
  const moveToWishlist = (product, addToWishlist) => {
    remove(product.id); addToWishlist(product)
  }
  const moveToSaved = product => { remove(product.id); setSaved(prev => [...prev, product]) }
  const moveSavedToCart = id => {
    setSaved(prev => {
      const item = prev.find(s => s.id === id)
      if (!item) return prev
      add(item, 1)
      return prev.filter(s => s.id !== id)
    })
  }
  const removeSaved = id => setSaved(prev => prev.filter(s => s.id !== id))

  const clear = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, saved, add, remove, updateQty, moveToWishlist, moveToSaved, moveSavedToCart, removeSaved, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

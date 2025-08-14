import { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist') || '[]'))
  useEffect(() => localStorage.setItem('wishlist', JSON.stringify(wishlist)), [wishlist])

  const add = (product) => setWishlist(prev => prev.find(p => p.id === product.id) ? prev : [...prev, product])
  const remove = (id) => setWishlist(prev => prev.filter(p => p.id !== id))
  const moveToCart = (product, addToCart) => { remove(product.id); addToCart(product, 1) }
  const clear = () => setWishlist([])

  return (
    <WishlistContext.Provider value={{ wishlist, add, remove, moveToCart, clear }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)

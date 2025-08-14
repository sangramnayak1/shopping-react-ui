import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Heart, User, Sun, Moon } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'
import { useWishlist } from '../contexts/WishlistContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { useState } from 'react'

export default function Header() {
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const isLoggedIn = !!localStorage.getItem('token')

  const navClass = ({ isActive }) =>
    'px-3 py-2 rounded-xl transition ' + (isActive ? 'bg-card border border-border' : 'hover:bg-card')

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">ShopSmart</Link>
        <nav className="hidden md:flex gap-2">
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/products">Products</NavLink>
          <NavLink className={navClass} to="/wishlist">Wishlist</NavLink>
          <NavLink className={navClass} to="/cart">Cart</NavLink>
          <NavLink className={navClass} to="/profile">Profile</NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button className="btn-outline p-2 rounded-xl" onClick={toggle} aria-label="Toggle theme">
            {theme === 'bright' ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <NavLink to="/wishlist" className="relative btn-outline p-2 rounded-xl" aria-label="Wishlist">
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-primaryText px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="relative btn-outline p-2 rounded-xl" aria-label="Cart">
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-primaryText px-1.5 py-0.5 rounded-full">
                {cart.reduce((a,c)=>a+c.qty,0)}
              </span>
            )}
          </NavLink>

          <div className="relative">
            <button className="btn-outline gap-2" onClick={()=>setOpen(v=>!v)}>
              <User size={18}/>
              Account
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 card p-2">
                {!isLoggedIn ? (
                  <div className="flex flex-col">
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/profile" onClick={()=>setOpen(false)}>Login</Link>
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/profile" onClick={()=>setOpen(false)}>Register</Link>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/profile" onClick={()=>setOpen(false)}>Profile</Link>
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/logout" onClick={()=>setOpen(false)}>Logout</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

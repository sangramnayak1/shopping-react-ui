import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart, Heart, User, Sun, Moon } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'
import { useWishlist } from '../contexts/WishlistContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { useState, useEffect } from 'react'
import CartModal from './CartModal.jsx'
import WishlistModal from './WishlistModal.jsx'

export default function Header() {
  const location = useLocation();
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const { theme, toggle } = useTheme()

  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishOpen, setWishOpen] = useState(false)

  // ✅ Store logged-in user
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setOpen(false);
  }, [location]);

  const navClass = ({ isActive }) =>
    'px-3 py-2 rounded-xl transition ' + (isActive ? 'bg-card border border-border' : 'hover:bg-card')

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">ShopSmart</Link>

        <nav className="hidden md:flex gap-2">
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/products">Products</NavLink>
          <NavLink className={navClass} to="/partner">Be Partner</NavLink>
          <NavLink className={navClass} to="/about">About Us</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {/* Theme toggle */}
          <button className="btn-outline p-2 rounded-xl" onClick={toggle} aria-label="Toggle theme">
            {theme === 'bright' ? <Moon size={18}/> : <Sun size={18}/>}
          </button>

          {/* Wishlist */}
          <button onClick={()=>setWishOpen(true)} className="relative btn-outline p-2 rounded-xl" aria-label="Wishlist">
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-primaryText px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button onClick={()=>setCartOpen(true)} className="relative btn-outline p-2 rounded-xl" aria-label="Cart">
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-primaryText px-1.5 py-0.5 rounded-full">
                {cart.reduce((a,c)=>a+c.qty,0)}
              </span>
            )}
          </button>

          {/* Account dropdown */}
          <div className="relative">
            <button className="btn-outline gap-2 items-center" onClick={() => setOpen(v => !v)}>
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <User size={18} />
              )}
              {user ? `Hi, ${user.name.split(' ')[0]} 👋` : 'Account'}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-52 card p-3 shadow-lg">
                {!user ? (
                  <div className="flex flex-col">
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/login" onClick={() => setOpen(false)}>Login</Link>
                    <Link className="px-3 py-2 hover:bg-bg rounded-lg" to="/register" onClick={() => setOpen(false)}>Register</Link>
                  </div>
                ) : (
                  <>
                    {/* Profile summary at top */}
                    <div className="flex items-center gap-3 p-2 border-b border-border">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <User size={20} />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    {/* Menu items */}
                    <div className="flex flex-col mt-2">
                      <Link to="/profile" className="px-3 py-2 hover:bg-bg rounded-lg" onClick={() => setOpen(false)}>Profile</Link>
                      <Link to="/orders" className="px-3 py-2 hover:bg-bg rounded-lg" onClick={() => setOpen(false)}>Orders</Link>
                      <Link to="/complaints" className="px-3 py-2 hover:bg-bg rounded-lg" onClick={() => setOpen(false)}>Complaints</Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem('token');
                          localStorage.removeItem('user');
                          setUser(null);
                          window.location.reload();
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-bg rounded-lg text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {cartOpen && <CartModal onClose={()=>setCartOpen(false)} />}
      {wishOpen && <WishlistModal onClose={()=>setWishOpen(false)} />}
    </header>
  )
}

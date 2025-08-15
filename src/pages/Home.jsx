import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="mt-8 md:mt-12">
      <div className="card overflow-hidden p-0">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 bg-gradient-to-b from-primary/10 to-accent/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Story</h2>
            <p className="text-muted">
              We started ShopSmart with a simple idea: blend luxury design with bright, modern shopping.
              From curated collections to a seamless cart & checkout, everything is crafted for delight.
            </p>
          </div>
          <div className="p-8 md:p-12 flex items-center justify-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Luxury meets Bright – shop your way.</h1>
              <p className="mt-2 text-muted">Explore curated products with a premium, responsive UI.</p>
              <div className="mt-4 flex gap-3">
                <Link className="btn" to="/products">Browse Products</Link>
                <Link className="btn-outline" to="/cart">View Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
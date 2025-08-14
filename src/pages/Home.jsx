import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="mt-8 md:mt-12">
      <div className="card overflow-hidden">
        <div className="p-10 md:p-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <h1 className="text-3xl md:text-4xl font-bold">Luxury meets Bright – shop your way.</h1>
          <p className="mt-2 text-muted">Explore curated products with a premium, responsive UI.</p>
          <div className="mt-4 flex gap-3">
            <Link className="btn" to="/products">Browse Products</Link>
            <Link className="btn-outline" to="/cart">View Cart</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

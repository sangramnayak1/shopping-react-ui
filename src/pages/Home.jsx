import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section id="home-section" 
      className="mt-8 md:mt-12 py-16 bg-gradient-to-br from-bg rounded-lg shadow-md mb-12 transition-colors"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        
        {/* Left Text Section */}
        <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Luxury meets Bright – shop your way.
              </h1>
              <p className="text-muted mb-6">
                Explore curated products with a premium, responsive UI.
              </p>
              <div className="flex gap-3 justify-center">
                <Link className="btn" to="/products">Browse Products</Link>
                <Link className="btn-outline" to="/cart">View Cart</Link>
              </div>
            </div>
          </div>
    </section>
  )
}

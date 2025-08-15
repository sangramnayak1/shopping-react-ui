import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about-us-section" 
      className="mt-8 md:mt-12 py-16 bg-gradient-to-br from-bg rounded-lg shadow-md mb-12 transition-colors"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At ShopSmart, we believe every piece of jewelry tells a story. Founded on the principle of
            uncompromising craftsmanship and timeless design, our collection is curated to celebrate life's
            most precious moments. From the initial sketch to the final polish, each item is a testament to
            our passion for creating beautiful, lasting treasures.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We are committed to ethical sourcing and sustainability, ensuring that our jewelry not only
            looks good but also does good. Join us in our journey to adorn the world with elegance and light.
          </p>
        </div>
        
        {/* Right Image Section */}
        <div className="md:w-1/3">
          <img 
            src="https://placehold.co/400x500/cccccc/333333?text=Our+Story" 
            alt="About Us" 
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        
      </div>
    </section>
  )
}

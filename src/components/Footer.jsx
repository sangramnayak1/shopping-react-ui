export default function Footer(){
  return (
    <footer className="mt-10 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-muted">
            ShopSmart curates premium goods with a luxe aesthetic and modern service.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: hello@shopsmart.store</p>
          <p className="text-sm">Phone: +91-99999-00000</p>
          <p className="text-sm">Location: Bengaluru, IN</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <div className="flex gap-2">
            <input className="input" placeholder="Email address" />
            <button className="btn">Subscribe</button>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Feedback</h4>
            <form className="mt-2 grid gap-2">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" />
              <textarea className="input" rows="3" placeholder="Message"></textarea>
              <button className="btn w-fit">Send</button>
            </form>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow</h3>
          <div className="flex gap-3 text-sm">
            <a className="btn-outline px-3 py-1 rounded-lg" href="#" target="_blank">Facebook</a>
            <a className="btn-outline px-3 py-1 rounded-lg" href="#" target="_blank">Instagram</a>
            <a className="btn-outline px-3 py-1 rounded-lg" href="#" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border text-center text-sm py-3">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  )
}

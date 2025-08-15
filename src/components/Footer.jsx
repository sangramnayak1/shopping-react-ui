import { useState } from "react"

const Icon = ({ path, label }) => (
  <svg aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path d={path} fill="currentColor" />
  </svg>
)

const icons = {
  facebook: "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.3V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z",
  twitter: "M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35 8.6 8.6 0 0 1-2.72 1.04A4.27 4.27 0 0 0 12 8.27a12.12 12.12 0 0 1-8.8-4.46A4.27 4.27 0 0 0 5.34 9a4.24 4.24 0 0 1-1.93-.05 4.27 4.27 0 0 0 3.98 2.96 8.57 8.57 0 0 1-5.31 1.84A8.27 8.27 0 0 1 2 13.7 12.09 12.09 0 0 0 8.56 15.5c7.25 0 11.22-6 11.22-11.22 0-.17 0-.34-.01-.51A8 8 0 0 0 22.46 6z",
  whatsapp: "M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 3.48 8.52L2 24l3.67-.96A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-2.17.57.58-2.11-.23-.37A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.46-7.54c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.29-.77.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.48-1.76-1.65-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.43 0 1.43 1.06 2.81 1.21 3.01.15.2 2.09 3.19 5.06 4.47.71.31 1.26.5 1.69.64.71.23 1.36.2 1.88.12.57-.08 1.78-.73 2.04-1.45.26-.72.26-1.34.18-1.48-.08-.14-.28-.22-.58-.37z",
  youtube: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19 3.5 12 3.5 12 3.5s-7 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.6 0 12 0 12s0 3.4.5 5.8a3 3 0 0 0 2.1 2.1c2.4.6 9.4.6 9.4.6s7 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.4 24 12 24 12s0-3.4-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
}

export default function Footer(){
  const [openFeedback, setOpenFeedback] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <footer className="mt-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="text-base font-semibold mb-2">About Us</h3>
          <p className="text-muted">
            ShopSmart curates premium goods with a luxe aesthetic and modern service.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Contact Us</h3>
          <p>Email: hello@shopsmart.store</p>
          <p>Phone: +91-99999-00000</p>
          <p>Location: Bengaluru, IN</p>
          <button className="mt-2 underline hover:no-underline" onClick={()=>setOpenFeedback(true)}>
            Feedback
          </button>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Stay Updated</h3>
          <div className="flex gap-2">
            <input
              className="input max-w-xs w-full"
              placeholder="Enter your email"
              value={email}
              onChange={e=>setEmail(e.target.value)} />
            <button className="btn">Subscribe</button>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Follow</h3>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg hover:bg-bg"><Icon path={icons.facebook} label="Facebook"/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-bg"><Icon path={icons.instagram} label="Instagram"/></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg hover:bg-bg"><Icon path={icons.twitter} label="Twitter"/></a>
            <a href="#" aria-label="WhatsApp" className="p-2 rounded-lg hover:bg-bg"><Icon path={icons.whatsapp} label="WhatsApp"/></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-lg hover:bg-bg"><Icon path={icons.youtube} label="YouTube"/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border text-center text-xs py-3">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>

      {/* Feedback Modal */}
      {openFeedback && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center p-4" onClick={()=>setOpenFeedback(false)}>
          <div className="bg-bg w-full max-w-md rounded-2xl border border-border shadow-deep p-4" onClick={e=>e.stopPropagation()}>
            <div className="text-lg font-semibold mb-2">Feedback</div>
            <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks for the feedback!')}}>
              <input className="input w-full" placeholder="Name" required />
              <input className="input w-full" placeholder="Email" type="email" required />
              <textarea className="input w-full h-24" placeholder="Message" required />
              <div className="flex justify-end gap-2">
                <button type="button" className="btn-outline" onClick={()=>setOpenFeedback(false)}>Cancel</button>
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  )
}
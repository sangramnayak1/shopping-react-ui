export default function Partner(){
  return (
    <section className="my-6">
      <div className="card p-6 max-w-2xl">
        <h1 className="text-xl font-semibold mb-2">Be Partner</h1>
        <p className="text-sm text-muted mb-4">Join our partner program. Submit your details and we will reach out.</p>
        <form className="grid md:grid-cols-2 gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Submitted!')}}>
          <input className="input" placeholder="Business Name" required />
          <input className="input" placeholder="Contact Person" required />
          <input className="input" placeholder="Email" type="email" required />
          <input className="input" placeholder="Phone" required />
          <input className="input md:col-span-2" placeholder="Website (optional)" />
          <textarea className="input md:col-span-2 h-24" placeholder="Tell us about your products" />
          <div className="md:col-span-2 flex justify-end">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
import { useState } from 'react'

export default function Profile(){
  const stored = JSON.parse(localStorage.getItem('profile') || '{}')
  const [form, setForm] = useState({
    name: stored.name || '',
    username: stored.username || '',
    dob: stored.dob || '',
    mobile: stored.mobile || '',
    email: stored.email || '',
    homeAddress: stored.homeAddress || '',
    otherAddress: stored.otherAddress || '',
    password: ''
  })

  const onChange = (e) => setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  const onSave = (e) => {
    e.preventDefault()
    localStorage.setItem('profile', JSON.stringify({...form, password: undefined}))
    alert('Profile saved')
  }

  return (
    <section className="my-6">
      <form className="card p-6 grid md:grid-cols-2 gap-4" onSubmit={onSave}>
        <h2 className="md:col-span-2 text-xl font-semibold">Account</h2>
        <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input className="input" name="username" placeholder="Username" value={form.username} onChange={onChange} required />
        <input className="input" type="date" name="dob" placeholder="DOB" value={form.dob} onChange={onChange} />
        <input className="input" name="mobile" placeholder="Mobile" value={form.mobile} onChange={onChange} />
        <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input className="input md:col-span-2" name="homeAddress" placeholder="Home Address" value={form.homeAddress} onChange={onChange} />
        <input className="input md:col-span-2" name="otherAddress" placeholder="Other Address" value={form.otherAddress} onChange={onChange} />
        <div className="md:col-span-2">
          <label className="text-sm text-muted">Reset Password</label>
          <input className="input mt-1" type="password" name="password" placeholder="New Password" value={form.password} onChange={onChange} />
        </div>
        <div className="md:col-span-2 flex justify-end gap-2">
          <button className="btn">Save</button>
        </div>
      </form>
    </section>
  )
}
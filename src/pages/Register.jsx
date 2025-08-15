import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const nav = useNavigate()
  const [form, setForm] = useState({
    name: '', username: '', dob: '', mobile: '', email: '', homeAddress: '', otherAddress: '', password: ''
  })
  const onChange = e => setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  const onSubmit = e => {
    e.preventDefault()
    localStorage.setItem('profile', JSON.stringify({...form, password: undefined}))
    localStorage.setItem('token', 'mock-jwt')
    alert('Registered successfully')
    nav('/')
  }
  return (
    <section className="my-6">
      <form className="card p-6 grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
        <h2 className="md:col-span-2 text-xl font-semibold">Create Account</h2>
        <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input className="input" name="username" placeholder="Username" value={form.username} onChange={onChange} required />
        <input className="input" type="date" name="dob" placeholder="DOB" value={form.dob} onChange={onChange} />
        <input className="input" name="mobile" placeholder="Mobile" value={form.mobile} onChange={onChange} />
        <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input className="input md:col-span-2" name="homeAddress" placeholder="Home Address" value={form.homeAddress} onChange={onChange} />
        <input className="input md:col-span-2" name="otherAddress" placeholder="Other Address" value={form.otherAddress} onChange={onChange} />
        <div className="md:col-span-2">
          <label className="text-sm text-muted">Password</label>
          <input className="input mt-1" type="password" name="password" placeholder="Set Password" value={form.password} onChange={onChange} required />
        </div>
        <div className="md:col-span-2 flex justify-end gap-2">
          <button className="btn">Register</button>
        </div>
      </form>
    </section>
  )
}
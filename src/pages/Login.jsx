// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Mock user object
    const mockUser = {
      name: 'Sangram Nayak',
      email: email || 'sangram@example.com',
    };

    // Store in localStorage so Header can use it
    localStorage.setItem('user', JSON.stringify(mockUser));

    // Go to home page after login
    navigate('/');
    window.location.reload(); // refresh to update header
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input mb-3 w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input mb-3 w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          New here?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

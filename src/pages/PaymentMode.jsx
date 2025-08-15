import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'

export default function PaymentMode() {
  const location = useLocation()
  const navigate = useNavigate()
  const { clear } = useCart()
  const { cart, grand, paymentMethod } = location.state || {}

  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(30)
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    upi: '',
    netbanking: ''
  })

  if (!cart) {
    return <p className="text-center mt-10">No payment data found. Please go back to checkout.</p>
  }

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(t => t - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [timer])

  const handleSubmit = () => {
    if (!otp || otp.length < 4) {
      alert('Please enter a valid OTP.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]')
      orders.unshift({
        id: Date.now(),
        amount: Number(grand),
        status: 'Paid',
        paymentMethod,
        items: cart,
        date: new Date().toISOString()
      })
      localStorage.setItem('orders', JSON.stringify(orders))
      clear()
      navigate('/orders')
    }, 2000)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-w-lg w-full mx-4 card p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl"
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <h2 className="text-xl font-bold mb-4">
            Complete Payment <span className="text-primary">({paymentMethod})</span>
          </h2>

          {/* Payment Method Fields */}
          {paymentMethod === 'Credit/Debit Card' && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                value={formData.expiry}
                onChange={e => setFormData({ ...formData, expiry: e.target.value })}
                className="input w-full"
              />
              <input
                type="password"
                placeholder="CVV"
                value={formData.cvv}
                onChange={e => setFormData({ ...formData, cvv: e.target.value })}
                className="input w-full"
              />
            </div>
          )}

          {paymentMethod === 'UPI' && (
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={formData.upi}
              onChange={e => setFormData({ ...formData, upi: e.target.value })}
              className="input w-full mb-3"
            />
          )}

          {paymentMethod === 'Net Banking' && (
            <input
              type="text"
              placeholder="Bank Name"
              value={formData.netbanking}
              onChange={e => setFormData({ ...formData, netbanking: e.target.value })}
              className="input w-full mb-3"
            />
          )}

          {/* OTP */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className="input flex-1"
            />
            {timer > 0 ? (
              <span className="text-sm text-muted flex items-center">Resend in {timer}s</span>
            ) : (
              <button
                className="btn-outline px-3"
                onClick={() => {
                  setTimer(30)
                  alert('New OTP sent! (mock)')
                }}
              >
                Resend OTP
              </button>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-5">
            <button className="btn-outline" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button className="btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Processing...' : 'Submit Payment'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

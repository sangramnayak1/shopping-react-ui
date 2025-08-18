import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext.jsx'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function PaymentModal({ isOpen, onClose, paymentMethod, amount, cart = [] }) {
  const navigate = useNavigate()
  const { clear } = useCart()

  const [stage, setStage] = useState('details') // details -> otp -> processing
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    upi: '',
    netbanking: ''
  })

  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(30)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  // OTP Timer countdown
  useEffect(() => {
    if (stage === 'otp' && timer > 0) {
      const countdown = setTimeout(() => setTimer((t) => t - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [timer, stage])

  const handleProceed = () => {
    if (paymentMethod === 'Credit/Debit Card') {
      if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
        alert('Please fill in all card details.')
        return
      }
    }
    if (paymentMethod === 'UPI' && !formData.upi) {
      alert('Please enter UPI ID.')
      return
    }
    if (paymentMethod === 'Net Banking' && !formData.netbanking) {
      alert('Please enter Bank Name.')
      return
    }
    setStage('otp')
  }

  const handleSubmit = () => {
    if (otp.length < 6) {
      setError('Please enter a valid 6-digit OTP.')
      setShake(true)
      setTimeout(() => setShake(false), 400)
      return
    }

    // Simulate OTP fail if it's not "123456"
    if (otp !== '123456') {
      setError('Invalid OTP. Payment failed.')
      setShake(true)
      setTimeout(() => setShake(false), 400)
      return
    }

    // Proceed with fake payment processing
    setStage('processing')
    setLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]')
            orders.unshift({
              id: uuidv4(),
              trxnId: uuidv4(),
              amount: Number(amount),
              status: 'Paid',
              paymentMethod,
              items: cart,
              date: new Date().toISOString()
            })
            localStorage.setItem('orders', JSON.stringify(orders))
            clear()
            onClose()
            navigate('/orders', { state: { paymentStatus: 'success' } })
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-w-lg w-full mx-4 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-xl font-bold mb-4">
              Complete Payment <span className="text-primary">({paymentMethod})</span>
            </h2>

            {/* STAGE 1: Payment Details */}
            {stage === 'details' && (
              <>
                {paymentMethod === 'Credit/Debit Card' && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="input w-full"
                    />
                    <input
                      type="text"
                      placeholder="Expiry (MM/YY)"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="input w-full"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="input w-full"
                    />
                  </div>
                )}

                {paymentMethod === 'UPI' && (
                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={formData.upi}
                    onChange={(e) => setFormData({ ...formData, upi: e.target.value })}
                    className="input w-full mb-3"
                  />
                )}

                {paymentMethod === 'Net Banking' && (
                  <input
                    type="text"
                    placeholder="Bank Name"
                    value={formData.netbanking}
                    onChange={(e) => setFormData({ ...formData, netbanking: e.target.value })}
                    className="input w-full mb-3"
                  />
                )}

                <div className="flex justify-end gap-2 mt-5">
                  <button className="btn-outline" onClick={onClose}>
                    Cancel
                  </button>
                  <button className="btn" onClick={handleProceed}>
                    Proceed to OTP
                  </button>
                </div>
              </>
            )}

            {/* STAGE 2: OTP */}
            {stage === 'otp' && (
              <>
                {error && (
                  <motion.div
                    className="text-red-500 mb-3 text-center flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    ⚠️ {error}
                  </motion.div>
                )}

                <p className="mb-3">OTP sent to your registered mobile number.</p>

                <motion.div
                  animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="flex gap-2 justify-center mb-3"
                >
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength="1"
                      value={otp[idx] || ''}
                      onChange={(e) => {
                        let val = e.target.value.replace(/[^0-9]/g, '')
                        const newOtp = otp.split('')
                        newOtp[idx] = val
                        setOtp(newOtp.join(''))
                        setError('')
                        if (val && idx < 5) {
                          document.getElementById(`otp-${idx + 1}`).focus()
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
                          document.getElementById(`otp-${idx - 1}`).focus()
                        }
                      }}
                      onPaste={(e) => {
                        e.preventDefault()
                        const paste = e.clipboardData.getData('text').replace(/[^0-6]/g, '').slice(0, 6)
                        if (paste) setOtp(paste)
                      }}
                      id={`otp-${idx}`}
                      className="w-10 h-12 border rounded text-center text-lg font-bold focus:border-blue-500 outline-none"
                    />
                  ))}
                </motion.div>

                {/* OTP timer / resend */}
                <div className="text-center mb-4">
                  {timer > 0 ? (
                    <span className="text-sm text-muted">Resend in {timer}s</span>
                  ) : (
                    <button
                      className="btn-outline px-3 text-sm"
                      onClick={() => {
                        setTimer(30)
                        alert('New OTP sent! (mock)')
                      }}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <div className="flex justify-end gap-2 mt-5">
                  <button className="btn-outline" onClick={onClose}>
                    Cancel
                  </button>
                  <button className="btn" onClick={handleSubmit} disabled={loading}>
                    Submit Payment
                  </button>
                </div>
              </>
            )}

            {/* STAGE 3: Processing */}
            {stage === 'processing' && (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-16 h-16 mb-4">
                  <svg
                    className="animate-spin text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p>Processing Payment... {progress}%</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

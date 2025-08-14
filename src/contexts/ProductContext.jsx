import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchProducts, addComment as addCommentApi } from '../services/api.js'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (e) {
        setError('Failed to load products.')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const addComment = async (id, comment) => {
    const updated = await addCommentApi(id, comment)
    setProducts(updated)
  }

  const value = useMemo(() => ({ products, setProducts, loading, error, addComment }), [products, loading, error])
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)

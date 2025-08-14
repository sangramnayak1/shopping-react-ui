import axios from 'axios'
import { mockFetchProducts, mockAddComment } from '../data/mockApi.js'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api'

async function tryBackend(path, options = {}) {
  try {
    const res = await axios({ url: `${API_BASE}${path}`, method: options.method || 'get', data: options.body })
    return { ok: true, data: res.data }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export async function fetchProducts() {
  const backend = await tryBackend('/products')
  if (backend.ok && Array.isArray(backend.data) && backend.data.length) return backend.data
  return await mockFetchProducts()
}

export async function addComment(productId, comment) {
  const backend = await tryBackend(`/products/${productId}/comments`, { method: 'post', body: comment })
  if (backend.ok) return backend.data
  return await mockAddComment(productId, comment)
}

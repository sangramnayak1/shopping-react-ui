import { useMemo, useState } from 'react'
import { useProducts } from '../contexts/ProductContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Filters from '../components/Filters.jsx'

export default function Products(){
  const { products, loading, error } = useProducts()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [flags, setFlags] = useState([])
  const [price, setPrice] = useState('')

  const filtered = useMemo(() => {
    let list = [...products]
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    if (flags.length) list = list.filter(p => flags.every(f => p.flags?.includes(f)))
    if (price) list = list.filter(p => p.price <= Number(price))
    switch (sort) {
      case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
      case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
      case 'name-asc': list.sort((a,b)=>a.name.localeCompare(b.name)); break;
      case 'name-desc': list.sort((a,b)=>b.name.localeCompare(a.name)); break;
    }
    return list
  }, [products, search, sort, flags, price])

  if (loading) return <div className="mt-10">Loading products…</div>
  if (error) return <div className="mt-10 text-red-600">{error}</div>

  return (
    <section className="my-6 space-y-4">
      <Filters
        search={search} setSearch={setSearch}
        sort={sort} setSort={setSort}
        flags={flags} setFlags={setFlags}
        price={price} setPrice={setPrice}
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        {!filtered.length && <div className="text-muted">No products match your filters.</div>}
      </div>
    </section>
  )
}

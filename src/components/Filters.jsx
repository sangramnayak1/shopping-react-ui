export default function Filters({ search, setSearch, sort, setSort, flags, setFlags, price, setPrice }){
  const toggleFlag = (f) => setFlags(prev => prev.includes(f) ? prev.filter(x=>x!==f) : [...prev, f])
  return (
    <div className="card p-4 grid md:grid-cols-4 gap-4">
      <input className="input max-w-xs w-full" placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)} />
      <select className="input max-w-xs w-full" value={sort} onChange={e=>setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>
      <div className="flex items-center gap-2 flex-wrap">
        {['Best Seller','New Arrival','On Offer','Popular'].map(f => (
          <button type="button"
            key={f}
            onClick={()=>toggleFlag(f)}
            className={"px-3 py-2 rounded-xl border " + (flags.includes(f) ? "bg-primary text-primaryText" : "btn-outline")}>
            {f}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm">Price ≤</label>
        <input type="number" className="input max-w-xs w-full" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Max price" />
      </div>
    </div>
  )
}

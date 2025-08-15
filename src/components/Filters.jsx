export default function Filters({ search, setSearch, sort, setSort, flags, setFlags, price, setPrice }) {
  const toggleFlag = (f) => {
    if (f === "All") {
      setFlags([]); // reset all flags
    } else {
      setFlags(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
    }
  };

  return (
    <div className="card p-4 grid md:grid-cols-[1fr_1fr_2fr_auto] gap-4 items-center">
      {/* Search */}
      <input
        className="input w-full"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select
        className="input w-full"
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>

      {/* Flags */}
      <div className="flex items-center gap-2 flex-wrap">
        {['Select All', 'Best Seller', 'New Arrival', 'On Offer', 'Popular'].map(f => (
          <button
            type="button"
            key={f}
            onClick={() => toggleFlag(f)}
            className={`px-3 py-2 rounded-xl border ${
              (f === "All" && flags.length === 0) || (f !== "All" && flags.includes(f))
                ? "bg-primary text-primaryText"
                : "btn-outline"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        <label className="text-sm whitespace-nowrap">Price ≤</label>
        <input
          type="number"
          className="input max-w-[180px] w-full"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Max"
        />
      </div>
    </div>
  );
}

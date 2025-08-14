import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products({ products, onViewDetails, onAddToCart }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "nameAZ") return a.name.localeCompare(b.name);
      if (sort === "nameZA") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-32" // reduced from w-full
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded w-32 ml-2"
        >
          <option value="">Sort by</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="nameAZ">Name: A to Z</option>
          <option value="nameZA">Name: Z to A</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

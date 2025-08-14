// Simple in-memory mock API with 10 products
let products = [
  {
    id: 1,
    name: "Aurora Diamond Necklace",
    price: 1299.99,
    category: "Jewelry",
    rating: 4.8,
    flags: ["Best Seller", "Popular"],
    imageUrl: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"],
    description: "A brilliant-cut diamond necklace set in 18k white gold.",
    comments: [
      { user: "Aisha", text: "Absolutely stunning and elegant!", rating: 5 },
      { user: "Rahul", text: "Gifted to my wife, she loved it.", rating: 5 }
    ]
  },
  {
    id: 2,
    name: "Noir Chrono Watch",
    price: 749.00,
    category: "Watches",
    rating: 4.5,
    flags: ["New Arrival"],
    imageUrl: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop"],
    description: "Matte black chronograph with sapphire crystal.",
    comments: [{ user: "Sneha", text: "Feels premium on the wrist.", rating: 4 }]
  },
  {
    id: 3,
    name: "Opulence Handbag",
    price: 469.00,
    category: "Bags",
    rating: 4.2,
    flags: ["On Offer"],
    imageUrl: ["https://images.unsplash.com/photo-1520975922284-0bdfd9f27a4f?q=80&w=1200&auto=format&fit=crop"],
    description: "Italian leather tote with gold-tone hardware.",
    comments: []
  },
  {
    id: 4,
    name: "Auric Sunglasses",
    price: 189.50,
    category: "Accessories",
    rating: 4.0,
    flags: ["Popular", "On Offer"],
    imageUrl: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"],
    description: "Classic aviators with polarized lenses.",
    comments: [{ user: "Vikram", text: "Stylish and comfy!", rating: 4 }]
  },
  {
    id: 5,
    name: "Velvet Loafers",
    price: 159.00,
    category: "Footwear",
    rating: 4.1,
    flags: ["Best Seller"],
    imageUrl: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop"],
    description: "Plush velvet loafers with cushioned sole.",
    comments: []
  },
  {
    id: 6,
    name: "Serenity Candle Set",
    price: 49.99,
    category: "Home",
    rating: 4.6,
    flags: ["New Arrival", "Popular"],
    imageUrl: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"],
    description: "Aromatherapy candles with calming scents.",
    comments: []
  },
  {
    id: 7,
    name: "Crystal Martini Glasses",
    price: 89.00,
    category: "Home",
    rating: 4.3,
    flags: ["On Offer"],
    imageUrl: ["https://images.unsplash.com/photo-1611988612847-05cbe8ca7116?q=80&w=1200&auto=format&fit=crop"],
    description: "Set of six lead-free crystal glasses.",
    comments: []
  },
  {
    id: 8,
    name: "Nimbus Running Shoes",
    price: 129.99,
    category: "Footwear",
    rating: 4.7,
    flags: ["Best Seller", "Popular"],
    imageUrl: ["https://images.unsplash.com/photo-1528701800489-20be3c0c2c58?q=80&w=1200&auto=format&fit=crop"],
    description: "Lightweight runners with cloud foam.",
    comments: [{ user: "Zara", text: "Super comfy for marathons.", rating: 5 }]
  },
  {
    id: 9,
    name: "Silk Scarf",
    price: 59.00,
    category: "Accessories",
    rating: 4.2,
    flags: [],
    imageUrl: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"],
    description: "Hand-rolled edges, 100% mulberry silk.",
    comments: []
  },
  {
    id: 10,
    name: "Pearl Stud Earrings",
    price: 139.00,
    category: "Jewelry",
    rating: 4.9,
    flags: ["Best Seller", "New Arrival"],
    imageUrl: ["https://images.unsplash.com/photo-1520975682039-77b5c0ef3fa5?q=80&w=1200&auto=format&fit=crop"],
    description: "AAA freshwater pearls with 14k gold posts.",
    comments: [{ user: "Ishaan", text: "Timeless classic.", rating: 5 }]
  }
]

export async function mockFetchProducts() {
  await new Promise(r => setTimeout(r, 400))
  return products
}

export async function mockAddComment(productId, comment) {
  await new Promise(r => setTimeout(r, 200))
  products = products.map(p => p.id === productId ? { ...p, comments: [...p.comments, comment] } : p)
  return products
}

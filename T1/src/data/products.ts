export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  color: string;
  description: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 'linen-weekender',
    name: 'Linen Weekender Tote',
    category: 'Bags',
    price: 148,
    rating: 4.8,
    color: 'Oat',
    badge: 'Bestseller',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
    description:
      'A structured travel tote with a washable linen blend shell, interior laptop sleeve, and brass feet.',
  },
  {
    id: 'ribbed-cotton-set',
    name: 'Ribbed Cotton Lounge Set',
    category: 'Apparel',
    price: 122,
    rating: 4.7,
    color: 'Mist',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description:
      'Soft ribbed separates designed for slow mornings, long flights, and polished off-duty layering.',
  },
  {
    id: 'ceramic-pour-over',
    name: 'Ceramic Pour Over Kit',
    category: 'Home',
    price: 84,
    rating: 4.9,
    color: 'Charcoal',
    badge: 'New',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    description:
      'A handmade ceramic dripper, carafe, and reusable steel filter for a considered daily ritual.',
  },
  {
    id: 'brass-desk-lamp',
    name: 'Brass Arc Desk Lamp',
    category: 'Home',
    price: 196,
    rating: 4.6,
    color: 'Brass',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    description:
      'Warm dimmable task lighting with a slim arched profile and weighted marble base.',
  },
  {
    id: 'trail-knit-sneaker',
    name: 'Trail Knit Sneaker',
    category: 'Footwear',
    price: 138,
    rating: 4.5,
    color: 'Forest',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description:
      'A breathable knit sneaker with grippy recycled rubber soles and all-day city support.',
  },
  {
    id: 'walnut-catchall',
    name: 'Walnut Catchall Tray',
    category: 'Accessories',
    price: 58,
    rating: 4.7,
    color: 'Walnut',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    description:
      'A carved walnut tray for keys, watches, and daily carry essentials with a natural oil finish.',
  },
];

export const categories = ['All', 'Home', 'Apparel', 'Bags', 'Footwear', 'Accessories'];

export const cartItems = [
  { productId: 'linen-weekender', quantity: 1 },
  { productId: 'ceramic-pour-over', quantity: 2 },
];

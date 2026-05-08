export type Product = {
  id: string;
  name: string;
  category: 'Home' | 'Travel' | 'Apparel' | 'Tech';
  price: number;
  description: string;
  image: string;
  badge?: string;
  rating: number;
  inventory: number;
};

export const products: Product[] = [
  {
    id: 'linen-weekender',
    name: 'Linen Weekender Tote',
    category: 'Travel',
    price: 128,
    description: 'A structured canvas and linen carryall with padded laptop storage and a zip-secure shoe sleeve.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    badge: 'Best seller',
    rating: 4.8,
    inventory: 18,
  },
  {
    id: 'ceramic-pour-over',
    name: 'Ceramic Pour-Over Set',
    category: 'Home',
    price: 72,
    description: 'A slow morning coffee set with a ribbed ceramic dripper, matching carafe, and walnut scoop.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    badge: 'New',
    rating: 4.7,
    inventory: 22,
  },
  {
    id: 'merino-overshirt',
    name: 'Merino Utility Overshirt',
    category: 'Apparel',
    price: 164,
    description: 'A soft merino-blend overshirt with utility pockets, matte hardware, and a relaxed layer-ready fit.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
    inventory: 9,
  },
  {
    id: 'desk-lamp',
    name: 'Pivot Desk Lamp',
    category: 'Home',
    price: 96,
    description: 'An adjustable powder-coated desk lamp with warm dimming, a compact base, and braided cord.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    rating: 4.5,
    inventory: 15,
  },
  {
    id: 'wireless-charger',
    name: 'Dual Dock Charger',
    category: 'Tech',
    price: 84,
    description: 'A weighted aluminum wireless charging dock for phone and earbuds with a woven USB-C cable.',
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=900&q=80',
    badge: 'Fast ship',
    rating: 4.4,
    inventory: 31,
  },
  {
    id: 'rain-shell',
    name: 'Packable Rain Shell',
    category: 'Apparel',
    price: 148,
    description: 'A lightweight recycled nylon shell with sealed seams, underarm vents, and a self-stow pocket.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
    inventory: 12,
  },
  {
    id: 'travel-mug',
    name: 'Insulated Transit Mug',
    category: 'Travel',
    price: 42,
    description: 'A leak-resistant stainless mug with a ceramic-lined interior and one-handed lid.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    inventory: 44,
  },
  {
    id: 'linen-throw',
    name: 'Washed Linen Throw',
    category: 'Home',
    price: 118,
    description: 'A garment-washed linen throw with soft fringe and year-round weight for beds, sofas, and patios.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
    badge: 'Low stock',
    rating: 4.9,
    inventory: 6,
  },
];

export const categories = ['All', 'Home', 'Travel', 'Apparel', 'Tech'] as const;

export const getProductById = (id: string | undefined) => products.find((product) => product.id === id);

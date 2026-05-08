import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext';
import type { Product } from '../data/products';
import { formatCurrency } from '../utils/money';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link className="product-media" to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="badge">{product.badge}</span>}
      </Link>
      <div className="product-card-body">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="rating">
            <Star size={15} fill="currentColor" />
            {product.rating}
          </span>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
        <button className="button button-secondary" type="button" onClick={() => addItem(product.id)}>
          <ShoppingCart size={17} />
          Add to cart
        </button>
      </div>
    </article>
  );
}

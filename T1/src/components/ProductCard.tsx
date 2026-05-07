import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} />
        {product.badge ? <span className="badge">{product.badge}</span> : null}
      </Link>
      <div className="product-card-body">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        <div className="product-meta">
          <span>${product.price}</span>
          <span className="rating">
            <Star size={15} fill="currentColor" />
            {product.rating}
          </span>
        </div>
      </div>
    </article>
  );
}

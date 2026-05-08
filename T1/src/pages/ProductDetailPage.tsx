import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../cartContext';
import { QuantityStepper } from '../components/QuantityStepper';
import { getProductById, products } from '../data/products';
import { formatCurrency } from '../utils/money';

export function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <section className="page-section empty-state">
        <h1>Product not found</h1>
        <p>The item may have moved or is no longer available.</p>
        <Link className="button button-primary" to="/catalog">
          Back to catalog
        </Link>
      </section>
    );
  }

  const related = products.filter((entry) => entry.category === product.category && entry.id !== product.id).slice(0, 3);

  return (
    <section className="page-section">
      <Link className="back-link" to="/catalog">
        <ArrowLeft size={17} />
        Back to catalog
      </Link>
      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
          {product.badge && <span className="badge">{product.badge}</span>}
        </div>
        <div className="detail-content">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span className="rating">
              <Star size={16} fill="currentColor" />
              {product.rating} rating
            </span>
            <span>{product.inventory} in stock</span>
          </div>
          <p className="detail-price">{formatCurrency(product.price)}</p>
          <p>{product.description}</p>
          <div className="detail-actions">
            <QuantityStepper value={quantity} max={product.inventory} onChange={setQuantity} label="Product quantity" />
            <button className="button button-primary" type="button" onClick={() => addItem(product.id, quantity)}>
              <ShoppingCart size={18} />
              Add to cart
            </button>
          </div>
          <div className="detail-notes">
            <span>Ships in 1-2 business days</span>
            <span>Gift note available at checkout</span>
            <span>Returnable within 30 days</span>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-row">
          <h2>More from {product.category}</h2>
          <div>
            {related.map((entry) => (
              <Link key={entry.id} to={`/products/${entry.id}`}>
                {entry.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

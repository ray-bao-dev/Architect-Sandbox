import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId) ?? products[0];
  const related = products.filter((item) => item.category === product.category && item.id !== product.id);

  return (
    <section className="page-section">
      <Link to="/catalog" className="back-link">
        <ArrowLeft size={17} />
        Back to catalog
      </Link>
      <div className="product-detail">
        <div className="detail-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-rating">
            <Star size={17} fill="currentColor" />
            <span>{product.rating} customer rating</span>
          </div>
          <p className="detail-price">${product.price}</p>
          <p>{product.description}</p>
          <div className="option-row">
            <span>Color</span>
            <strong>{product.color}</strong>
          </div>
          <div className="quantity-control" aria-label="Quantity">
            <button aria-label="Decrease quantity">
              <Minus size={16} />
            </button>
            <span>1</span>
            <button aria-label="Increase quantity">
              <Plus size={16} />
            </button>
          </div>
          <button className="primary-button wide-button">
            <ShoppingBag size={18} />
            Add to bag
          </button>
          <ul className="assurance-list">
            <li>
              <Check size={17} />
              Ships in recycled packaging
            </li>
            <li>
              <Check size={17} />
              Free returns within 30 days
            </li>
          </ul>
        </div>
      </div>

      {related.length > 0 ? (
        <div className="related-products">
          <h2>More from {product.category}</h2>
          <div className="mini-product-row">
            {related.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

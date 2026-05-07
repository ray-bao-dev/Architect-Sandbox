import { ArrowRight, ShieldCheck, Truck, WalletCards } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/products';

export function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Spring edit now live</p>
          <h1>North & Finch</h1>
          <p>
            Modern essentials for a calmer home, a sharper wardrobe, and better everyday rituals.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/catalog">
              Shop collection
              <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/about">
              Our standards
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-strip" aria-label="Store benefits">
        <div>
          <Truck size={22} />
          <span>Free shipping over $150</span>
        </div>
        <div>
          <ShieldCheck size={22} />
          <span>30 day returns</span>
        </div>
        <div>
          <WalletCards size={22} />
          <span>Flexible checkout</span>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Curated categories</p>
            <h2>Shop by department</h2>
          </div>
          <Link to="/catalog">View all</Link>
        </div>
        <div className="category-grid">
          {categories.slice(1).map((category) => (
            <Link key={category} to="/catalog" className="category-tile">
              <span>{category}</span>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured products</p>
            <h2>Customer favorites</h2>
          </div>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

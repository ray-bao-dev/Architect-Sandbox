import { ArrowRight, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Spring edit</p>
          <h1>Goods for sharper routines at home and away.</h1>
          <p>
            Shop durable everyday pieces selected for clean design, useful details, and flexible movement between work,
            travel, and weekend plans.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/catalog">
              Shop catalog
              <ArrowRight size={18} />
            </Link>
            <Link className="button button-ghost" to="/about">
              Store support
            </Link>
          </div>
        </div>
        <div className="hero-feature" aria-label="Featured product collection">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Curated store display with apparel and accessories"
          />
        </div>
      </section>

      <section className="service-strip" aria-label="Store benefits">
        <div>
          <Truck size={21} />
          <span>Free shipping over $150</span>
        </div>
        <div>
          <ShieldCheck size={21} />
          <span>Secure checkout skeleton</span>
        </div>
        <div>
          <RotateCcw size={21} />
          <span>30 day returns workflow</span>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Popular right now</h2>
          </div>
          <Link to="/catalog">View all products</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

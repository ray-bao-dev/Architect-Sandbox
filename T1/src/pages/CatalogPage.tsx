import { SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/products';

export function CatalogPage() {
  return (
    <section className="page-section">
      <div className="page-heading catalog-heading">
        <div>
          <p className="eyebrow">Shop</p>
          <h1>All products</h1>
          <p>Browse durable staples, home goods, travel pieces, and small-batch accessories.</p>
        </div>
        <button className="filter-button">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="category-tabs" aria-label="Product categories">
        {categories.map((category) => (
          <button key={category} className={category === 'All' ? 'active' : ''}>
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid catalog-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

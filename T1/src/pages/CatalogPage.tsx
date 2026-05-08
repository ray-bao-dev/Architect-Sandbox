import { SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/products';

type Category = (typeof categories)[number];

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sort, setSort] = useState('featured');

  const visibleProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, sort]);

  return (
    <section className="page-section catalog-page">
      <div className="page-title">
        <p className="eyebrow">Catalog</p>
        <h1>Shop the full collection</h1>
        <p>Filter by department, compare prices, and move from browsing to cart without leaving the storefront.</p>
      </div>

      <div className="catalog-toolbar">
        <div className="filter-group" aria-label="Product categories">
          {categories.map((category) => (
            <button
              key={category}
              className={category === selectedCategory ? 'chip active' : 'chip'}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="select-label">
          <SlidersHorizontal size={17} />
          <span>Sort</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="rating">Top rated</option>
            <option value="price-low">Price low to high</option>
            <option value="price-high">Price high to low</option>
          </select>
        </label>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

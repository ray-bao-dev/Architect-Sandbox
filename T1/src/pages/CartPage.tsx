import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext';
import { CartSummary } from '../components/CartSummary';
import { QuantityStepper } from '../components/QuantityStepper';
import { products } from '../data/products';
import { formatCurrency } from '../utils/money';

export function CartPage() {
  const { items, updateItem, removeItem, itemCount } = useCart();
  const cartProducts = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter(Boolean) as { product: (typeof products)[number]; quantity: number }[];

  if (!itemCount) {
    return (
      <section className="page-section empty-state">
        <h1>Your cart is empty</h1>
        <p>Add a few products from the catalog to see line items, quantity controls, and checkout totals.</p>
        <Link className="button button-primary" to="/catalog">
          Browse catalog
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-title">
        <p className="eyebrow">Cart</p>
        <h1>Review your order</h1>
      </div>
      <div className="cart-layout">
        <div className="cart-lines" aria-label="Cart line items">
          {cartProducts.map(({ product, quantity }) => (
            <article className="cart-line" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="cart-line-main">
                <div>
                  <p className="eyebrow">{product.category}</p>
                  <h2>{product.name}</h2>
                  <p>{formatCurrency(product.price)} each</p>
                </div>
                <div className="cart-line-controls">
                  <QuantityStepper
                    value={quantity}
                    max={product.inventory}
                    onChange={(value) => updateItem(product.id, value)}
                    label={`${product.name} quantity`}
                  />
                  <button className="icon-button danger" type="button" onClick={() => removeItem(product.id)}>
                    <Trash2 size={18} />
                    <span className="sr-only">Remove {product.name}</span>
                  </button>
                </div>
              </div>
              <strong>{formatCurrency(product.price * quantity)}</strong>
            </article>
          ))}
        </div>
        <CartSummary />
      </div>
    </section>
  );
}

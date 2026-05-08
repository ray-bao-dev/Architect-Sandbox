import { Link } from 'react-router-dom';
import { useCart } from '../cartContext';
import { formatCurrency } from '../utils/money';

export function CartSummary({ checkout = false }: { checkout?: boolean }) {
  const { subtotal, itemCount } = useCart();
  const shipping = subtotal > 0 && subtotal < 150 ? 9.95 : 0;
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;

  return (
    <aside className="summary-panel" aria-label="Order summary">
      <h2>Order summary</h2>
      <dl>
        <div>
          <dt>Items</dt>
          <dd>{itemCount}</dd>
        </div>
        <div>
          <dt>Subtotal</dt>
          <dd>{formatCurrency(subtotal)}</dd>
        </div>
        <div>
          <dt>Shipping</dt>
          <dd>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</dd>
        </div>
        <div>
          <dt>Estimated tax</dt>
          <dd>{formatCurrency(tax)}</dd>
        </div>
        <div className="summary-total">
          <dt>Total</dt>
          <dd>{formatCurrency(total)}</dd>
        </div>
      </dl>
      {!checkout && (
        <Link className={itemCount ? 'button button-primary full-width' : 'button button-primary full-width disabled'} to="/checkout">
          Checkout
        </Link>
      )}
      <p className="summary-note">Free shipping applies to orders over $150. Payment is a demo-only skeleton.</p>
    </aside>
  );
}

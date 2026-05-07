import { Link } from 'react-router-dom';
import { CartSummary } from '../components/CartSummary';
import { cartItems, products } from '../data/products';

export function CartPage() {
  const enrichedItems = cartItems.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.productId)!,
  }));
  const subtotal = enrichedItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Shopping bag</p>
        <h1>Your cart</h1>
      </div>
      <div className="cart-layout">
        <div className="cart-list">
          {enrichedItems.map((item) => (
            <article className="cart-item" key={item.productId}>
              <img src={item.product.image} alt={item.product.name} />
              <div>
                <p className="eyebrow">{item.product.category}</p>
                <h2>{item.product.name}</h2>
                <span>Qty {item.quantity}</span>
              </div>
              <strong>${item.product.price * item.quantity}</strong>
            </article>
          ))}
        </div>
        <div>
          <CartSummary subtotal={subtotal} />
          <Link to="/checkout" className="primary-button checkout-link">
            Continue to checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

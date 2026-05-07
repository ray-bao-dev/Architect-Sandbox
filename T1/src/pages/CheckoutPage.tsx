import { LockKeyhole } from 'lucide-react';
import { CartSummary } from '../components/CartSummary';
import { cartItems, products } from '../data/products';

export function CheckoutPage() {
  const subtotal = cartItems.reduce((total, item) => {
    const product = products.find((productItem) => productItem.id === item.productId)!;
    return total + product.price * item.quantity;
  }, 0);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Secure checkout</p>
        <h1>Complete your order</h1>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form">
          <fieldset>
            <legend>Contact</legend>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </fieldset>
          <fieldset>
            <legend>Shipping address</legend>
            <div className="field-grid">
              <label>
                First name
                <input type="text" />
              </label>
              <label>
                Last name
                <input type="text" />
              </label>
            </div>
            <label>
              Address
              <input type="text" />
            </label>
            <div className="field-grid">
              <label>
                City
                <input type="text" />
              </label>
              <label>
                ZIP
                <input type="text" />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <label>
              Card number
              <input type="text" placeholder="4242 4242 4242 4242" />
            </label>
            <div className="field-grid">
              <label>
                Expiration
                <input type="text" placeholder="MM / YY" />
              </label>
              <label>
                CVC
                <input type="text" />
              </label>
            </div>
          </fieldset>
          <button className="primary-button wide-button" type="button">
            <LockKeyhole size={18} />
            Place order
          </button>
        </form>
        <CartSummary subtotal={subtotal} />
      </div>
    </section>
  );
}

import { LockKeyhole } from 'lucide-react';
import { useCart } from '../cartContext';
import { CartSummary } from '../components/CartSummary';

export function CheckoutPage() {
  const { itemCount } = useCart();

  return (
    <section className="page-section">
      <div className="page-title">
        <p className="eyebrow">Checkout</p>
        <h1>Delivery and payment</h1>
        <p>This is a checkout skeleton for collecting order details without processing real payments.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={(event) => event.preventDefault()}>
          <fieldset>
            <legend>Customer</legend>
            <div className="form-grid two">
              <label>
                First name
                <input required autoComplete="given-name" placeholder="Jordan" />
              </label>
              <label>
                Last name
                <input required autoComplete="family-name" placeholder="Lee" />
              </label>
            </div>
            <label>
              Email
              <input required type="email" autoComplete="email" placeholder="jordan@example.com" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Shipping</legend>
            <label>
              Address
              <input required autoComplete="street-address" placeholder="128 Market Street" />
            </label>
            <div className="form-grid three">
              <label>
                City
                <input required autoComplete="address-level2" placeholder="Austin" />
              </label>
              <label>
                State
                <input required autoComplete="address-level1" placeholder="TX" maxLength={2} />
              </label>
              <label>
                ZIP
                <input required autoComplete="postal-code" placeholder="78701" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Payment</legend>
            <label>
              Card number
              <input required inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </label>
            <div className="form-grid two">
              <label>
                Expiration
                <input required placeholder="MM / YY" />
              </label>
              <label>
                Security code
                <input required inputMode="numeric" placeholder="123" />
              </label>
            </div>
          </fieldset>

          <button className="button button-primary full-width" type="submit" disabled={!itemCount}>
            <LockKeyhole size={18} />
            Place demo order
          </button>
        </form>

        <CartSummary checkout />
      </div>
    </section>
  );
}

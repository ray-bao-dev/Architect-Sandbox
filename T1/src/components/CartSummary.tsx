type CartSummaryProps = {
  subtotal: number;
};

export function CartSummary({ subtotal }: CartSummaryProps) {
  const shipping = subtotal > 150 ? 0 : 12;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <aside className="summary-panel">
      <h2>Order summary</h2>
      <dl>
        <div>
          <dt>Subtotal</dt>
          <dd>${subtotal}</dd>
        </div>
        <div>
          <dt>Shipping</dt>
          <dd>{shipping === 0 ? 'Free' : `$${shipping}`}</dd>
        </div>
        <div>
          <dt>Estimated tax</dt>
          <dd>${tax}</dd>
        </div>
        <div className="summary-total">
          <dt>Total</dt>
          <dd>${total}</dd>
        </div>
      </dl>
    </aside>
  );
}

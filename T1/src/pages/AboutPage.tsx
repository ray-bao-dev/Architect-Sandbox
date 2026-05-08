import { Headphones, PackageCheck, Sparkles } from 'lucide-react';

export function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="page-title">
        <p className="eyebrow">Support</p>
        <h1>Store information and service notes</h1>
        <p>
          Harbor & Field is a frontend commerce skeleton with realistic support content, trust messaging, and service
          sections ready for integration.
        </p>
      </div>

      <div className="support-grid">
        <article>
          <PackageCheck size={28} />
          <h2>Fulfillment</h2>
          <p>Orders show a typical 1-2 business day processing promise, free shipping threshold, and return window.</p>
        </article>
        <article>
          <Headphones size={28} />
          <h2>Customer care</h2>
          <p>Support pages can connect to chat, email, or FAQ content. This skeleton keeps those points visible.</p>
        </article>
        <article>
          <Sparkles size={28} />
          <h2>Merchandising</h2>
          <p>Product cards, badges, ratings, and category filters are structured for richer catalog data later.</p>
        </article>
      </div>

      <div className="policy-band">
        <div>
          <h2>Returns</h2>
          <p>Unused goods can be returned within 30 days. Final policy text should be reviewed before launch.</p>
        </div>
        <div>
          <h2>Shipping</h2>
          <p>Domestic shipping options are represented in the order summary. Carrier integrations are not included.</p>
        </div>
        <div>
          <h2>Privacy</h2>
          <p>Checkout fields are display-only in this skeleton and do not submit customer data to a backend service.</p>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, MessageSquareText } from 'lucide-react';

export function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="about-hero">
        <div>
          <p className="eyebrow">About North & Finch</p>
          <h1>Goods selected for useful, lasting routines.</h1>
          <p>
            We partner with independent makers and responsible factories to bring together everyday
            products with quiet design, dependable materials, and practical details.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
          alt="Minimal retail interior with curated home goods"
        />
      </div>

      <div className="contact-grid">
        <article>
          <Mail size={23} />
          <h2>Email</h2>
          <p>support@northfinch.example</p>
        </article>
        <article>
          <MapPin size={23} />
          <h2>Studio</h2>
          <p>204 Market Street, Toronto</p>
        </article>
        <article>
          <MessageSquareText size={23} />
          <h2>Hours</h2>
          <p>Monday to Friday, 9 AM to 6 PM</p>
        </article>
      </div>
    </section>
  );
}

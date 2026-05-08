import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useCart } from '../cartContext';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Checkout', to: '/checkout' },
  { label: 'Support', to: '/about' },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Harbor and Field home">
          <span className="brand-mark">H&F</span>
          <span>Harbor & Field</span>
        </a>

        <button
          className="icon-button nav-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="cart-link" to="/cart" aria-label={`Cart with ${itemCount} items`}>
          <ShoppingBag size={19} />
          <span>Cart</span>
          <strong>{itemCount}</strong>
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>Harbor & Field</strong>
          <p>Everyday goods selected for home, travel, work, and weather.</p>
        </div>
        <div className="footer-links">
          <a href="/catalog">Shop</a>
          <a href="/about">Support</a>
          <a href="/checkout">Checkout</a>
        </div>
      </footer>
    </div>
  );
}

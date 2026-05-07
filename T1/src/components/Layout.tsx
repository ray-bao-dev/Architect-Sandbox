import { Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { cartItems } from '../data/products';

const navItems = [
  { label: 'Shop', to: '/catalog' },
  { label: 'About', to: '/about' },
  { label: 'Cart', to: '/cart' },
];

export function Layout() {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="North and Finch home">
          North & Finch
        </NavLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={19} />
          </button>
          <NavLink className="icon-button" to="/about" aria-label="Account">
            <UserRound size={19} />
          </NavLink>
          <NavLink className="bag-button" to="/cart" aria-label={`${cartCount} items in cart`}>
            <ShoppingBag size={19} />
            <span>{cartCount}</span>
          </NavLink>
          <button className="icon-button mobile-only" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div>
          <strong>North & Finch</strong>
          <p>Considered goods for home, travel, and daily routines.</p>
        </div>
        <div className="footer-links">
          <a href="/catalog">New arrivals</a>
          <a href="/about">Contact</a>
          <a href="/checkout">Shipping</a>
        </div>
      </footer>
    </div>
  );
}

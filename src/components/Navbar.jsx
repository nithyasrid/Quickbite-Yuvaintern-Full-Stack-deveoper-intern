import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="QuickBite home">
        <span className="brand-mark">q.</span>
        <span>quickbite<span className="brand-dot">.</span></span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Discover</NavLink>
        <NavLink to="/cart">Your bag <span className="cart-count">{cartCount}</span></NavLink>
        <NavLink to="/order">Order details</NavLink>
      </nav>
    </header>
  );
}

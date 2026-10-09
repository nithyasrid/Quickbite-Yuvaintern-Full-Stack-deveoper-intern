import { useEffect, useMemo, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import FoodCard from "./components/FoodCard.jsx";
import { menuItems, money } from "./data/menu.js";

function Home({ addToCart }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];
  const filteredItems = category === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === category);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">GOOD FOOD, GOOD MOOD</p>
          <h1>A little joy<br /><em>in every bite.</em></h1>
          <p className="hero-description">
            Thoughtfully made favourites, fresh from our kitchen to your table.
          </p>
          <a className="button button-light" href="#menu">Explore the menu <span aria-hidden="true">↘</span></a>
          <div className="hero-note"><span className="note-line" /> Freshly prepared · Simply delicious</div>
        </div>
        <div className="hero-art" role="img" aria-label="Fresh salad bowl with colourful vegetables">
          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90"
            alt="Fresh salad with colourful vegetables"
          />
          <span className="hero-art-label">made with care</span>
        </div>
        <div className="hero-index"><span>01</span> / FRESH PICKS</div>
      </section>

      <section className="menu-section section-wrap" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE QUICKBITE MENU</p>
            <h2>Find your <em>favourite.</em></h2>
          </div>
          <p className="section-intro">Simple ingredients. Beautiful flavours.<br />Your next favourite is right here.</p>
        </div>
        <div className="category-row" aria-label="Filter menu by category">
          {categories.map((name) => (
            <button key={name} className={`category-chip ${category === name ? "selected" : ""}`}
              onClick={() => setCategory(name)}>{name}</button>
          ))}
        </div>
        <div className="food-grid">
          {filteredItems.map((item) => <FoodCard key={item.id} item={item} onAdd={addToCart} />)}
        </div>
      </section>
      <section className="closing-banner">
        <span className="closing-symbol">✳</span>
        <div><p className="eyebrow">A NOTE FROM OUR KITCHEN</p><h2>Good food should feel <em>like a little ritual.</em></h2></div>
        <p>Made fresh. Served thoughtfully.</p>
      </section>
    </>
  );
}

function Cart({ cart, updateQuantity, removeItem }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = cart.length ? 25 : 0;
  const total = subtotal + delivery;

  function continueToOrder() {
    if (!cart.length) return;
    const order = {
      id: `QB${Date.now().toString().slice(-6)}`,
      items: cart,
      total,
      status: "Order received",
      createdAt: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
    };
    localStorage.setItem("quickbite-last-order", JSON.stringify(order));
    navigate("/order");
  }

  return (
    <main className="page-shell section-wrap">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Your bag<span className="pink-period">.</span></h1>
        <p>Everything you picked, all in one place.</p>
      </div>
      {!cart.length ? (
        <div className="empty-state">
          <span className="empty-icon">✳</span>
          <h2>Your bag is taking a little breather.</h2>
          <p>Add something delicious from the menu to get started.</p>
          <Link className="button button-dark" to="/">Browse the menu</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className={`cart-food-art art-${item.id}`}>{item.emoji}</div>
                <div className="cart-item-info">
                  <p className="eyebrow">{item.category}</p><h3>{item.name}</h3>
                  <p>{money(item.price)} each</p>
                  <button className="text-button" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
              </article>
            ))}
          </div>
          <aside className="summary-card">
            <p className="eyebrow">ORDER SUMMARY</p><h2>The details.</h2>
            <div className="summary-line"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="summary-line"><span>Delivery fee</span><span>{money(delivery)}</span></div>
            <div className="summary-line summary-total"><strong>Total</strong><strong>{money(total)}</strong></div>
            <button className="button button-dark full-width" onClick={continueToOrder}>Place demo order <span>↗</span></button>
            <p className="fine-print">Demo checkout only. No payment will be collected.</p>
          </aside>
        </div>
      )}
    </main>
  );
}

function OrderDetails({ cart, clearCart }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("quickbite-last-order");
      if (saved) setOrder(JSON.parse(saved));
    } catch {
      setOrder(null);
    }
  }, []);

  function finishDemo() {
    localStorage.removeItem("quickbite-last-order");
    clearCart();
    setOrder(null);
  }

  if (!order) {
    return (
      <main className="page-shell section-wrap">
        <div className="page-heading"><p className="eyebrow">ORDER DETAILS</p><h1>Your next bite<span className="pink-period">.</span></h1></div>
        <div className="empty-state">
          <span className="empty-icon">↗</span><h2>No recent order yet.</h2>
          <p>Once you place a demo order, its details will appear here.</p>
          <Link className="button button-dark" to="/">Explore the menu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell section-wrap">
      <div className="order-success">
        <div className="success-mark">✓</div>
        <p className="eyebrow">THAT'S A WRAP</p>
        <h1>Your order is <em>in motion.</em></h1>
        <p className="order-subtitle">Thanks for choosing QuickBite. This is a simulated order for the Week 2 frontend demo.</p>
      </div>
      <div className="order-layout">
        <section className="order-card">
          <div className="order-card-header"><div><p className="eyebrow">ORDER REFERENCE</p><h2>#{order.id}</h2></div><span className="status-pill">{order.status}</span></div>
          <p className="order-date">Placed {order.createdAt}</p>
          <div className="status-track">
            <div className="status-step active"><span>✓</span><div><strong>Order received</strong><small>Your order has been recorded.</small></div></div>
            <div className="status-step"><span>2</span><div><strong>Preparing</strong><small>The kitchen stage is simulated.</small></div></div>
            <div className="status-step"><span>3</span><div><strong>Ready for pickup</strong><small>Final status is not connected to a backend.</small></div></div>
          </div>
        </section>
        <section className="order-card">
          <p className="eyebrow">IN YOUR ORDER</p>
          {order.items.map((item) => <div className="summary-line" key={item.id}><span>{item.emoji} {item.name} × {item.quantity}</span><span>{money(item.price * item.quantity)}</span></div>)}
          <div className="summary-line summary-total"><strong>Total paid</strong><strong>{money(order.total)}</strong></div>
          <button className="button button-dark full-width" onClick={finishDemo}>Finish demo order</button>
          <p className="fine-print">No real payment or restaurant order has been created.</p>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("quickbite-cart") || "[]"); }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("quickbite-cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  function addToCart(item) {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      return existing
        ? current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
        : [...current, { ...item, quantity: 1 }];
    });
  }

  function updateQuantity(id, quantity) {
    setCart((current) => quantity < 1
      ? current.filter((item) => item.id !== id)
      : current.map((item) => item.id === id ? { ...item, quantity } : item));
  }

  function removeItem(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() { setCart([]); }

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        <Route path="/order" element={<OrderDetails clearCart={clearCart} cart={cart} />} />
        <Route path="*" element={<main className="section-wrap page-shell"><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer"><Link className="footer-brand" to="/">quickbite<span>.</span></Link><p>Thoughtfully served, one bite at a time.</p><small>Week 2 frontend prototype · Demo data only</small></footer>
    </div>
  );
}

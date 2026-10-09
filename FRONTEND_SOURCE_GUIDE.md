# QuickBite Frontend Source Guide

The runnable frontend source is in `src/`.

- `src/main.jsx`: mounts the React application and enables React Router.
- `src/App.jsx`: defines the three routes (Menu, Cart, Order Details) and interactive cart/order behavior.
- `src/index.css`: responsive styling and the requested forest green, teal, mauve, and lotus-pink palette.
- `src/components/Navbar.jsx`: navigation bar and cart count.
- `src/components/FoodCard.jsx`: reusable menu item card.
- `src/data/menu.js`: sample menu data and INR price formatting.

## Run it

```bash
npm install
npm run dev
```

The app uses sample menu data, browser `localStorage`, and a simulated checkout. It does not yet connect to Spring Boot or PostgreSQL.

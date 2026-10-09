# QuickBite — Week 2 Front-End Application

QuickBite is a responsive food-ordering frontend prototype created for the **YuvaIntern Junior Full Stack Developer Internship — Week 2: Front-End Application Development**.

The prototype demonstrates three connected views: a menu page, a shopping cart, and an order details page. It uses local sample data and browser local storage to demonstrate frontend interactions. It does **not** connect to a backend, process real payments, or send orders to a restaurant.

## Visual Design\n\n- Real food photography is loaded from Unsplash image URLs for the hero and menu cards. An emoji fallback is shown if a menu image fails to load.\n- Typography and body copy have been increased slightly for improved readability.\n\n## Features

- Responsive QuickBite home/menu page.
- Menu category filters.
- Add menu items to the cart.
- Increase/decrease quantities and remove items.
- Automatic subtotal, delivery fee, and total calculations.
- Demo order confirmation and simulated status timeline.
- Navigation between menu, cart, and order details.
- Cart and latest demo order stored in browser local storage.
- Uses the supplied forest green, teal, mauve, and lotus pink palette.

## Front-End Technology Stack

This Week 2 implementation uses the following frontend technologies:

| Technology | How it is used |
|---|---|
| HTML5 | Provides the page entry point and semantic document structure in `index.html`. |
| CSS3 | Provides the responsive layout, visual styling, and the requested color palette in `src/index.css`. |
| JavaScript (ES6+) | Implements cart operations, totals, menu filtering, and browser storage. |
| React | Builds the interface from reusable components and manages UI state. |
| React Router | Connects the Menu, Cart, and Order Details views through client-side routes. |
| Vite | Runs the local development server and builds the frontend for production. |
| Browser `localStorage` | Keeps the cart and most recent demo order in the browser between refreshes. |

### Where to find the stack in the code

- `package.json` — declares React, React DOM, React Router, and Vite dependencies and scripts.
- `index.html` — HTML5 document entry point.
- `src/main.jsx` — React application entry point and router setup.
- `src/App.jsx` — page routes and interactive application logic.
- `src/components/` — reusable React UI components.
- `src/data/menu.js` — sample menu data and price formatting.
- `src/index.css` — CSS3 styling, responsive breakpoints, and the five-color theme.

## Technology Stack

- React
- JavaScript (ES6+)
- Vite
- React Router
- HTML5
- CSS3

## Color Palette

| Name | Hex |
|---|---|
| Forest Green | `#12312B` |
| Deep Teal | `#086665` |
| Muted Mauve | `#925775` |
| Lotus Pink | `#DF809E` |
| Soft Lotus | `#D9C3D0` |

## Project Structure

```text
QuickBite_Week2_Code/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── FoodCard.jsx
    │   └── Navbar.jsx
    └── data/
        └── menu.js
```

## Run Locally

### Prerequisites
- Node.js (current LTS version recommended)
- npm

### Steps

1. Extract the ZIP file.
2. Open a terminal in the `QuickBite_Week2_Code` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (Vite commonly uses `http://localhost:5173`).

### Create a production build

```bash
npm run build
```

The generated production files will be placed in the `dist/` directory.

## How to Test

1. Open the Discover page and use category filters.
2. Add one or more food items to the bag.
3. Open Your bag and change quantities or remove items.
4. Confirm that the subtotal and total update.
5. Select **Place demo order**.
6. Open Order details to view the simulated confirmation.
7. Refresh the browser and verify that the cart is retained.

## Design and Implementation Notes

- React components separate navigation and menu cards from the page-level views.
- React Router provides navigation among the three views.
- React state manages cart contents and quantity changes.
- `localStorage` preserves the cart and most recent demo order across refreshes.
- CSS custom properties keep the color palette consistent.
- Responsive CSS media queries adapt the layout to mobile and desktop widths.
- Basic focus-visible styles support keyboard navigation.

## Scope and Limitations

- Menu data is hard-coded sample data.
- The checkout is a frontend demonstration only.
- No backend APIs or PostgreSQL database are connected.
- No authentication, real payment gateway, or live delivery tracking is included.
- Order status steps are illustrative and are not updated by restaurant staff.

Backend API development and integration are planned for later internship tasks.

## Internship Information

- **Program:** YuvaIntern
- **Role:** Junior Full Stack Developer Intern
- **Task:** Week 2 — Front-End Application Development
- **Project:** QuickBite — Smart Food Ordering & Order Management Platform

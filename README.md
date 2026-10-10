# QuickBite — Smart Food Ordering & Order Management Platform

**A full-stack food ordering platform designed to make ordering simpler for customers and order management easier for restaurant staff.**

WireFrame ;
<img width="1536" height="1024" alt="QuickBite_All_Wireframes" src="https://github.com/user-attachments/assets/e1268a90-222b-4de7-b4fc-d5ef6dcbb74d" />


Frontend Demo;

https://github.com/user-attachments/assets/91eb4146-05a0-4867-b1fc-1dfc002b717f







![Project Status](https://img.shields.io/badge/Status-Frontend%20Prototype-086665)
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB)
![Styling](https://img.shields.io/badge/Styling-CSS3-1572B6)
![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F)
![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1)

## 1. Project Overview

QuickBite is a full-stack web application project developed as part of the **YuvaIntern Junior Full Stack Developer Internship**.

The platform is designed to let customers explore a restaurant menu, add food items to a shopping cart, place an order, and view order details. Restaurant staff will be able to manage menu items, review incoming orders, and update order statuses through a dashboard.

The project follows a staged development approach, starting with planning and frontend development before progressing to backend APIs, database integration, testing, and final improvements.

**Current implementation status:** The frontend prototype includes a menu page, interactive cart, and simulated order details page. Backend APIs and PostgreSQL integration are planned for subsequent development stages.

## 2. Project Objectives

- Build a user-friendly and responsive food ordering interface.
- Implement reusable frontend components and interactive pages.
- Design a structured backend using Java and Spring Boot.
- Plan relational data storage using PostgreSQL.
- Define REST APIs for menu and order management.
- Integrate the frontend with backend services in a later stage.
- Apply software development, testing, documentation, and debugging practices.

## 3. Problem Statement

Traditional food ordering workflows can involve manual communication, unclear order status, and difficulty managing incoming orders.

QuickBite aims to address these challenges through a centralized web interface that organizes menu browsing, cart management, order placement, and order status visibility.

The initial version focuses on a single restaurant with sample menu data and simulated checkout behavior.

## 4. Key Features

### Customer Features

- Browse the food menu.
- Filter items by category.
- View food descriptions and prices.
- Add items to a cart.
- Increase or decrease item quantities.
- Remove items from the cart.
- Calculate subtotal, delivery fee, and total.
- Place a simulated demo order.
- View order confirmation and a simulated status timeline.

### Restaurant Staff Features — Planned

- View incoming customer orders.
- Inspect order details.
- Update order preparation status.
- Add, update, or remove menu items.
- Manage menu item availability.

### Future Enhancements

- Customer registration and authentication.
- Persistent order history.
- Real payment gateway integration.
- Restaurant notifications.
- Multiple restaurant support.
- Live delivery tracking, if required by the project scope.

## 5. Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| HTML5 | Document structure |
| CSS3 | Styling, layouts, and responsive design |
| JavaScript (ES6+) | Interactions, cart logic, and calculations |
| React | Reusable components and interface state |
| React Router | Navigation between frontend views |
| Vite | Development server and production build |

### Backend — Planned

| Technology | Purpose |
|---|---|
| Java | Backend programming language |
| Spring Boot | REST API development |
| Spring Data JPA | Database access and persistence |
| Hibernate | Object-relational mapping through JPA |
| Maven | Dependency and build management |

### Database and Development Tools

| Technology | Purpose |
|---|---|
| PostgreSQL | Planned relational database |
| Postman | API testing during backend development |
| Git | Version control |
| GitHub | Source code hosting and project documentation |
| VS Code / IntelliJ IDEA | Development environments |

## 6. System Architecture

The planned architecture follows a layered full-stack design.

```text
             CUSTOMER / RESTAURANT STAFF
                         |
                         v
                REACT FRONTEND
             HTML5 + CSS3 + JavaScript
                         |
                         v
                  REST API LAYER
                  SPRING BOOT
                         |
                         v
               BUSINESS LOGIC LAYER
            Validation and Order Processing
                         |
                         v
                  DATA ACCESS LAYER
                  Spring Data JPA
                         |
                         v
                    POSTGRESQL
```

**Current status:** The React frontend is implemented with sample data and browser local storage. The Spring Boot backend and PostgreSQL connection are planned and are not yet connected to the frontend.

## 7. Frontend Pages

### 7.1 Home / Menu Page

The landing page introduces QuickBite and displays food items with images, descriptions, prices, and category filters.

### 7.2 Cart Page

The cart page allows users to manage selected food items, update quantities, remove products, and review their order total.

### 7.3 Order Details Page

The order details page displays a demo order reference, selected items, total amount, and a simulated order status timeline.

### 7.4 Restaurant Staff Dashboard — Planned

A future staff interface will provide access to incoming orders and menu management features.

## 8. Design System and Color Palette

QuickBite uses a coordinated botanical-inspired color palette for a distinctive, modern interface.

| Color | Hex Code | Usage |
|---|---|---|
| Forest Green | `#12312B` | Main navigation and dark backgrounds |
| Deep Teal | `#086665` | Primary buttons and interactive elements |
| Muted Mauve | `#925775` | Secondary accents and labels |
| Lotus Pink | `#DF809E` | Highlights and badges |
| Soft Lotus | `#D9C3D0` | Card backgrounds and supporting accents |

The interface uses food photography, readable typography, rounded cards, and responsive layouts.

## 9. Planned Database Design

The initial database design contains three core tables.

### `menu_items`

| Column | Purpose |
|---|---|
| `id` | Primary key |
| `name` | Food item name |
| `description` | Item description |
| `price` | Item price |
| `category` | Menu category |
| `available` | Item availability |

### `orders`

| Column | Purpose |
|---|---|
| `id` | Primary key |
| `order_date` | Order creation timestamp |
| `total_amount` | Total order value |
| `status` | Current order status |

### `order_items`

| Column | Purpose |
|---|---|
| `id` | Primary key |
| `order_id` | Foreign key referencing an order |
| `menu_item_id` | Foreign key referencing a menu item |
| `quantity` | Number of units ordered |
| `unit_price` | Price per unit at the time of ordering |

**Relationships:**

- One order can contain multiple order items.
- Each order item references one menu item.
- A menu item can appear in multiple orders.

This is the proposed database schema; the database has not yet been connected to the current frontend prototype.

## 10. Planned REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/menu` | Retrieve menu items |
| GET | `/api/menu/{id}` | Retrieve one menu item |
| POST | `/api/menu` | Create a menu item |
| PUT | `/api/menu/{id}` | Update a menu item |
| DELETE | `/api/menu/{id}` | Delete a menu item |
| POST | `/api/orders` | Create an order |
| GET | `/api/orders/{id}` | Retrieve order details |
| PATCH | `/api/orders/{id}/status` | Update order status |

These endpoints are planned for backend implementation and are not currently operational.

## 11. Project Structure

The following is the intended full-stack repository structure. The frontend files are available in the current Week 2 source package; backend and database directories can be added during their respective development stages.

```text
QuickBite/
├── frontend/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── FoodCard.jsx
│       ├── data/
│       │   └── menu.js
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── backend/                 # Planned
│   └── src/
├── database/                # Planned
│   └── schema.sql
├── docs/
│   ├── QuickBite_Week1_Internship_Report.docx
│   └── QuickBite_Wireframes/
└── README.md
```

## 12. Installation and Execution

### Prerequisites

- Node.js and npm.
- A code editor such as VS Code.

### Run the Current Frontend

1. Download or clone the repository containing the frontend source.
2. Open a terminal in the directory containing `package.json`.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite, usually `http://localhost:5173`.

### Build the Frontend

```bash
npm run build
```

Vite generates the production build in the `dist/` directory.

### Backend Setup

Backend setup instructions will be added after the Spring Boot application and PostgreSQL configuration are implemented.

## 13. Testing Plan

The following frontend checks can be performed on the current prototype:

- Verify that navigation works across all three pages.
- Test menu category filtering.
- Add items to the cart.
- Increase and decrease quantities.
- Remove items and verify the empty-cart state.
- Check subtotal, delivery fee, and total calculations.
- Place a demo order and inspect its details.
- Refresh the browser and check cart persistence.
- Verify the layout on desktop and mobile screen sizes.
- Check keyboard focus and text readability.

Backend API, database, and integration tests will be added during later development stages.

## 14. Limitations

- Menu items currently use sample data.
- Checkout is simulated and does not collect payment.
- Order status is illustrative and is not updated by a real restaurant.
- The frontend does not currently connect to Spring Boot or PostgreSQL.
- Authentication, production deployment, and live delivery tracking are not implemented.

## 15. Internship Development Roadmap

| Week | Task | Planned Outcome |

| Week 1 | Project Planning & System Architecture | Requirements, flowcharts, wireframes, and architecture |
| Week 2 | Front-End Application Development | Responsive React frontend with three connected views |
| Week 3 | Back-End API Development | REST APIs, database schema, and API documentation |
| Week 4 | Frontend–Backend Integration | Frontend connected to backend services |
| Week 5 | Testing, Debugging & Optimization | Test cases, fixes, and reliability improvements |
| Week 6 | Final Improvements & Submission | Final documentation, demonstration, and submission |

This roadmap follows the internship task sequence; completion depends on implementation and evaluation.

## 16. Future Scope

- Implement secure user authentication and authorization.
- Connect React pages to Spring Boot REST APIs.
- Persist menu and order data in PostgreSQL.
- Add validation and structured error handling.
- Create a staff dashboard for order and menu management.
- Add automated frontend and backend tests.
- Deploy the application after local testing and configuration.

## 17. Internship Information

- **Program:** YuvaIntern
- **Role:** Junior Full Stack Developer Intern
- **Project:** QuickBite — Smart Food Ordering & Order Management Platform
- **Current Stage:** Week 2 — Front-End Application Development

## 18. Project Status

QuickBite is being developed incrementally as a full-stack learning project. The current frontend prototype demonstrates menu browsing, cart management, and simulated order details. The next stages will focus on implementing backend APIs, connecting PostgreSQL, integrating the application, and testing the complete workflow.

---

**QuickBite — Thoughtfully served, one bite at a time.**

# 💊 Wellnex eCommerce

> A modern, full-stack eCommerce platform dedicated to medicines and treatment-based online sales. Built using the robust **MERN (MySQL, Express, React, Node.js)** stack.

---

## 🛠️ Tech Stack

| Layer              | Technology                           |
| :----------------- | :----------------------------------- |
| **Frontend**       | React, React Router, Axios, Tailwind |
| **Backend**        | Node.js, Express                     |
| **Database**       | MySQL (Sequelize ORM)                |
| **Authentication** | JWT (JSON Web Tokens) / LocalStorage |

### Day8: Frontend setup

- Goal:
  - React app runs
  - Routing works
  - Basic structure ready

### Day9: UI structure for nav, product and home page

- Goal:
  - Visible UI structure exists
  - Navigation works

### Day10: Fetch product from backend

- Goal:
  - Fetch products from backend
  - Show them in UI
  - Basic grid layout

### Day11: Product detail page

- Goal:
  - Click product => go to detail page
  - Show full info of that product
  - Using useParams

- Changed routes name following REST convention

### Day12: Auth UI(Frontend)

- Goal:
  - Login page works
  - Register page works
  - Connect with backend

### Day13: Auth Flow Fix

- Using Auth Context

- Goal:
  - User stays logged in
  - Logout works
  - Navbar reacts properly

- Flow:
  - First create an AuthContext by using react's built-in function createContext(), so that we can share global data without props drilling.
  - Then create and AuthContextProvider so that we can store and provide global states.
  - After that create a custom hook useAuth() by using useContext() which is also react's built-in function, so that we can easily access those global state just by caling useAuth().

### OffDay: Add refresh token

- Axios interceptor
- Add spinner reusable component
- React Toastiy
- Error page created

### Day14: Cart System(part-1)

- Goal:
  - Add products to cart
  - Store cart locally
  - Show cart count on navbar
- Flow:
  - Create cart context
  - Saved in localStorage
  - Add cart count on navbar
  - Cart UI in dropdown

### Day15: Cart Page

- Goal
  - Display all cart items
  - Quantity controls
  - Remove item
  - Cart total

- Flow
  - Create cart page
  - Read cart data
  - Render cart item
  - Quantity increase
  - Quantity decrease
  - Remove item
  - Cart total
  - Empty cart UI

### Day16: Cart Integration

- Goal:
  - Store cart in database
  - Fetch cart from backend
  - Handle sync properly

- Flow
  - Cart database design
  - Create cart APIs
  - Auth protection
  - Add product validation
  - Frontend cart service
  - Sync strategy

- Optional:
  - Axios 401 redirect issue solved.
  - "REFRESH ERROR:", refreshError fixed in api.js => which caused unneccessary redirect to "/login"
  - Concurrent refresh problem

### Day17: Checkout Page

- Goal:
  - Shipping form
  - Order summary
  - Checkout structure

- Flow
  - Create checkout page
  - Navigate from cart
  - Shipping form UI
  - Order summary section
  - Layout
  - Basic validation
  - Save shipping data to localStorage
  - Empty cart protection
  - Testing

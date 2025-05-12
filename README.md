
# 🧑‍💼 Employee Management System - MERN Stack

A full-featured Employee Management System built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project includes secure authentication, employee CRUD operations, filtering, and search functionalities. Built with responsive design and modern UI/UX principles using Tailwind CSS.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Token)
- **UI Enhancements:** Dark mode, gradients, animations, and transitions

---

## 📂 Project Structure

```
client/             // Frontend code (React)
├── src/
│   ├── components/  // Reusable UI components like EmployeeCard, Footer
│   ├── pages/       // Route-based views like Login, Register, Dashboard
│   ├── api.js       // Axios instance
│   └── App.jsx      // Route setup
server/             // Backend code (Node + Express)
├── models/          // Mongoose schemas
├── routes/          // Route handlers (auth, employees)
├── middleware/      // JWT validation
└── server.js        // Main server entry point
```

---

## 🔐 Authentication Flow

- Registration & login handled via `/api/auth/register` and `/api/auth/login`.
- On login, the server returns a JWT token which is stored in `localStorage`.
- Protected routes (like `/dashboard`, `/create-employee`) require a valid token.
- Custom `PrivateRoute` logic redirects unauthenticated users to login with an alert.

---

## 🧠 Frontend Logic Breakdown

### ✅ Protected Routing
- Implemented custom navigation logic:
  - If user is not logged in and visits `/dashboard` → redirect to `/login` with alert.
  - If already logged in and visits `/login` → redirect to `/` with alert: "Already Logged In".

### 📄 Employee CRUD Operations
- Employees fetched from `/api/employees` using Axios.
- Each employee displayed using `<EmployeeCard />`.
- Add/edit employee forms route through `/create-employee` and `/employee/:id`.

### 🔍 Filters & Search
- Sidebar allows filtering by:
  - Department
  - Role
  - Salary range (min & max)
- Text-based search for name, department, or position.
- Filtering logic combined using `.filter()` on the employee state array.

### 🎨 UI/UX Design
- Responsive layout with `grid`, `flex`, and Tailwind’s utility-first classes.
- Smooth animations using `@keyframes`, scale, and opacity transitions.
- Supports **light** (creamy white) and **dark** (gradient black) themes with Tailwind's `dark:` utility.

---

## 🔧 Backend Logic Breakdown

### 👥 User Auth (JWT)
- Passwords hashed using `bcrypt`.
- JWT token signed on login with expiry.
- Middleware `verifyToken` used to protect routes.

### 📁 Employee Model (Mongoose)
```js
{
  name: String,
  email: String,
  salary: Number,
  department: String,
  position: String
}
```

### 📦 API Routes

| Route                  | Method | Description                  | Auth Required |
|------------------------|--------|------------------------------|----------------|
| `/api/auth/register`   | POST   | Register new admin           | ❌             |
| `/api/auth/login`      | POST   | Login existing admin         | ❌             |
| `/api/employees`       | GET    | Get all employees            | ✅             |
| `/api/employees/:id`   | GET    | Get single employee          | ✅             |
| `/api/employees`       | POST   | Create new employee          | ✅             |
| `/api/employees/:id`   | PUT    | Update employee              | ✅             |
| `/api/employees/:id`   | DELETE | Delete employee              | ✅             |

---

## 🧪 Future Enhancements

- Role-based access (e.g., HR vs. Admin)
- Export employee data to CSV or PDF
- Pagination and infinite scroll for large datasets
- Integration with third-party payroll APIs

---

## 🧑‍💻 Author

- 👨‍💻 Built by [Sudil Paudel]
- 💼 Connect on [LinkedIn](https://www.linkedin.com/in/sudil-paudel/)


---

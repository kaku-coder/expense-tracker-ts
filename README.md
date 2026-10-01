# 📱 Expense Tracker App

A modern, responsive, and ultra-sleek **Mobile Expense Tracker Web Application** built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vite**, and **React Router DOM**.

Designed inside a realistic smartphone device mockup with physical side hardware buttons, dynamic camera notch, ambient glow box shadows, and smooth animated navigation.

---

## ✨ Features

- 📱 **Realistic Smartphone Device Mockup**: Custom hardware buttons (Volume Up/Down, Power), dynamic island camera notch, and bottom home bar.
- 👛 **Wallet Setup Page (`/setup`)**: Easily configure your starting balance with real-time formatted currency preview (`$0.00`).
- 📊 **Interactive Dashboard (`/`)**: Total balance overview, Income vs Expense breakdown, quick action buttons, and recent activity log.
- ➕ **Add Expense & Income (`/add`)**: Toggle between Expense & Income types, select custom categories, title, and amount with validation.
- 💳 **Filterable Transaction History (`/transactions`)**: View complete transaction history with category icons and single-click filter tabs (`All`, `Expenses`, `Income`).
- 🎨 **Dark Glassmorphism Theme**: Built using dark-mode aesthetics with Tailind CSS v4, emerald accents, and backdrop blur panels.
- ⚡ **Lightning Fast Performance**: Powered by Vite 8 with Hot Module Replacement (HMR) and strict TypeScript type safety.

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **React 19** | Core UI Component Library |
| **TypeScript** | Static Type Checking & Developer Safety |
| **Tailwind CSS v4** | Modern Utility-First CSS Framework |
| **React Router DOM v7** | Client-Side Dynamic Routing |
| **Vite 8** | Next Generation Frontend Tooling |

---

## 📁 Project Structure

```text
expense-tracker/
├── src/
│   ├── components/
│   │   ├── MobileView.tsx            # Main Device Mockup Shell & Router View
│   │   └── subComponents/
│   │       ├── Dashboard.tsx          # Home Overview & Quick Actions
│   │       ├── Intialbalance.tsx      # Starting Wallet Setup Form
│   │       ├── AddTransaction.tsx     # Add New Income/Expense Form
│   │       └── Transactions.tsx       # Filterable Transaction History
│   ├── App.tsx                        # Root App Container
│   ├── main.tsx                       # React DOM Root & BrowserRouter
│   └── index.css                      # Tailwind CSS v4 Global Imports & Setup
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kaku-coder/expense-tracker-ts.git
   cd expense-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173/` in your browser.

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server |
| `npm run build` | Compiles TypeScript and builds production bundle |
| `npm run preview` | Previews production build locally |
| `npm run lint` | Runs ESLint for code quality checks |

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Developed with ❤️ by **[kaku-coder](https://github.com/kaku-coder)**.

Feel free to star ⭐️ the repository if you found this project helpful!

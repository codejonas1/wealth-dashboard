# 📈 Wealth Dashboard

A high-performance, dark-themed financial analytics web application built with **Next.js 16+ (App Router)** and **TypeScript**. The application focuses on clean domain modeling for personal assets (ETFs, Stocks, and Gold) and real-time ticker lookup.

---

## ✨ Core Features & Implementation

- **Optimized Asset Search:** Custom-built debouncing mechanism (`useDebounce`) integrated with the external financial API to prevent API flooding and stay within rate limits during asset lookup.
- **Premium Fintech UI:** Tailor-made, strict dark-mode interface built with **Tailwind CSS v4** and **shadcn/ui**, utilizing modern `oklch` color spaces for clean, financial-dashboard aesthetics.
- **Strict Domain Modeling:** Strongly otyped asset structures (`GOLD`, `STOKC & ETF`) ensuring 100% type safety and zero use of `any` across the application.

---

## 🏗️ Architecture & Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router architecture)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode, strong typing for financial models)
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Data Sources:** [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs/) (Ticker search & asset discovery)
- **Testing:** [Jest](https://jestjs.io/) & React Testing Library

---

## 🧪 Engineering Standards (Production-Ready)

* **Feature-Driven Git Workflow:** Developed using isolated feature branches with structured Jira-style naming conventions (e.g., `feat/WD-2-api-integration`).
* **Robust Unit Testing:** The custom `useDebounce` hook and core data structures are fully covered with **Jest** unit tests to guarantee reliability and prevent regressions.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/codejonas1/wealth-dashboard
cd wealth-dashboard
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
Create a .env file in the root directory:

```bash
FMP_API_KEY=your-api-key
```

### 4. Run the development server
```bash
pnpm run dev
```

### 4. Run unit tests
```bash
pnpm test
```


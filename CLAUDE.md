# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Starter project for a Claude Code course. It is a deliberately rough single-file React expense tracker — per the README it "intentionally has a bug, poor UI, and messy code" that get fixed over the course. Treat existing flaws as the work to be done, not conventions to preserve.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build
npm run lint       # ESLint over the repo
```

There is no test runner configured.

### Docker (dev)

`docker compose up` runs the dev server in a container, mapping host **5175** → container **5173** (host 5173 is reserved for another project), so open `http://localhost:5175`. The compose setup mounts the source for hot reload while keeping the container's `node_modules`, and sets `CHOKIDAR_USEPOLLING=true` so file watching works inside Docker. The dev server is bound to `0.0.0.0` to be reachable from the host.

## Architecture

- **Entire app lives in `src/App.jsx`.** All state, business logic, and markup are in one component. `src/main.jsx` mounts it; there are no other components, routes, hooks, or modules yet.
- **State is in-memory only.** Transactions seed from a hardcoded array in `useState` and reset on reload — no persistence, backend, or storage layer.
- A transaction is `{ id, description, amount, type, category, date }`. `type` is `"income" | "expense"`; `category` is one of the strings in the `categories` array.
- Derived values (`totalIncome`, `totalExpenses`, `balance`, `filteredTransactions`) are computed inline on each render from `transactions` plus the filter state.

### Known intentional bug

`amount` is stored as a **string** (both in the seed data and from the number input). The totals use `reduce((sum, t) => sum + t.amount, 0)`, so `+` concatenates strings instead of adding numbers — income/expense/balance are wrong. Fixing this (coercing amounts to numbers) is one of the course's core exercises; keep it in mind before "fixing" surrounding math.

## Stack

React 19 + Vite 7, ESLint 9 (flat config in `eslint.config.js`). No TypeScript, no router, no state library, no CSS framework — styling is plain CSS in `App.css` / `index.css`.

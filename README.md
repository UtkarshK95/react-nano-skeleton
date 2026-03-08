<div align="center">

# 🦴 react-nano-skeleton

**Ultra-minimal, zero-dependency skeleton loader for React.**

Lightweight · ESM-first · Preset-driven · No styling framework required

[![npm](https://img.shields.io/badge/npm-react--nano--skeleton-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-nano-skeleton)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-vercel-blue?style=for-the-badge&logo=vercel)](https://react-nano-skeleton-demo.vercel.app)

</div>

---

## ✨ Why react-nano-skeleton?

Most skeleton libraries are large and dependency-heavy, tightly coupled to Tailwind, MUI, or full design systems, and over-configurable for what is ultimately a simple loading state.

**react-nano-skeleton** focuses on tiny size + practical presets + zero setup. You get the real loading UI patterns used in modern apps without importing an entire UI framework.

- **Zero runtime dependencies**
- **Extremely small bundle** — loading states are essentially free in production
- **14 ready-to-use UI presets** for the most common patterns
- **ESM-only, tree-shakable** distribution
- **TypeScript types included**
- **Dark-theme-ready shimmer**
- Works with **Vite, Next.js, Webpack, CRA**
- No Tailwind or CSS-in-JS required

---

## 📦 Installation

```bash
npm install react-nano-skeleton
```

---

## 🚀 Quick Start

```jsx
import { Skeleton } from "react-nano-skeleton";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <Skeleton height={20} />
      <Skeleton.Text lines={3} />
      <Skeleton.Card />
      <Skeleton.Table />
    </div>
  );
}
```

---

## 🧩 Components API

### `Skeleton` — Primitive

Low-level building block for custom layouts.

| Prop      | Type              | Default   | Description              |
|-----------|-------------------|-----------|--------------------------|
| `width`   | `number\|string`  | `"100%"`  | Block width              |
| `height`  | `number\|string`  | `16`      | Block height             |
| `radius`  | `number\|string`  | `8`       | Border radius            |
| `count`   | `number`          | `1`       | Repeat blocks            |
| `animate` | `boolean`         | `true`    | Enable shimmer animation |

---

### Presets

| Component              | Best For                                  | Usage                              |
|------------------------|-------------------------------------------|------------------------------------|
| `Skeleton.Text`        | Descriptions, articles, forms             | `<Skeleton.Text lines={3} />`      |
| `Skeleton.AvatarText`  | Comments, chats, user lists               | `<Skeleton.AvatarText lines={2} />`|
| `Skeleton.Card`        | Blog grids, products, dashboards          | `<Skeleton.Card lines={3} />`      |
| `Skeleton.Table`       | Admin panels, analytics, data grids       | `<Skeleton.Table rows={5} cols={4} />`|
| `Skeleton.Banner`      | Landing headers, promotions               | `<Skeleton.Banner />`              |
| `Skeleton.List`        | Menus, feeds, notifications               | `<Skeleton.List items={5} />`      |
| `Skeleton.ProductRow`  | E-commerce product rows (image+title+price)| `<Skeleton.ProductRow />`         |
| `Skeleton.Chip`        | Tags, filters, categories                 | `<Skeleton.Chip />`                |
| `Skeleton.Comment`     | Comment sections, discussions             | `<Skeleton.Comment />`             |
| `Skeleton.Button`      | Button-shaped loading blocks              | `<Skeleton.Button width={120} />`  |
| `Skeleton.Image`       | Image / thumbnail placeholders            | `<Skeleton.Image height={200} />`  |
| `Skeleton.Stat`        | Analytics cards, KPIs                     | `<Skeleton.Stat />`                |
| `Skeleton.Form`        | Auth pages, settings, checkout            | `<Skeleton.Form fields={4} />`     |

---

## 🎨 Design Philosophy

- Neutral **dark-ready base color** that works across light and dark themes
- **Soft shimmer animation** with consistent timing
- **8–16px spacing rhythm** matching modern UI systems
- Rounded corners compatible with common design patterns
- **Framework-agnostic styling** — no class name conflicts

---

## 📁 Project Structure

```
react-nano-skeleton/
├── src/                  # Component source and types
├── tsup.config.ts        # Build config (ESM output)
├── vitest.config.ts      # Test configuration
├── tsconfig.json         # TypeScript config
└── package.json
```

---

## 🛠️ Development

```bash
npm install
npm run build
npm test
```

Testing uses **Vitest** + **React Testing Library** to ensure components import correctly, render without crashing, and all presets mount successfully.

---

## 🤝 Contributing

PRs and issues are welcome! Ways to contribute: new presets, accessibility improvements, animation polish, or performance tweaks. Please open an issue first to discuss significant changes.

---

## ☕ Support the Project

- **GitHub:** [https://github.com/UtkarshK95/react-nano-skeleton](https://github.com/UtkarshK95/react-nano-skeleton)
- **Buy Me a Coffee:** [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/UtkarshK95">Utkarsh Katiyar</a>
</div>

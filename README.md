# react-nano-skeleton

Ultra-minimal, zero-dependency skeleton loader for React.

**< 7 KB gzipped · ESM-first · Preset-driven · No styling framework required**

---

# ✨ Why this library exists

Most skeleton libraries are:

- Large and dependency-heavy
- Coupled to Tailwind, MUI, or full design systems
- Over-configurable for simple loading states

**react-nano-skeleton** focuses on:

> Tiny size + practical presets + zero setup.

You get the **real loading UI patterns used in modern apps**
without importing an entire UI framework.

---

# ✨ Features

- **Extremely small bundle** (< 7 KB gzipped)
- **Zero runtime dependencies**
- **Modern ESM-only distribution**
- Works with **Vite, Next.js, Webpack, CRA**
- **14 ready-to-use UI skeleton presets**
- **Tree-shakable**
- **TypeScript types included**
- **Dark-theme-ready shimmer**
- No Tailwind / CSS-in-JS required

---

# 📦 Installation

```bash
npm install react-nano-skeleton
```

---

# 🚀 Quick start

```tsx
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

# 🧩 Components API

## 1. Skeleton (primitive)

Low-level building block for custom layouts.

### Props

| Prop    | Type    | Default | Description    |
| ------- | ------- | ------- | -------------- | ------------- |
| width   | number  | string  | `"100%"`       | Block width   |
| height  | number  | string  | `16`           | Block height  |
| radius  | number  | string  | `8`            | Border radius |
| count   | number  | `1`     | Repeat blocks  |
| animate | boolean | `true`  | Enable shimmer |

---

## 2. Skeleton.Text

Paragraph-style stacked lines.

**Best for:** descriptions, articles, forms.

```tsx
<Skeleton.Text lines={3} />
```

---

## 3. Skeleton.AvatarText

Avatar + text rows.

**Best for:** comments, chats, user lists.

```tsx
<Skeleton.AvatarText lines={2} />
```

---

## 4. Skeleton.Card

Image + title + description layout.

**Best for:** blog grids, products, dashboards.

```tsx
<Skeleton.Card lines={3} />
```

---

## 5. Skeleton.Table

Table-like placeholder.

**Best for:** admin panels, analytics, data grids.

```tsx
<Skeleton.Table rows={5} cols={4} />
```

---

## 6. Skeleton.Banner

Wide banner / hero loading block.

**Best for:** landing headers, promotions.

```tsx
<Skeleton.Banner />
```

---

## 7. Skeleton.List

Vertical repeated row layout.

**Best for:** menus, feeds, notifications.

```tsx
<Skeleton.List items={5} />
```

---

## 8. Skeleton.ProductRow

E-commerce style product row.

Includes:

- image
- title
- price area

```tsx
<Skeleton.ProductRow />
```

---

## 9. Skeleton.Chip

Small rounded label placeholder.

**Best for:** tags, filters, categories.

```tsx
<Skeleton.Chip />
```

---

## 10. Skeleton.Comment

Avatar + multi-line message layout.

**Best for:** comment sections, discussions.

```tsx
<Skeleton.Comment />
```

---

## 11. Skeleton.Button

Button-shaped loading block.

```tsx
<Skeleton.Button width={120} />
```

---

## 12. Skeleton.Image

Image / thumbnail placeholder.

```tsx
<Skeleton.Image height={200} />
```

---

## 13. Skeleton.Stat

Dashboard metric block.

**Best for:** analytics cards, KPIs.

```tsx
<Skeleton.Stat />
```

---

## 14. Skeleton.Form

Form-like stacked inputs.

**Best for:** auth pages, settings, checkout.

```tsx
<Skeleton.Form fields={4} />
```

---

# 🎨 Design philosophy

- Neutral **dark-ready base color**
- **Soft shimmer animation**
- Consistent **8–16px spacing rhythm**
- Rounded corners matching modern UI systems
- **Framework-agnostic styling**

---

# 📏 Bundle size

Enforced via **size-limit**:

```
< 7 KB gzipped
```

Loading states become **essentially free** in production.

---

# 🧪 Testing

Minimal smoke tests using:

- **Vitest**
- **React Testing Library**

Ensures:

- Components import correctly
- Rendering does not crash
- Presets mount successfully

---

# 🛠 Development

```bash
npm install
npm run build
npm test
```

---

# 🤝 Contributing

PRs and issues are welcome.

Ways to contribute:

- new presets
- accessibility improvements
- animation polish
- performance tweaks

---

# 📄 License

MIT © Utkarsh

Free for personal and commercial use.

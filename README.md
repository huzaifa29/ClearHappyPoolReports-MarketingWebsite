# Clear & Happy Pool Reports — Marketing Website

A modern Next.js 14 (App Router) marketing website for Clear & Happy Pool Reports.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
clearhappy-pool/
├── app/
│   ├── layout.js          # Root layout + global metadata
│   └── page.js            # Home page (assembles all sections)
│
├── components/
│   ├── navbar/
│   │   ├── Navbar.js              # Navigation bar (fixed, scroll-aware)
│   │   └── Navbar.module.css
│   ├── hero/
│   │   ├── Hero.js                # Hero section (first screen)
│   │   └── Hero.module.css
│   ├── sections/
│   │   ├── AboutUs.js             # (coming soon)
│   │   ├── Features.js            # (coming soon)
│   │   ├── Benefits.js            # (coming soon)
│   │   ├── Pricing.js             # (coming soon)
│   │   └── ContactUs.js           # (coming soon)
│   └── ui/
│       └── Footer.js              # (coming soon)
│
├── public/
│   └── images/
│       ├── logo.png               # Clear & Happy logo
│       └── hero-pool.jpg          # Hero section pool image
│
├── styles/
│   └── globals.css                # Design tokens, resets, utilities
│
├── jsconfig.json                  # @ path aliases
├── next.config.js
└── package.json
```

---

## 🎨 Design System

| Token              | Value                        |
|--------------------|------------------------------|
| Primary Cyan       | `#06b6d4`                    |
| Primary Teal       | `#14b8a6`                    |
| Deep Teal          | `#0d7a73`                    |
| Dark Blue          | `#1e3a5f`                    |
| Accent Pink        | `#ec4899`                    |
| Heading Font       | Nunito (700, 800, 900)       |
| Body Font          | DM Sans (300, 400, 500)      |

All tokens are defined as CSS custom properties in `styles/globals.css`.

---

## 🏗️ Adding New Sections

1. Create your component in `components/sections/YourSection.js`
2. Create matching `YourSection.module.css`
3. Import and add to `app/page.js`

---

## 📦 Built With

- [Next.js 14](https://nextjs.org/) — App Router
- CSS Modules — scoped, zero-runtime styling
- Google Fonts — Nunito + DM Sans

# Katal — Official Website

A single-page marketing website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero section with animated background
│   ├── Services.tsx      # 4 service cards
│   ├── Process.tsx       # 5-step process timeline
│   ├── TechStack.tsx     # Tech stack by category
│   ├── About.tsx         # Why Katal + pillars
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Footer with links
└── lib/
    └── utils.ts          # cn() utility
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary background | `#06060F` (void) |
| Surface | `#0F0F24` |
| Brand purple | `#9B30FF` |
| Brand magenta | `#E040FB` |
| Text muted | `rgba(199,125,255,0.6)` |
| Display font | Syne (Google Fonts) |
| Body font | DM Sans (Google Fonts) |

---

## ✅ Customization Checklist

- [ ] Replace `hello@katal.dev` with your real email in `Contact.tsx` and `Footer.tsx`
- [ ] Update social links in `Footer.tsx`
- [ ] Add real logo image in `public/` and update `Navbar.tsx`
- [ ] Connect the contact form to a backend (Resend, EmailJS, Formspree, etc.)
- [ ] Update stats in `Hero.tsx` to match real numbers
- [ ] Add real project/case study data when available
- [ ] Set up analytics (Vercel Analytics, Plausible, etc.)

---

## 🚢 Deployment

Recommended: **Vercel** (zero-config Next.js deployment)

```bash
npm install -g vercel
vercel
```

---

Built with ☕ by Katal

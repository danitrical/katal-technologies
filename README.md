# Katal — Official Website

A single-page marketing website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Website: https://katal.pk

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

Built with ☕ by Katal

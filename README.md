<div align="center">

  <h1>👟 DNA THRIFT — Streetwear. Redefining.</h1>

  <p>
    <b>An ultra-modern, high-performance e-commerce platform for authentic thrifted streetwear and limited-drop sneakers.</b>
  </p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js" alt="Next.js 16" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS v4" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://gsap.com"><img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" /></a>
  </p>

  <p>
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-brand-manifesto">Manifesto</a>
  </p>

  <br />

</div>

---

## 📌 Executive Summary

**DNA Thrift** is a premier e-commerce application built for Pakistan's evolving streetwear and thrift culture. Based in Lahore, DNA Thrift directly curates and restores authentic, globally sourced footwear and vintage apparel—offering high-end streetwear grails without high retail price tags.

The web application is designed with **editorial visual excellence**, featuring **3D camera perspective transformations**, **interactive stacked product carousels**, **glassmorphism UI overlays**, and **smooth GSAP micro-animations**.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🎮 3D Interactive Hero** | Dynamic low-angle camera perspective card with live video playback, lens flare glints, and floating glassmorphism metadata cards. |
| **🎴 Stacked 3D Carousel** | Interactive product stack with real-time depth scaling, backdrop blur effects, size selectors (US 7-12), and colorway pickers. |
| **⚡ Infinite Rolling Marquee** | Smooth continuous brand marquee spotlighting global labels (*Nike, Jordan, Yeezy, Salomon, Off-White, Asics*). |
| **🧩 Bento Category Grid** | Asymmetrical, high-impact visual grid showcasing curated categories (*Outerwear, Activewear, Footwear, Clearance*). |
| **📜 Editorial Storytelling** | Full dedicated **About Us** experience detailing global sourcing hubs (China, Europe), independent authentication, and nationwide delivery. |
| **📱 Responsive Precision** | Fully fluid typography hierarchy adhering to standard container breakpoints (`max-w-7xl`). |

---

## 🛠️ Tech Stack & Architecture

```
Front-End Framework  : Next.js 16 (App Router)
UI Runtime           : React 19
Styling Engine       : Tailwind CSS v4 (@import "tailwindcss")
Animation Library    : GSAP 3.x (GreenSock) & ScrollTrigger
Iconography          : Lucide React Icons
Type System          : TypeScript 5
Font System          : Inter Variable (Google Fonts via next/font)
```

---

## 📁 Repository Structure

```text
drift-store/
├── 📁 public/                     # Static media & editorial assets
│   ├── 🎥 cat-skate.mp4           # HD 3D skateboarding hero video loop
│   └── 🖼️ images/                 # Transparent PNG product & model assets
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router configuration
│   │   ├── 📁 about/             # Brand story, mission, & location page
│   │   ├── 🎨 globals.css         # CSS design tokens, keyframes & Tailwind imports
│   │   ├── 📄 layout.tsx          # Root layout shell with font variables & nav
│   │   └── 📄 page.tsx            # Main store homepage composition
│   ├── 📁 components/             # Reusable UI component library
│   │   ├── 🧩 Navbar.tsx          # Glassmorphic header with navigation & cart badge
│   │   ├── 🧩 Hero.tsx            # 3D interactive hero with GSAP timelines
│   │   ├── 🧩 ProductShowcase.tsx # Stacked 3D product carousel component
│   │   ├── 🧩 PopularPicks.tsx    # Horizontal scrollable product catalog
│   │   ├── 🧩 NewArrivals.tsx     # 4-column product grid with condition badges
│   │   ├── 🧩 Categories.tsx      # Bento grid category showcase
│   │   ├── 🧩 IdentityMarquee.tsx # Editorial brand manifesto & rolling logo ribbon
│   │   ├── 🧩 FeaturedProduct.tsx # Product spotlight with dropdown attribute selectors
│   │   ├── 🧩 Testimonials.tsx    # Community reviews & trust badge integration
│   │   └── 🧩 Footer.tsx         # Overlapping dark footer with floating shoe cards
│   └── 📁 hooks/                  # Custom React hooks
│       └── ⚓ useScrollAnimation.ts # GSAP scroll-triggered entrance animations
└── 📄 package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18.x** or higher installed:

```bash
node -v
# v18.x.x or higher
```

### 2. Installation

Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/umersmx/thrift-store.git

# Navigate into project directory
cd thrift-store

# Install node packages
npm install
```

### 3. Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚡ Production Deployment

To generate an optimized production build:

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

### Deploy on Vercel
This application is fully optimized for **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/umersmx/thrift-store)

---

## 🍃 Sustainability & Authentication

> **Circular Economy Commitment**: By sourcing globally and curating gently-used footwear, DNA Thrift actively diverts quality shoes from landfills while reducing reliance on fast-fashion manufacturing. Every pair is thoroughly inspected, cleaned, sanitized, and verified before delivery across Pakistan.

---

## 📄 License

This project is open-source under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

<div align="center">
  <br />
  <p>© 2026 <b>DNA Thrift</b>. All Rights Reserved.</p>
</div>

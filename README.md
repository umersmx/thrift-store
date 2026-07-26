# DNA THRIFT — Streetwear. Redefining.

> **DNA Thrift** is an independent, premium streetwear & authentic thrifted footwear e-commerce platform based in Lahore, Pakistan. Built with modern web technologies, editorial design principles, 3D interactive hero showcases, and smooth GSAP micro-animations.

---

## 🌟 Key Highlights

- **3D Interactive Hero Experience**: Feature container with dynamic 3D camera perspectives, floating glassmorphism badges, and smooth video sync.
- **Interactive Stacked Product Carousel**: Custom stacked card carousel with perspective depth, active blur effects, and real-time variant selections (sizes & colorways).
- **Infinite Brand Marquee**: Continuous rolling marquee showcasing top global footwear & streetwear labels.
- **Bento Grid Category Showcase**: High-impact visual layout for browsing curated drops (Outerwear, Activewear, Footwear, Clearance).
- **Transparent Storytelling & About Page**: Comprehensive brand manifesto detailing global sourcing, authentication processes, circular economy sustainability, and nationwide logistics.
- **Modern Responsive Design**: Editorial typography hierarchy with full screen-width consistency across mobile, tablet, and ultra-wide displays.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [GSAP (GreenSock)](https://gsap.com/) & ScrollTrigger |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Font** | [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter) |

---

## 📁 Project Structure

```text
drift-store/
├── public/                  # Static assets & hero media
│   ├── cat-skate.mp4        # Interactive hero video loop
│   └── images/              # Curated product images & editorial assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # Brand narrative & contact page
│   │   ├── globals.css      # Design tokens, keyframes & Tailwind imports
│   │   ├── layout.tsx       # Root layout wrapper
│   │   └── page.tsx         # Homepage composition
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Fixed header navigation
│   │   ├── Hero.tsx         # 3D animated hero section
│   │   ├── ProductShowcase.tsx # Stacked product carousel
│   │   ├── PopularPicks.tsx # Horizontal scrolling product list
│   │   ├── NewArrivals.tsx  # Grid showcase
│   │   ├── Categories.tsx   # Bento grid categories
│   │   ├── IdentityMarquee.tsx # Editorial brand manifesto & marquee
│   │   ├── FeaturedProduct.tsx # Product spotlight widget
│   │   ├── Testimonials.tsx # Community reviews & trust badges
│   │   └── Footer.tsx       # Overlapping brand footer
│   └── hooks/               # Custom React hooks (scroll animations)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/thrift-store.git
   cd thrift-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## ⚡ Production Build

To test or generate the production build:

```bash
npm run build
npm run start
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

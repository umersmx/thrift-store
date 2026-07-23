"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gsap from "gsap";

interface ColorOption {
  name: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: ColorOption[];
  sizes: string[];
  defaultSize: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "INK LINEN SHIRT",
    price: "$74.00",
    image: "/images/ink-linen-shirt.png",
    colors: [
      { name: "Black", value: "#111111" },
      { name: "Cream", value: "#d4c5b9" },
      { name: "Slate", value: "#5a6265" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "M",
    rating: 4.8,
    reviews: 94,
    category: "CLOTHING / SHIRTS",
    description:
      "Oversized linen shirt crafted from breathable organic linen. Dropped shoulders, relaxed collar, and curved hem for an effortless street aesthetic.",
  },
  {
    id: 2,
    name: "UNBROKEN STRIPE TEE",
    price: "$68.00",
    image: "/images/unbroken-stripe-tee.png",
    colors: [
      { name: "Pink Crest", value: "#a32a48" },
      { name: "Navy Blue", value: "#1e2d4a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "XS",
    rating: 4.8,
    reviews: 120,
    category: "CLOTHING / TEES",
    description:
      "Bold stripe crest tee with oversized fit. Off-shoulder cut and curved hem for an effortless street look.",
  },
  {
    id: 3,
    name: "MIDNIGHT CAMI SET",
    price: "$118.00",
    image: "/images/midnight-cami-set.png",
    colors: [
      { name: "Midnight Black", value: "#111111" },
      { name: "Desert Beige", value: "#c5b59f" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    rating: 4.9,
    reviews: 156,
    category: "CLOTHING / SETS",
    description:
      "Minimalist three-piece cami and wide-leg trouser set paired with an unbuttoned lightweight layer.",
  },
  {
    id: 4,
    name: "REBEL BLACK STREETWEAR SET",
    price: "$185.00",
    image: "/images/black-streetwear-set.png",
    colors: [
      { name: "Black", value: "#111111" },
      { name: "Charcoal", value: "#333333" },
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    rating: 4.9,
    reviews: 210,
    category: "CLOTHING / SETS",
    description:
      "Ultra-heavyweight cargo streetwear set featuring dropped shoulders and custom hardware.",
  },
  {
    id: 5,
    name: "VINTAGE LEATHER RACING JACKET",
    price: "$240.00",
    image: "/images/vintage-racing-jacket.png",
    colors: [
      { name: "Brown", value: "#2a1a0a" },
      { name: "Black", value: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "L",
    rating: 4.9,
    reviews: 164,
    category: "OUTERWEAR / JACKETS",
    description:
      "Distressed vintage leather finish with race crest embroidery and heavyweight lining.",
  },
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(products[0].defaultSize);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollAnimation();

  const product = products[activeIndex];
  const total = products.length;

  const getRelativeIndex = (index: number) => {
    // How many steps ahead is this index from activeIndex (wrapping)
    return (index - activeIndex + total) % total;
  };

  const animateDetailsIn = useCallback(() => {
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, []);

  const goTo = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return;
      setIsAnimating(true);

      // Fade out details
      if (detailsRef.current) {
        gsap.to(detailsRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
        });
      }

      setTimeout(() => {
        const newIndex =
          direction === "next"
            ? (activeIndex + 1) % total
            : (activeIndex - 1 + total) % total;

        setActiveIndex(newIndex);
        setSelectedColor(0);
        setSelectedSize(products[newIndex].defaultSize);
        animateDetailsIn();

        setTimeout(() => setIsAnimating(false), 500);
      }, 200);
    },
    [activeIndex, total, isAnimating, animateDetailsIn]
  );

  // Calculate style for each card based on its relative position
  const getCardStyle = (index: number): React.CSSProperties => {
    const rel = getRelativeIndex(index);

    // Active card (rel === 0): front & center
    if (rel === 0) {
      return {
        zIndex: 20,
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        filter: "blur(0px)",
        pointerEvents: "auto",
      };
    }

    // Next card (rel === 1): peeking behind, shifted left
    if (rel === 1) {
      return {
        zIndex: 15,
        transform: "translateX(-30%) scale(0.85)",
        opacity: 0.55,
        filter: "blur(2px)",
        pointerEvents: "none",
      };
    }

    // 2nd next card (rel === 2): further back
    if (rel === 2) {
      return {
        zIndex: 10,
        transform: "translateX(-50%) scale(0.72)",
        opacity: 0.3,
        filter: "blur(4px)",
        pointerEvents: "none",
      };
    }

    // Everything else: hidden behind
    return {
      zIndex: 1,
      transform: "translateX(-60%) scale(0.65)",
      opacity: 0,
      filter: "blur(6px)",
      pointerEvents: "none",
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#e8e6e1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        {/* Section Header */}
        <div data-animate className="mb-6 lg:mb-10 text-left">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-2">
            FEATURED PRODUCTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 uppercase">
            The Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          {/* Left — Stacked Carousel (7 Cols) */}
          <div
            data-animate
            className="lg:col-span-7 relative min-h-[460px] sm:min-h-[560px] lg:min-h-[640px]"
          >
            {/* Stacked Cards Container */}
            <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    ...getCardStyle(i),
                    transition:
                      "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <div className="relative w-[280px] h-[400px] sm:w-[340px] sm:h-[480px] lg:w-[380px] lg:h-[560px]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      priority={i <= 2}
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                      className="object-contain object-center drop-shadow-2xl pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Nav Buttons */}
            <button
              onClick={() => goTo("prev")}
              disabled={isAnimating}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md border border-black/10 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer disabled:opacity-40"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-800" />
            </button>
            <button
              onClick={() => goTo("next")}
              disabled={isAnimating}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md border border-black/10 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer disabled:opacity-40"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 text-zinc-800" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isAnimating && i !== activeIndex) {
                      setIsAnimating(true);
                      if (detailsRef.current) {
                        gsap.to(detailsRef.current, {
                          opacity: 0,
                          y: -10,
                          duration: 0.2,
                          ease: "power2.in",
                        });
                      }
                      setTimeout(() => {
                        setActiveIndex(i);
                        setSelectedColor(0);
                        setSelectedSize(products[i].defaultSize);
                        animateDetailsIn();
                        setTimeout(() => setIsAnimating(false), 500);
                      }, 200);
                    }
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === i
                      ? "w-8 h-2.5 bg-zinc-900"
                      : "w-2.5 h-2.5 bg-zinc-400/50 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to product ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — Product Details Panel (5 Cols) */}
          <div
            ref={detailsRef}
            data-animate
            className="lg:col-span-5 flex flex-col justify-center gap-5 lg:pl-8"
          >
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-black text-black" />
                <span className="text-xs font-bold text-zinc-900">
                  {product.rating}
                </span>
                <span className="text-[10px] text-zinc-500">
                  ({product.reviews})
                </span>
              </div>
            </div>

            {/* Product Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[0.98] uppercase">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-2xl font-bold text-zinc-900">{product.price}</p>

            {/* Select Size */}
            <div className="mt-1">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-3">
                SELECT SIZE (US)
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white shadow-lg scale-105"
                        : "bg-white/70 text-zinc-800 border border-zinc-300/60 hover:bg-white hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Color */}
            <div className="mt-1">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-3">
                SELECT COLOR
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={color.name}
                    className={`w-7 h-7 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedColor === i
                        ? "ring-2 ring-black ring-offset-2 ring-offset-[#e8e6e1] scale-110 shadow-md"
                        : "hover:scale-105 opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mt-1">
              {product.description}
            </p>

            {/* ADD TO CART */}
            <button className="w-full mt-3 py-3 px-6 sm:px-8 bg-[#111111] text-white rounded-full flex items-center justify-between text-xs font-bold tracking-[0.18em] uppercase hover:bg-black transition-all duration-300 shadow-xl shadow-black/10 cursor-pointer group">
              <span>ADD TO CART</span>
              <div className="flex items-center gap-2 bg-zinc-800/90 px-4 py-2 rounded-full text-xs font-bold text-white group-hover:bg-zinc-700 transition-colors">
                <span>{product.price}</span>
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

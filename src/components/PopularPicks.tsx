"use client";

import { useRef } from "react";
import Image from "next/image";
import { ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const picks = [
  { name: "Chaotic Star Cargo Set", price: "$165", image: "/images/black-streetwear-set.png" },
  { name: "Unbroken Relaxed Set", price: "$140", image: "/images/unbroken-stripe-tee.png" },
  { name: "Vintage Racing Leather", price: "$240", image: "/images/vintage-racing-jacket.png" },
  { name: "Shadow Oversized Hoodie", price: "$189", image: "/images/product-hoodie.png" },
  { name: "Urban Street Sneakers", price: "$210", image: "/images/product-sneakers.png" },
  { name: "Midnight Cargo Pants", price: "$155", image: "/images/product-pants.png" },
];

export default function PopularPicks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollAnimation();

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f5f4f0] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          data-animate
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-2">
              INSIDE THE DROP
            </p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-zinc-900">
              Popular Picks
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          data-animate
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {picks.map((item, i) => (
            <div
              key={i}
              className="group shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
            >
              <div className="relative w-full h-80 bg-[#ededea] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="288px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  aria-label="Add item to bag"
                  className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-zinc-900 truncate max-w-[180px]">
                    {item.name}
                  </h3>
                  <p className="text-base font-black text-zinc-900 mt-0.5">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

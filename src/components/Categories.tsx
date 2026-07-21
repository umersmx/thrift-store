"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    name: "New Arrivals",
    image: "/images/hero-model.png",
  },
  {
    name: "Outerwear",
    image: "/images/category-outerwear.png",
  },
  {
    name: "Activewear",
    image: "/images/category-activewear.png",
  },
  {
    name: "Clearance",
    image: "/images/product-jacket.png",
  },
];

export default function Categories() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/40 mb-3">
            Browse
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-ink">
            Our Categories
          </h2>
        </div>

        {/* Bento Grid — 3 columns with row-span for tall card */}
        <div data-animate className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Large Tall Card — spans all 3 rows in the first column */}
          <div
            className="group relative lg:row-span-3 rounded-3xl overflow-hidden cursor-pointer h-[300px] lg:h-auto"
          >
            <Image
              src={categories[0].image}
              alt={categories[0].name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
               <h3 className="text-2xl font-black text-white mb-3">
                {categories[0].name}
              </h3>
              <span className="inline-flex px-7 py-3.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-full border border-white/30 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                View Collection
              </span>
            </div>
          </div>

          {/* Stacked Smaller Cards — each spans 2 columns */}
          {categories.slice(1).map((cat, i) => (
            <div
              key={i}
              className="group relative lg:col-span-2 rounded-3xl overflow-hidden cursor-pointer h-[200px]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white mb-2">
                  {cat.name}
                </h3>
                <span className="inline-flex px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-[0.15em] uppercase rounded-full border border-white/30 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  View Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

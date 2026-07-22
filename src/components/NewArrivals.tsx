"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const arrivals = [
  { name: "Shadow Oversized Hoodie", price: "$189", image: "/images/product-hoodie.png" },
  { name: "Classic White Tee", price: "$79", image: "/images/product-tshirt.png" },
  { name: "Urban Cargo Pants", price: "$145", image: "/images/product-pants.png" },
  { name: "Rebel Leather Jacket", price: "$320", image: "/images/product-jacket.png" },
  { name: "Street Sneakers", price: "$210", image: "/images/product-sneakers.png" },
  { name: "Shadow Hoodie V2", price: "$199", image: "/images/product-hoodie.png" },
  { name: "Minimal Tee Black", price: "$89", image: "/images/product-tshirt.png" },
  { name: "Utility Pants", price: "$155", image: "/images/product-pants.png" },
];

export default function NewArrivals() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/40 mb-3">
            Just Arrived
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-ink">
            New Arrivals
          </h2>
        </div>

        {/* 4-column Grid */}
        <div data-animate className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {arrivals.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full aspect-square bg-offwhite overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                {/* NEW Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-ink text-white text-[10px] font-bold tracking-[0.15em] uppercase rounded-full">
                  New
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-ink truncate">
                  {item.name}
                </h3>
                <p className="text-base font-black text-ink mt-1">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

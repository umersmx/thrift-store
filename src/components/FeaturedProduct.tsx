"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Check, ShoppingBag, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const thumbnails = [
  "/images/featured-shoe.png",
  "/images/product-sneakers.png",
  "/images/featured-shoe.png",
  "/images/product-sneakers.png",
];

const sizes = ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"];
const colors = [
  { name: "Black", hex: "#111" },
  { name: "White", hex: "#FFF" },
  { name: "Grey", hex: "#888" },
];

export default function FeaturedProduct() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [selectedSize, setSelectedSize] = useState("US 9");
  const [selectedColor, setSelectedColor] = useState(0);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Images */}
          <div data-animate>
            {/* Main Image */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white mb-5">
              <Image
                src={thumbnails[selectedThumb]}
                alt="Featured Shoe"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-10"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className={`relative aspect-square rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                    selectedThumb === i
                      ? "ring-2 ring-ink ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-contain p-3"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div data-animate className="flex flex-col gap-5 lg:pt-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/40">
              Featured Drop
            </p>

            <h2 className="text-3xl lg:text-4xl font-black tracking-[-0.03em] text-ink leading-tight">
              Nike Air
            </h2>

            <p className="text-2xl font-bold text-ink">$210.00</p>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? "fill-ink text-ink" : "text-ink/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-ink/50">(328 reviews)</span>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <p className="text-xs text-ink/40 font-medium">Status</p>
                  <p className="text-sm font-bold text-ink">To Order</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-ink/40 font-medium">Stock</p>
                  <p className="text-sm font-bold text-green-600">In Stock</p>
                </div>
              </div>
            </div>

            {/* Size Dropdown */}
            <div className="relative my-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/40 mb-2">
                Size
              </p>
              <button
                onClick={() => {
                  setSizeOpen(!sizeOpen);
                  setColorOpen(false);
                }}
                className="w-full flex items-center justify-between px-6 py-4 bg-card rounded-2xl border border-border text-sm font-semibold text-ink hover:border-ink/30 transition-colors cursor-pointer"
              >
                {selectedSize}
                <ChevronDown
                  className={`w-4 h-4 text-ink/40 transition-transform duration-300 ${
                    sizeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {sizeOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl border border-border shadow-xl z-20 overflow-hidden">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeOpen(false);
                      }}
                      className={`w-full px-6 py-3.5 text-left text-sm font-medium hover:bg-ink/5 transition-colors cursor-pointer ${
                        selectedSize === size ? "bg-ink/5 font-bold" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Color Dropdown */}
            <div className="relative my-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/40 mb-2">
                Color
              </p>
              <button
                onClick={() => {
                  setColorOpen(!colorOpen);
                  setSizeOpen(false);
                }}
                className="w-full flex items-center justify-between px-6 py-4 bg-card rounded-2xl border border-border text-sm font-semibold text-ink hover:border-ink/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full border border-border"
                    style={{ backgroundColor: colors[selectedColor].hex }}
                  />
                  {colors[selectedColor].name}
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-ink/40 transition-transform duration-300 ${
                    colorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {colorOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl border border-border shadow-xl z-20 overflow-hidden">
                  {colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(i);
                        setColorOpen(false);
                      }}
                      className={`w-full px-6 py-3.5 text-left text-sm font-medium hover:bg-ink/5 transition-colors flex items-center gap-3 cursor-pointer ${
                        selectedColor === i ? "bg-ink/5 font-bold" : ""
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* My Drip Bag Button */}
            <button className="w-full py-4 px-8 bg-ink text-background rounded-full text-sm font-bold tracking-[0.1em] uppercase hover:bg-ink/90 transition-all duration-300 hover:shadow-xl hover:shadow-ink/20 flex items-center justify-center gap-3 mt-8 mb-4 cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              My Drip Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

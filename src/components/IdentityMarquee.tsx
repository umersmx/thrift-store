"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const marqueeImages = [
  "/images/hero-model.png",
  "/images/marquee-1.png",
  "/images/marquee-2.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
  "/images/hero-model.png",
  "/images/marquee-1.png",
  "/images/marquee-2.png",
];

export default function IdentityMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<SVGSVGElement>(null);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    // Infinite marquee
    const marqueeEl = marqueeRef.current;
    if (marqueeEl) {
      const totalWidth = marqueeEl.scrollWidth / 2;
      gsap.to(marqueeEl, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    // Spinning text
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/40 mb-3">
              THE MANIFESTO
            </p>
            <h2
              data-animate
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-ink leading-tight"
            >
              Express Your Identity <br className="hidden sm:inline" />
              With Our Unique Style
            </h2>
          </div>
          <div className="md:col-span-4">
            <p
              data-animate
              className="text-sm lg:text-base text-ink/60 leading-relaxed font-medium"
            >
              Fashion is more than fabric — it&apos;s a statement. Our collections
              are crafted for those who refuse to blend in.
            </p>
          </div>
        </div>
      </div>

      {/* Curved SVG Overlay Top */}
      <div className="relative">
        <svg
          className="absolute -top-1 left-0 w-full h-12 z-10"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,48 Q720,0 1440,48 L1440,0 L0,0 Z" fill="white" />
        </svg>

        {/* Marquee — no data-animate so it's always visible */}
        <div className="py-8 bg-ink/5 overflow-hidden">
          <div ref={marqueeRef} className="flex gap-5" style={{ width: "max-content" }}>
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-48 h-64 lg:w-56 lg:h-72 rounded-2xl overflow-hidden relative"
              >
                <Image
                  src={img}
                  alt={`Model ${(i % marqueeImages.length) + 1}`}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Curved SVG Overlay Bottom */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-12 z-10"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,48 1440,0 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>

      {/* Spinning SCROLL DOWN Badge */}
      <div data-animate className="flex justify-end max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg
            ref={spinnerRef}
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              className="fill-ink text-[9px] font-bold uppercase"
              style={{ letterSpacing: "0.35em" }}
            >
              <textPath xlinkHref="#circlePath">
                SCROLL DOWN • SCROLL DOWN •{" "}
              </textPath>
            </text>
          </svg>
          <ArrowDown className="w-5 h-5 text-ink animate-bounce" />
        </div>
      </div>
    </section>
  );
}

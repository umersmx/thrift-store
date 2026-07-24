"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Alex Rivera",
    avatar: "/images/marquee-1.png",
    text: "The quality is insane. Every piece feels like it was made just for me. DNA Thrift is the only brand that gets streetwear right.",
    rating: 5,
  },
  {
    name: "Jordan Kim",
    avatar: "/images/marquee-2.png",
    text: "I've been collecting streetwear for years and nothing comes close to the craftsmanship here. The attention to detail is unmatched. Worth every penny.",
    rating: 5,
  },
  {
    name: "Mia Chen",
    avatar: "/images/marquee-3.png",
    text: "From the packaging to the fit, everything screams premium. My go-to brand for everyday drip. Can't recommend enough!",
    rating: 4,
  },
];

const avatars = [
  "/images/marquee-1.png",
  "/images/marquee-2.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
];

export default function Testimonials() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div data-animate className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/40 mb-3">
              COMMUNITY VOICE
            </p>
            <h2 className="text-3xl lg:text-5xl font-black tracking-[-0.03em] text-ink leading-tight">
              Every Pair Tells A Story.
              <br />
              Here&apos;s Theirs.
            </h2>
          </div>

          {/* Stacked Avatars + Trust Score */}
          <div className="flex items-center gap-4 shrink-0 bg-offwhite px-5 py-3 rounded-full border border-black/5">
            <div className="flex items-center -space-x-3">
              {avatars.map((av, i) => (
                <div
                  key={i}
                  className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm"
                >
                  <Image src={av} alt="Customer" fill sizes="36px" className="object-cover" />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-ink text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                +99
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? "fill-ink text-ink" : "fill-ink/30 text-ink/30"
                    }`}
                  />
                ))}
                <span className="text-sm font-bold text-ink ml-1">4.5/5</span>
              </div>
              <p className="text-xs text-ink/50 font-medium">
                Trusted by 100+ Customers
              </p>
            </div>
          </div>
        </div>

        {/* 3-column Grid — all inside the max-w container */}
        <div data-animate className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className={`bg-offwhite rounded-3xl p-7 lg:p-8 relative ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              {/* Decorative Quote */}
              <Quote className="w-8 h-8 text-ink/10 mb-4 fill-ink/10" />

              <p className="text-sm lg:text-base text-ink/70 leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{review.name}</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3 h-3 ${
                          j < review.rating
                            ? "fill-ink text-ink"
                            : "text-ink/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

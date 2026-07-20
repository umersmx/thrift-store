"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Star, Users, Heart, Globe, ExternalLink, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate text elements on the left
      tl.from("[data-hero-text]", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        delay: 0.2,
      });

      // Slide in and fade the main model image from the right
      tl.from(
        "[data-hero-model]",
        {
          opacity: 0,
          x: 120,
          scale: 0.95,
          duration: 1.4,
        },
        "-=0.8"
      );

      // Bounce/elastic pop in for the floating glass cards
      tl.from(
        "[data-hero-card]",
        {
          opacity: 0,
          scale: 0.4,
          x: (i) => (i % 2 === 0 ? -40 : 40),
          y: (i) => (i === 0 ? -30 : i === 2 ? 30 : 0),
          duration: 0.9,
          stagger: 0.12,
          ease: "back.out(1.5)",
        },
        "-=1.0"
      );

      // Count up stats
      tl.fromTo(
        "[data-hero-stats]",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      );

      tl.fromTo(
        ".stat-count",
        {
          innerText: 0,
        },
        {
          innerText: (i: number, el: HTMLElement) => el.getAttribute("data-target") || "0",
          duration: 1.8,
          snap: { innerText: 1 },
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Setup continuous ambient float animations once entrance animations are complete
      tl.add(() => {
        // Skateboarding Cat Animation Loop (Synced with single 10.0s video)
        const catLoop = gsap.timeline({ repeat: -1 });

        // Synchronize and play/restart the video loop
        catLoop.add(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          }
        }, 0);

        // Reset elements at start of loop
        catLoop.set(glintRef.current, { scale: 0, opacity: 0, rotation: 0 });
        catLoop.set(videoRef.current, { scale: 1.0, y: 0 });
        catLoop.set(videoCardRef.current, { rotateX: 0, scale: 1.0, y: 0, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" });

        // At 4.7s - 5.2s: Lens flare glint accent (synced with native sunglasses flash at ~50%)
        catLoop.to(glintRef.current, {
          opacity: 1,
          scale: 1.8,
          rotation: 180,
          duration: 0.25,
          ease: "power2.out"
        }, 4.7);
        
        catLoop.to(glintRef.current, {
          opacity: 0,
          scale: 0,
          rotation: 360,
          duration: 0.35,
          ease: "power2.in"
        }, 4.95);

        // At 5.8s to 8.8s: Accentuate native low-angle camera shot with subtle 3D card tilt
        catLoop.to(videoCardRef.current, {
          rotateX: 45,
          scale: 1.05,
          y: -20,
          boxShadow: "0 35px 60px -15px rgba(255,204,0,0.2), 0 20px 40px -12px rgba(0,0,0,0.3)",
          duration: 1.8,
          ease: "power2.inOut"
        }, 5.8);

        // At 9.2s to 10.0s: Seamless reset for video loop
        catLoop.to(videoCardRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        }, 9.2);

        catLoop.add(() => {
          gsap.set(videoRef.current, { scale: 1.0, y: 0 });
          gsap.set(videoCardRef.current, { rotateX: 0, scale: 1.0, y: 0 });
        }, 9.65);

        catLoop.to(videoCardRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 9.7);

        // Restart video for the new loop
        catLoop.add(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          }
        }, 9.7);

        // Individual cards staggered floating
        const cards = gsap.utils.toArray<HTMLElement>("[data-hero-card]");
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? "+=8" : "-=8",
            x: index % 2 === 0 ? "-=4" : "+=4",
            duration: 2.8 + index * 0.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.15,
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-background flex flex-col overflow-hidden"
    >
      {/* Mobile Background Video - Reduced visibility behind hero text */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden pointer-events-none select-none opacity-30">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/cat-skate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-10 w-full flex items-center pt-24 pb-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8 z-10 items-start text-left">
            <div data-hero-text>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/5 text-xs font-semibold tracking-[0.2em] uppercase text-ink">
                <span className="w-2 h-2 bg-ink rounded-full animate-pulse" />
                New Drop
              </span>
            </div>

            <h1
              data-hero-text
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.9] tracking-[-0.04em] text-ink"
            >
              Streetwear.
              <br />
              <span className="text-ink/20">Redefined.</span>
            </h1>

            <p
              data-hero-text
              className="text-base lg:text-lg text-ink/50 max-w-md leading-relaxed"
            >
              Discover premium streetwear designed for those who dare to stand
              out. Limited drops. Unlimited attitude.
            </p>

            <div data-hero-text className="flex items-center gap-4 flex-wrap mt-8 mb-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-10 py-4 m-1 bg-ink text-background rounded-full text-sm font-semibold tracking-[0.05em] uppercase hover:bg-ink/90 transition-all duration-300 hover:shadow-xl hover:shadow-ink/20 shrink-0 cursor-pointer"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 px-8 py-4 m-1 rounded-full text-sm font-semibold tracking-[0.05em] uppercase text-ink border border-ink/15 hover:border-ink/40 transition-colors duration-300 shrink-0 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-ink/50 transition-colors duration-300 shrink-0">
                  <Play className="w-2 h-2 fill-ink text-ink ml-0.5" />
                </div>
                Watch Lookbook
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center overflow-visible mt-8 lg:mt-0">
            {/* Perspective wrapper for 3D camera effect */}
            <div
              className="relative w-full max-w-[420px] aspect-[3.2/4] rounded-[2.5rem] overflow-visible"
              style={{ perspective: "1200px" }}
            >
              {/* Animated Video Card Container */}
              <div
                ref={videoCardRef}
                data-hero-model
                className="relative w-full h-full rounded-[2.5rem] bg-card border border-border/80 shadow-2xl overflow-hidden origin-bottom"
                style={{ transformStyle: "preserve-3d" }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover object-center origin-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/cat-skate.mp4" type="video/mp4" />
                </video>

                {/* Glint Lens Flare overlay */}
                <div
                  ref={glintRef}
                  className="absolute pointer-events-none select-none w-16 h-16 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 z-20"
                  style={{
                    left: "43%",
                    top: "42%",
                    filter: "drop-shadow(0 0 8px rgba(255,204,0,0.8))",
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Outer glow */}
                    <circle cx="50" cy="50" r="30" fill="url(#lensGlow)" opacity="0.75" />
                    {/* Flares */}
                    <ellipse cx="50" cy="50" rx="48" ry="2" fill="url(#lensFlare)" transform="rotate(-15 50 50)" />
                    <ellipse cx="50" cy="50" rx="48" ry="2" fill="url(#lensFlare)" transform="rotate(75 50 50)" />
                    {/* Core glint */}
                    <circle cx="50" cy="50" r="6" fill="#FFF" />
                    <circle cx="50" cy="50" r="14" fill="#FFE066" opacity="0.8" />
                    <defs>
                      <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFCC00" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFCC00" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="lensFlare" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFCC00" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FFF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFCC00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Glassmorphism Cards — positioned around the model */}
            <div
              data-hero-card
              className="absolute top-4 left-0 bg-card/60 backdrop-blur-xl border border-border/60 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-ink" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink/50">
                    Quality
                  </p>
                  <p className="text-xs font-bold text-ink">Premium Quality</p>
                </div>
              </div>
            </div>

            <div
              data-hero-card
              className="absolute top-28 right-0 bg-card/60 backdrop-blur-xl border border-border/60 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-ink" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink/50">
                    Community
                  </p>
                  <p className="text-xs font-bold text-ink">2.4K+ Loved It</p>
                </div>
              </div>
            </div>

            <div
              data-hero-card
              className="absolute bottom-24 left-0 bg-card/60 backdrop-blur-xl border border-border/60 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-ink" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink/50">
                    Edition
                  </p>
                  <p className="text-xs font-bold text-ink">Limited Edition</p>
                </div>
              </div>
            </div>

            <div
              data-hero-card
              className="absolute bottom-8 right-0 bg-card/60 backdrop-blur-xl border border-border/60 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-ink">Follow Us</span>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-ink/60" />
                  <ExternalLink className="w-4 h-4 text-ink/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Rolling Famous Shoe Brands Bar */}
      <div
        data-hero-stats
        className="w-full border-t border-b border-border bg-ink text-background py-4.5 overflow-hidden relative"
      >
        <div className="animate-marquee-scroll flex items-center gap-10 whitespace-nowrap select-none">
          {[
            "NIKE",
            "JORDAN",
            "ADIDAS",
            "CONVERSE",
            "NEW BALANCE",
            "PUMA",
            "VANS",
            "YEEZY",
            "ASICS",
            "SALOMON",
            "OFF-WHITE",
            "REEBOK",
            "NIKE",
            "JORDAN",
            "ADIDAS",
            "CONVERSE",
            "NEW BALANCE",
            "PUMA",
            "VANS",
            "YEEZY",
            "ASICS",
            "SALOMON",
            "OFF-WHITE",
            "REEBOK",
          ].map((brand, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span className="text-sm sm:text-base font-black tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
                {brand}
              </span>
              <span className="text-xs text-background/30 font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

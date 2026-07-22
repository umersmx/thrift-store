"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-animate]");

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        opacity: 0,
        y: 50,
        rotateX: -40,
        transformPerspective: 1000,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

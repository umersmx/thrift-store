"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-4 sm:pt-6 pb-12 px-4 sm:px-8 overflow-hidden">
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Top Dark Section with Vibe, DNA Giant Text & Tilted Shoe Card */}
        <div className="relative pt-1 pb-16 sm:pb-28 px-4">
          {/* Top Row: "The Vibe" and "Trend" */}
          <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-white/60 uppercase mb-1 z-10 relative">
            <span>The Vibe</span>
            <span className="mr-28 sm:mr-36">Trend</span>
          </div>

          {/* Giant "DNA" Text & Floating Shoe Card */}
          <div className="relative flex items-center justify-center pt-0 pb-4">
            <h1 className="text-[24vw] sm:text-[20vw] lg:text-[18vw] font-black tracking-tighter bg-gradient-to-b from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent leading-none select-none uppercase text-center w-full transform -translate-y-2">
              DNA
            </h1>

            {/* Left Tilted Floating Shoe Card */}
            <div className="absolute left-2 sm:left-8 top-2 sm:top-0 w-24 sm:w-36 aspect-[3/4] bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center">
                <Image
                  src="/images/footer-shoe.png"
                  alt="Footer Shoe"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tilted Floating Shoe Card */}
            <div className="absolute right-2 sm:right-8 top-2 sm:top-0 w-24 sm:w-36 aspect-[3/4] bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/images/featured-shoe.png"
                  alt="Featured Shoe"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Light Card - Overlapping half of DNA text */}
        <div className="relative z-30 -mt-28 sm:-mt-40 lg:-mt-52 bg-[#eae5e0] text-zinc-900 rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-14 lg:p-16 shadow-2xl border border-white/40">
          {/* Corner Dots */}
          <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-zinc-900/80" />
          <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-zinc-900/80" />

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Left Big Heading */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-zinc-900">
                Step Into <br />
                Your <br />
                Best Style
              </h2>
            </div>

            {/* Right Tagline & Links */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between gap-8 md:items-end">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed md:text-right font-medium max-w-xs">
                Premium Shoes Crafted For Comfort, Confidence, And Everyday Performance.
              </p>

              {/* Navigation Links Grid */}
              <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-zinc-800 tracking-tight">
                <a href="#" className="hover:text-black transition-colors">Home</a>
                <a href="#" className="hover:text-black transition-colors">About</a>
                <a href="#" className="hover:text-black transition-colors">Drops</a>
                <a href="#" className="hover:text-black transition-colors">Fresh In</a>
                <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-zinc-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
            <p>© 2026 DNA Thrift. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

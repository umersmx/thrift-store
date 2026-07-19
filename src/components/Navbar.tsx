"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#" },
    { name: "Collections", href: "#" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.05em] text-ink hover:opacity-85 transition-opacity"
        >
          DNA THRIFT
        </Link>

        {/* Center Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-[0.05em] uppercase text-ink/70 hover:text-ink transition-colors duration-300 px-1 py-2 rounded-md"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2.5 mx-0.5 rounded-full hover:bg-ink/5 transition-colors duration-300 cursor-pointer">
            <Search className="w-5 h-5 text-ink" />
          </button>
          <button className="p-2.5 mx-0.5 rounded-full hover:bg-ink/5 transition-colors duration-300 relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-ink" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-ink text-background text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
              2
            </span>
          </button>
          <button
            className="md:hidden p-2.5 ml-1 rounded-full hover:bg-ink/5 transition-colors duration-300 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-background/95 backdrop-blur-xl ${
          mobileOpen ? "max-h-80 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-ink/70 hover:text-ink transition-colors py-2 px-4 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

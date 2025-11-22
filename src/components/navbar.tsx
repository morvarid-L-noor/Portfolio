"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/publications", label: "Publications & Awards" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-400/60 bg-white/90 backdrop-blur-md dark:border-purple-800/50 dark:bg-zinc-950/90">
      <div className="mx-auto max-w-7xl px-2 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-black transition-all hover:scale-105 sm:text-xl dark:text-white"
          >
            Pearl Lalenoor
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden gap-4 md:flex md:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all hover:scale-105 ${
                  pathname === link.href
                    ? "font-semibold text-black dark:text-white"
                    : "text-black hover:text-black/80 dark:text-white dark:hover:text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-black transition-all dark:bg-white ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-black transition-all dark:bg-white ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-black transition-all dark:bg-white ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-purple-100 font-semibold text-black dark:bg-purple-900/30 dark:text-white"
                    : "text-black hover:bg-purple-50 hover:text-black/80 dark:text-white dark:hover:bg-purple-900/20 dark:hover:text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

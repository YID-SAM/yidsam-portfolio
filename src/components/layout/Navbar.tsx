"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        inset-x-0
        z-50
        bg-black/80
        backdrop-blur-md
        border-b
        border-zinc-800
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-3
          sm:py-4
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="
            shrink-0
            text-xl
            sm:text-2xl
            font-bold
            text-violet-500
          "
        >
          YIDSAM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-300
                hover:text-violet-500
                transition-colors
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            inline-flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-zinc-700
            bg-zinc-900
            text-white
            hover:border-violet-500
            hover:text-violet-400
          "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="
            md:hidden
            absolute
            left-0
            right-0
            top-full
            bg-black/95
            backdrop-blur-md
            border-t
            border-zinc-800
            shadow-2xl
            shadow-black/40
          "
        >
          <div
            className="
              flex
              flex-col
              px-4
              py-4
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-3
                  text-gray-300
                  hover:text-violet-500
                  hover:bg-violet-500/10
                  transition-colors
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

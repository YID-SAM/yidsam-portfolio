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
        left-0
        right-0
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
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <a
          href="#"
          className="
            text-2xl
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
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-white
          "
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="
            md:hidden
            bg-zinc-950
            border-t
            border-zinc-800
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              p-6
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
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
        </div>
      )}
    </nav>
  );
}
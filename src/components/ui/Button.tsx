import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
};

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  return (
    <a
      href={href}
      className="
      inline-flex items-center justify-center
      rounded-xl
      px-6 py-3
      font-semibold
      text-white
      bg-gradient-to-r
      from-violet-600
      to-cyan-500
      transition-all duration-300
      hover:scale-105
      hover:shadow-lg
      hover:shadow-violet-500/30
      "
    >
      {children}
    </a>
  );
}
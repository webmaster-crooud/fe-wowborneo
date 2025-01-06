import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "class-variance-authority";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary"; // Menambahkan varian secondary
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-[#CD5A05] text-white hover:bg-[#E67017] focus:ring-blue-400",
    secondary: "bg-secondary text-white", // Style untuk secondary
  };

  return (
    <button
      className={cx(
        "landscape:min-lg:px-40-d landscape:min-lg:py-12 rounded-full focus:outline-none focus:ring-0 landscape:min-lg:text-18-d",
        "text-12-m px-16-m py-[0.93vw] text-white",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

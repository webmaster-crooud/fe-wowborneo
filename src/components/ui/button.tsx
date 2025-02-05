import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "class-variance-authority";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "primaryReverse"; // Menambahkan varian secondary
  className?: string;
  rounded?: "rounded-full" | "rounded-2xl";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  rounded = "rounded-2xl",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-[#CD5A05] text-white hover:bg-[#E67017]",
    primaryReverse:
      "bg-white border border-[#CD5A05] text-[#CD5A05] hover:bg-[#E67017] hover:text-white",
    secondary: "bg-secondary text-white", // Style untuk secondary
  };

  return (
    <button
      className={cx(
        "font-semibold landscape:min-lg:px-40-d landscape:min-lg:py-16-d focus:outline-none focus:ring-0 landscape:min-lg:text-18-d",
        "text-12-d px-16-d py-[0.93vw]",
        className,
        variantStyles[variant],
        rounded
      )}
      {...props}
    >
      {children}
    </button>
  );
}

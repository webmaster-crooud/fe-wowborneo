import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "class-variance-authority";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "primaryReverse"; // Menambahkan varian secondary
  className?: string;
  rounded?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  rounded = "rounded-lg",
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
        "font-semibold text-sm p-2 px-4 lg:text-base ",
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

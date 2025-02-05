import { cx } from "class-variance-authority";
import { ReactNode } from "react";

interface Container {
  children: ReactNode;
  className?: string;
  variant?: "py-120-d" | "py-80-d";
}

export default function Container({
  children,
  className = "",
  variant = "py-120-d",
}: Container) {
  return (
    <div className={cx("px-128", "px-[5.581vw]", className, variant)}>
      {children}
    </div>
  );
}

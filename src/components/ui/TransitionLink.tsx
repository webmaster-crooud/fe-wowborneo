"use client";
import { animatePageOut } from "@/utils/animations";
import { useLenis } from "@studio-freight/react-lenis";
import { cx } from "class-variance-authority";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  opacity?: boolean;
  className?: string;
}

const TransitionLink = ({
  href,
  children,
  opacity = true,
  className = "",
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (lenis) {
      lenis.start();
    }
  };

  return (
    <div
      className={cx(
        opacity
          ? pathname === href
            ? "opacity-100"
            : "opacity-50"
          : "opacity-100",
        "cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default TransitionLink;

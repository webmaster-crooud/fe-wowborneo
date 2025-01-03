"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { animatePageIn } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { cx } from "class-variance-authority";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    let delayedCall: any;

    mm.add(
      {
        isPortrait: "(orientation: portrait)",
        isLandscape: "(orientation: landscape)",
        maxSm: "(max-width: 1023px)",
        minLg: "(min-width: 1024px)",
      },
      (context) => {
        const { isPortrait, isLandscape, maxSm, minLg } =
          context.conditions || {};

        window.scrollTo(0, 0);

        delayedCall = gsap.delayedCall(1, () => {
          ScrollTrigger.refresh();
        });

        animatePageIn();
      }
    );

    return () => {
      mm.revert();

      if (delayedCall) {
        delayedCall.kill();
      }
    };
  }, [pathname]);

  return (
    <ReactLenis root>
      <div
        className={cx(
          "fixed z-50 top-0 w-full h-screen bg-white",
          "banner-container"
        )}
      ></div>
      {children}
    </ReactLenis>
  );
}

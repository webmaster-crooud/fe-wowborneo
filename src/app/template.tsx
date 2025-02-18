"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { animatePageIn } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { cx } from "class-variance-authority";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(textContainerRef.current, {
      y: "-7rem",
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    })

    const tl = gsap.timeline();

    tl.from(".image-container", {
      y: "24rem",
      display: "block",
      ease: "power2.out",
    }).to(".image-container", {
      y: 0,
      display: "block",
      ease: "power2.out",
    }).to(".image-container", {
      width: "100%",
      height: "100%",
      ease: "power2.out",
    })
    .to(".skibidi", {
      zIndex: -50,
      opacity: 0,
      ease: "power2.out",
    })
    .duration(5).delay(0.5)


  }, [pathname])

  return (
    <>
      <ReactLenis root>
      <div
        className={cx(
          "fixed z-50 top-0 w-full h-screen bg-white skibidi max-h-screen")}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" ref={textContainerRef}>
          <h2 className="font-semibold text-2xl font-prata">Wow Borneo</h2>
        </div>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative image-container h-96 w-96 hidden">
            <div className="w-full h-full bg-black opacity-30 z-10 absolute" />
            <Image src="/images/boats/exterior/boat3.png" alt="" width={100} height={100} className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      {children}
      </ReactLenis>
    </>
  );
}

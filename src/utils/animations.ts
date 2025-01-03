import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animatePageIn = () => {
  // gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  tl.set(".banner-container", {
    yPercent: 0,
  });

  tl.to(".banner-container", {
    yPercent: -100,
    ease: "power1.inOut",
    delay: 0.4,
  });
};

export const animatePageOut = (href: string, router: any) => {
  const tl = gsap.timeline();
  tl.set(".banner-container", {
    yPercent: 100,
  }).to(".banner-container", {
    yPercent: 0,
    ease: "power1.inOut",
    onComplete: () => {
      router.push(href);
    },
  });
};

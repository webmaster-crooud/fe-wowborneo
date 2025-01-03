import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UpdateFunction = (color: number) => void;

function useVariantsOnScroll(
  navbarColors: number[],
  sectionSelector: string,
  updateNavbarColor: UpdateFunction
) {
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

        delayedCall = gsap.delayedCall(1, () => {
          const sections = gsap.utils.toArray(sectionSelector) as Element[];

          sections.forEach((section: Element, index: number) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top 128px",
              end: "bottom 128px",
              // markers: true,
              preventOverlaps: true,
              onEnter: () => {
                const newColor = navbarColors[index];
                updateNavbarColor(newColor);
              },
              onLeaveBack: () => {
                const previousIndex = index > 0 ? index - 1 : 0;
                const newColor = navbarColors[previousIndex];
                updateNavbarColor(newColor);
              },
            });
          });
        });
      }
    );

    return () => {
      mm.revert();

      if (delayedCall) {
        delayedCall.kill();
      }
    };
  }, []);

  return null;
}

export default useVariantsOnScroll;

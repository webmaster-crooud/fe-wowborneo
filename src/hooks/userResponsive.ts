import { useState, useEffect } from "react";

// Define the return type for useMediaQuery
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(true);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(media.matches);
    };

    updateMatches(); // Initial check

    const listener = () => {
      updateMatches();
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

// Define the hooks for different breakpoints
export const useMinXxs = () => useMediaQuery("(max-width: 479px)");
// start mobile
export const useMinXs = () => useMediaQuery("(min-width: 480px)");
export const useMinSm = () => useMediaQuery("(min-width: 640px)");
// end Mobile

// start tablet
export const useMinMd = () => useMediaQuery("(min-width: 768px)");
export const useMinLg = () => useMediaQuery("(min-width: 1024px)");
// end tablet

// start desktop
export const useMinXl = () => useMediaQuery("(min-width: 1280px)");
export const useMin1Xl = () => useMediaQuery("(min-width: 1366px)");
export const useMin2Xl = () => useMediaQuery("(min-width: 1440px)");
export const useMin3Xl = () => useMediaQuery("(min-width: 1600px)");
export const useMin4Xl = () => useMediaQuery("(min-width: 1920px)");
// end desktop

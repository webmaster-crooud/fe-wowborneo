import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";

export default function Hero() {
  return (
    <div
      className={cx(
        "w-full landscape:min-lg:h-screen relative",
        "h-[70vh]",
        "fullscreen"
      )}
    >
      <p
        className={cx(
          "absolute bottom-120-d z-10 landscape:min-lg:text-64-d text-white landscape:min-lg:w-[42%] tracking-tighter leading-tight left-128-d",
          "text-40-m font-prata"
        )}
      >
        Discover Borneo’s Hidden Heart
      </p>
      <GradientImage src="/images/hero.jpg" />
    </div>
  );
}

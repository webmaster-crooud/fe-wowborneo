import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../button";

export default function Hero() {
  return (
    <div
      className={cx(
        "w-full relative",
        "h-screen",
        "fullscreen"
      )}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      <div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-8">
        <p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg")}>
          Boats
        </p>
        <p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>
        Your Gateway to the Wonders of Borneo
        </p>
        <p className={cx("text-description leading-tight text-center lg:w-[80%]")}>
        With intimate spaces, sustainable features, and welcoming local hospitality, our boats offer more than just a journey—they are your sanctuary as you explore the rich biodiversity and culture of Kalimantan.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
        Discover Your Cruise Experience
        </Button>
      </div>

      <GradientImage src="/images/nature/river7.png" />
    </div>
  );
}

import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

export default function Hero() {
  return (
    <div
      className={cx(
        "w-full landscape:min-lg:h-[120vh] relative",
        "h-[75vh]",
        "fullscreen"
      )}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      <div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
        <p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg")}>
          Borneo river cruise
        </p>
        <p className={cx("text-3xl leading-tight font-prata text-center md:text-4xl lg:text-5xl xl:text-7xl xl:w-[60%]")}>
          Discover Borneo's Hidden Heart
        </p>
        <p className={cx("text-sm  leading-tight text-center sm:text-base md:text-lg lg:w-[80%]")}>
          Immerse yourself in the beauty of Borneo's rivers, where each journey
          unveils the stories of the land, wildlife, and people.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Explore Our Cruises
        </Button>
      </div>

      <GradientImage src="/images/homepage/hero-1.jpeg" className=""/>
    </div>
  );
}

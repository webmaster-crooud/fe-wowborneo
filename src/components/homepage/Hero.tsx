import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

export default function Hero() {
  return (
    <div
      className={cx(
        "w-full landscape:min-lg:h-screen relative",
        "h-[70vh]",
        "fullscreen"
      )}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      <div className="absolute z-20 text-white landscape:min-lg:w-[50%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-10">
        <p className={cx("text-14-d text-center font-semibold")}>
          Borneo river cruise
        </p>
        <p className={cx("text-80-d leading-tight font-prata text-center")}>
          Discover Borneo’s Hidden Heart
        </p>
        <p className={cx("text-20-d leading-tight text-center")}>
          Immerse yourself in the beauty of Borneo’s rivers, where each journey
          unveils the stories of the land, wildlife, and people.
        </p>
        <Button className="text-18-d   hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Explore Our Cruises
        </Button>
      </div>

      <GradientImage src="/images/hero.jpg" />
    </div>
  );
}

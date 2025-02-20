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
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="absolute z-20 text-white w-full h-full flex flex-col items-center justify-center gap-4 px-4 sm:px-12">
        <p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg")}>
          EXPLORE BORNEO
        </p>
        <p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>
          Nature, Culture, And Adventure
        </p>
        <p className={cx("text-description leading-tight text-center lg:w-[80%]")}>
          Welcome to the heart of Borneo. Central Kalimantan is a land of captivating landscapes, rich traditions, and untouched wilderness. Here, every riverbend and forest trail reveals a new story, from the quiet power of Sebangau National Park to the vibrant cultures of the Dayak people. Let Wow Borneo guide you into the wonders of this region—where each experience is designed to immerse you in the beauty, history, and spirit of Central Kalimantan.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Discover your journey
        </Button>
      </div>

      <GradientImage src="/images/people/crowd.png" />
    </div>
  );
}

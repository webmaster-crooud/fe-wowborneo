import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../../ui/GradientImage";
import Button from "@/components/button";

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

      <div className="absolute z-20 text-white w-full h-full flex flex-col items-center justify-center gap-2 px-4 sm:px-12">
        <p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg")}>
          EXPLORE - Sebangau National Park
        </p>
        <p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>
          A Sanctuary for Borneo’s Wild Heart
        </p>
        <p className={cx("text-description leading-tight text-center lg:w-[80%]")}>
          Sebangau National Park is a vast, protected rainforest that serves as a refuge for Borneo’s incredible biodiversity. Known for its dense peat-swamp forests and its vital role in orangutan conservation, Sebangau offers an unforgettable journey into the depths of nature. This hidden gem of Central Kalimantan invites visitors to experience its vibrant ecosystem, connect with rare wildlife, and witness the beauty of a forest preserved for generations.        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Discover Our Cruise
        </Button>
      </div>

      <GradientImage src="/images/nature/river.png" />
    </div>
  );
}

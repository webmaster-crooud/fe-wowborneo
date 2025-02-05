import Button from "@/components/ui/button";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";
import React from "react";

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

      <div className="absolute z-20 text-white flex flex-col gap-4 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-3">
        <p className={cx("text-sm text-center font-semibold md:text-base")}>
          BOATS - RAHAI’I PANGUN
        </p>
        <p className={cx("text-title lg:text-3xl xl:text-7xl leading-tight font-prata text-center xl:w-[60%]")}>
          Tradition Meets Modern Comfort on the Jungle River
        </p>
        <p className={cx("text-xs leading-tight text-center sm:text-description lg:w-[80%]")}>
          Step aboard Rahai’i Pangun, Wow Borneo’s flagship cruiser, where the
          charm of Kalimantan’s riverboats meets the comforts of modern
          amenities. This beautifully crafted vessel invites you to glide along
          the tranquil waters of the jungle, immersing yourself in the
          captivating scenery and rare wildlife that define Borneo’s magic.
          Designed with spacious decks and air-conditioned cabins, Rahai’i
          Pangun provides an intimate, peaceful journey for nature lovers
          looking to relax in style and connect with the beauty of Kalimantan.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Book Your Cruise Now
        </Button>
      </div>

      <GradientImage src="/images/nature/river2.png" />
    </div>
  );
}

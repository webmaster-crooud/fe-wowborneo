import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";
import Container from "../ui/Container";

export default function BookYourBorneo() {
  return (
    <Container
      className={cx(
        "flex flex-col h-full justify-between items-center gap-16 xl:flex-row xl:items-start"
      )}
    >
      <div className={cx("flex flex-col items-center gap-16 h-full sm:flex-row xl:h-full")}>
        <div
          className={cx(
            "w-52 h-72 relative rounded-xl overflow-hidden xl:w-96 xl:h-[496px]"
          )}
        >
          <GradientImage src="/images/explore/activities.png" />
        </div>

        <div
          className={cx(
            "flex flex-col gap-4 justify-center items-center text-center sm:w-2/3 sm:text-left sm:items-start xl:text-center xl:items-center xl:h-full xl:gap-10"
          )}
        >
          <span className="text-sm font-bold tracking-widest uppercase">
            TOC HERE
          </span>
          <h2 className="font-prata font-normal leading-[3rem] text-5xl">
            Book Your Borneo Experience
          </h2>
          <p className="text-[#372817]">
            Ready to discover Central Kalimantan for yourself? Secure your spot
            on a Wow Borneo journey and let the adventure begin. With each
            booking, you step into an experience that brings you closer to the
            beauty, culture, and mystery of Borneo’s heart.
          </p>
          <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit">
            Book your journey
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center sm:flex-row xl:flex-col xl:items-end xl:w-fit">
        <div
          className={cx(
            "w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80"
          )}
        >
          <GradientImage
            className="rounded-xl"
            src="/images/explore/river-photo.jpeg"
          />
        </div>
        <div
          className={cx(
            "w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80"
          )}
        >
          <GradientImage
            className="rounded-xl"
            src="/images/explore/boat-river-1.png"
          />
        </div>
      </div>
    </Container>
  );
}

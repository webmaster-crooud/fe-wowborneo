import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../button";
import Container from "../ui/Container";

export default function TravelerStories() {
  return (
    <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
      <Container>
        <div className="grid grid-cols-1 justify-between gap-10 sm:grid-cols-2">
          <div className={cx("w-full h-[392px] sm:order-last")}>
            <GradientImage
              className="rounded-[16px] w-full"
              src="/images/people/family3.png"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="leading-normal font-prata text-subtitle">
              Traveler Stories from
              <span className="block">Central Kalimantan</span>
            </h1>
            <p className="text-description leading-7">
              See Central Kalimantan through the eyes of past travelers who have
              joined Wow Borneo. From unforgettable wildlife encounters to
              moments of connection with the Dayak people, these stories capture
              the magic and depth of a journey through Borneo. Hear what our
              guests have to say and let their stories inspire your own
              adventure.
            </p>
            <Button className="text-sm hover:shadow-lg hover:scale-105 transition w-fit py-2">
              See More Reviews
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

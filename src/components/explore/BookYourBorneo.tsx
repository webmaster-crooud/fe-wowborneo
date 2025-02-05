import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";
import Container from "../ui/Container";

export default function BookYourBorneo() {
  return (
    <div>

      <Container className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="w-full h-full flex flex-col gap-6 xl:p-10">
          <p className="text-subtitle leading-normal font-prata">Book Your Borneo Experience</p>
          <p className="text-description">Ready to discover Central Kalimantan for yourself? Secure your spot on a Wow Borneo journey and let the adventure begin. With each booking, you step into an experience that brings you closer to the beauty, culture, and mystery of Borneo’s heart.</p>
          <Button className="text-xs transition rounded-full py-3 w-fit">
            Book Your Journey
          </Button>
        </div>
        <div className="w-full h-full grid grid-cols-1 gap-6 sm:grid-cols-2 xl:order-first">
          <div className={cx("w-full aspect-[9/12]")}>
            <GradientImage
              className="rounded-[16px]"
              src="/images/nature/forest.png"
            />
          </div>
          <div className={cx("w-full aspect-[9/12] xl:mt-20")}>
            <GradientImage
              className="rounded-[16px]"
              src="/images/people/man.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Container from "../ui/Container";
import Button from "../ui/button";

export default function WhyChoose() {
  return (
    <div>
      <div className={cx("w-full h-full relative px-4 space-y-4 sm:space-y-0 sm:px-0")}>
        <div
          className={cx(
            "z-20 flex text-center sm:absolute sm:items-center sm:justify-center sm:text-white sm:h-full sm:w-full"
          )}
        >
          <p className={cx("font-prata text-subtitle text-center")}>
            Why Choose Wow Borneo?
          </p>
        </div>
        <div
          className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}
        ></div>
        <div className="w-full aspect-video">
          <GradientImage src="/images/nature/river4.png" className="rounded-lg sm:rounded-none" />
        </div>
      </div>
      <Container className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="w-full h-full flex flex-col gap-6 xl:p-10">
          <div className="space-y-6">
            <p className="text-2xl font-semibold">Exclusive</p>
            <p className="text-description">As the only river cruise provider in Borneo, we offer unique experiences that no one else can, including visits to Camp Leakey, an orangutan rehabilitation center, in partnership with local conservation groups.</p>
          </div>
          <hr className="border-black"/>
          <div className="space-y-6">
            <p className="text-2xl font-semibold">Local Connection</p>
            <p className="text-description">Our cruises foster connections with the indigenous Dayak people, allowing you to learn and experience their rich culture firsthand.</p>
          </div>
          <hr className="border-black"/>
          <div className="space-y-6">
            <p className="text-2xl font-semibold">Commitment to Sustainability</p>
            <p className="text-description">We prioritize the protection of Borneo’s ecosystems and communities, ensuring that our journeys leave a positive impact on both nature and culture.</p>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 gap-6 sm:grid-cols-2 xl:order-first">
          <div className={cx("w-full aspect-[9/12]")}>
            <GradientImage
              className="rounded-[16px]"
              src="/images/people/man.png"
            />
          </div>
          <div className={cx("w-full aspect-[9/12] xl:mt-20")}>
            <GradientImage
              className="rounded-[16px]"
              src="/images/wildlife/orangutan4.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

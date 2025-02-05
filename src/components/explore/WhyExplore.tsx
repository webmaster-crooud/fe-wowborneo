import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";
import Container from "../ui/Container";

export default function WhyExplore() {
  return (
    <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
      <Container className="py-2">
        <div className="grid grid-cols-1 justify-between gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl leading-normal font-prata lg:text-4xl">
              Why Explore with <span className="block">Wow Borneo?</span> 
            </h1>
            <p className="text-[17px] leading-7">
              At Wow Borneo, we believe that travel should be a journey of
              discovery and respect. Our deep knowledge of Central Kalimantan’s
              landscapes and our strong partnerships with local communities
              ensure that each experience is both authentic and responsible.
              When you travel with Wow Borneo, you’re not just a visitor—you’re
              part of a story that celebrates Borneo’s people, nature, and
              spirit. Join us and discover the true essence of this
              extraordinary region, guided by those who know and love it best.
            +</p>
            <Button className="text-sm hover:shadow-lg hover:scale-105 transition w-fit py-2">
              Start Your Journey Today
            </Button>
          </div>
          <div className={cx("w-full h-[448px] order-first sm:order-none")}>
            <GradientImage
              className="rounded-[16px] w-full"
              src="/images/explore/boat.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

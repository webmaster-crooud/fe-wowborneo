import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import ArrowDown from "../ui/ArrowDown";
import Button from "../ui/button";
import Container from "../ui/Container";
import Image from "next/image";



export default function OurBenefit() {
  return (
    <Container className="pt-1 grid grid-cols-1 gap-8 xl:grid-cols-2">
      <div className="w-full h-full flex flex-col gap-6 xl:p-10">
        <p className={cx("uppercase text-xs font-medium w-full xl:text-lg")}>Why Choose Wow Borneo’s Fleet?</p>
        <p className={cx("font-prata text-2xl md:text-3xl w-full lg:text-5xl xl:text-6xl")}>
          Why Travel with Us?
        </p>
        <p className={cx("xl:text-lg")}>
          Wow Borneo’s fleet offers more than just a boat ride—it’s a journey into the heart of Borneo, led by expert guides and supported by top-notch hospitality. Our unique access to locations like Camp Leakey allows our guests to experience exclusive encounters with wildlife and local culture. With every cruise, we promise comfort, adventure, and memories to last a lifetime.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit ">
          Book Your Journey
        </Button>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-6 sm:grid-cols-2 xl:order-first">
        <div className={cx("w-full aspect-[9/12]")}>
          <GradientImage
            className="rounded-[16px]"
            src="/images/boats/travel/travel-1.png"
          />
        </div>
        <div className={cx("w-full aspect-[9/12] xl:mt-20")}>
          <GradientImage
            className="rounded-[16px]"
            src="/images/boats/travel/travel-2.png"
          />
        </div>
      </div>
    </Container>
  );
}

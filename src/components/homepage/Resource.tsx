import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import Button from "../ui/button";
import GradientImage from "../ui/GradientImage";

export default function Resource() {
  return (
    <Container className={cx("w-full h-full space-y-12 pt-0 md:px-0")}>
      <div className={cx("lg:h-[46.875vw] w-full mt-64-d relative space-y-10 md:space-y-0")}>
        <div
          className={cx(
            "w-full h-full flex flex-col gap-24-d justify-center md:items-center md:absolute md:z-20 md:text-white md:text-center md:px-32 md:py-8 lg:p-32"
          )}
        >

          <div className="w-full flex flex-col items-center justify-center gap-8">
            <p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>
              Check Our Resources
            </p>
            <p className={cx("w-full text-description lg:w-[55%] xl:w-[50%]")}>
              Prepare for your journey with valuable insights and tips from our travel resources. Learn more about Kalimantan, the local culture, and how to make the most of your river cruise adventure.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
            <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit">
              Travel Guide
            </Button>
            <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit" variant="primaryReverse">
              Travel to Kalimantan
            </Button>
          </div>
        </div>
        <div
          className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
        ></div>
        <div
          className={cx(
            "w-full h-44 rounded-xl overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-full"
          )}
        >
          <GradientImage src="/images/people/man4.png" className="object-contain" />
        </div>
      </div>
    </Container>
  );
}

import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import Button from "../button";
import Image from "next/image";

// src="/images/boats/kumai/boats.png"

export default function Combination() {
  return (
    <Container className={cx("w-full relative space-y-10 px-4 sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
      <div
        className={cx(
          "w-full h-full flex flex-col gap-4 md:absolute md:justify-center md:items-center md:z-20 md:text-white md:text-center md:px-32 md:h-fit lg:gap-12"
        )}
      >
        <p className={cx("uppercase text-xs font-medium w-full xl:text-lg")}>Fleet Features and Commitment to Eco-Tourism</p>
        <p className={cx("font-prata text-subtitle w-full xl:w-[60%]")}>
          Eco-Friendly, Locally Crafted, and Uniquely Borneo
        </p>
        <p className={cx("text-description xl:w-[50%]")}>
          At Wow Borneo, we are committed to preserving Kalimantan’s natural beauty and supporting its local communities. Each of our boats is built using sustainable practices, and we partner closely with local artisans, farmers, and guides. From solar-powered amenities to natural products onboard, our fleet is a testament to responsible tourism. Join us in supporting a future where travel uplifts people and protects the environment.
        </p>
        <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit ">
          Explore Spirit of Kalimantan
        </Button>
      </div>


      <div
        className={cx(
          "w-full h-full rounded-xl relative overflow-hidden md:rounded-none lg:h-full"
        )}
      >
        <div
          className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
        ></div>
        <Image src="/images/nature/river.png" alt="picture of river" className="w-full rounded-lg md:rounded-none" height={1000} width={1000} />
      </div>
    </Container>
  );
}

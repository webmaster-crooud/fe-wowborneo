import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

const list = [
  {
    icon: "/images/icons/boats/banin-with-AC.png",
    title: "Luxury and Comfort",
    desc: "Unwind in air-conditioned cabins with ensuite bathrooms.",
  },
  {
    icon: "/images/icons/boats/luxurious.png",
    title: "Exclusive Experiences",
    desc: "Guided tours of Sebangau National Park and Dayak villages",
  },
  {
    icon: "/images/icons/boats/panoramic.png",
    title: "Panoramic Views",
    desc: "Watch the scenery from the screened saloon or rooftop deck.",
  },
];

export default function TheSpiritOfKalimantan() {
  return (
    <Container className="pt-1">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p className={cx("text-subtitle leading-tight font-prata ")}>
            The Spirit of Kalimantan
          </p>
          <p className={cx("text-description leading-tight mt-6")}>
            The Spirit of Kalimantan is a luxurious vessel designed for those
            who want the ultimate blend of adventure and relaxation. Enjoy
            panoramic views from the covered deck or ascend to the rooftop for
            sweeping sights of the river and forest. Onboard meals, prepared by
            skilled cooks, and expert guides complete this all-inclusive
            experience along the enchanting Katingan River.
          </p>
          <div className="flex flex-col gap-10 mt-10 xl:flex-row">
            {list?.map((item) => {
              return (
                <div className="flex gap-5 items-center xl:flex-col xl:items-start">
                  <div className={cx("w-10 h-10 aspect-square")}>
                    <GradientImage src={item.icon} />
                  </div>
                  <div className="flex flex-col justify-between p-0 items-start">
                    <span className="text-sm font-bold tracking-wider">
                      {item.title}
                    </span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="text-12-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto mt-10">
            See The Spirit of Kalimantan
          </Button>
        </div>
        <div className={cx("w-full aspect-[9/12] order-first sm:order-none xl:aspect-square")}>
          <GradientImage
            className="rounded-[16px]"
            src="/images/boats/exterior/boat.png"
          />
        </div>
      </div>
    </Container>
  );
}

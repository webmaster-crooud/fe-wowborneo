import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

const list = [
  {
    icon: "/images/boats/rahaipangun/Spacious.svg",
    title: "Eco-Friendly Design",
    desc: "Relax and take in the surrounding views from our open upper deck.",
  },
  {
    icon: "/images/boats/rahaipangun/AirConditioner.svg",
    title: "Air-Conditioned Comfort",
    desc: "Each cabin is equipped with air conditioning and private ensuite.",
  },
  {
    icon: "/images/boats/rahaipangun/Renowned.svg",
    title: "Renowned Cuisine",
    desc: "Savor freshly prepared meals while cruising along the river.",
  },
];

export default function RangaiPangun() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className={cx("w-full aspect-[9/12] order-first xl:aspect-square")}>
          <GradientImage
            className="rounded-[16px]"
            src="/images/homepage/introduction/Boat Deck.png"
          />
        </div>
        <div>
          <p className={cx("text-40-d leading-tight font-prata ")}>
            {"Rahai’i Pangun"}
          </p>
          <p className={cx("text-20-d leading-tight mt-6")}>
            Step aboard Kumai, the latest addition to our fleet, designed for
            luxury with a commitment to eco-conscious travel. Solar-powered air
            conditioning keeps the cabins comfortable while minimizing
            environmental impact. With intimate viewing spaces and local touches
            throughout, Kumai offers a truly unique way to experience Borneo.
          </p>
          <div className="flex flex-col gap-10 mt-10 xl:flex-row">
            {list?.map((item) => {
              return (
                <div className="flex gap-5 items-center xl:flex-col xl:items-start">
                  <div className={cx("w-10 h-10 aspect-square")}>
                    <GradientImage src={item.icon} />
                  </div>
                  <div className="flex flex-col justify-between p-0 items-start">
                    <span className="text-sm font-bold tracking-wider w-full">
                      {item.title}
                    </span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="text-12-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto mt-10">
            {"Explore Rahai’i Pangun"}
          </Button>
        </div>
      </div>
    </Container>
  );
}

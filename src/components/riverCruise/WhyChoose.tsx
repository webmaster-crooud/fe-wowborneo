import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Container from "../ui/Container";

export default function WhyChoose() {
  const data = [
    {
      head: "Exclusive Access",
      desc: "As the only river cruise provider in Borneo, we offer unique experiences that no one else can, including visits to Camp Leakey, an orangutan rehabilitation center, in partnership with local conservation groups.",
      img: "/images/ui/why-us/why-1.png",
    },
    {
      head: "Exclusive Access",
      desc: "As the only river cruise provider in Borneo, we offer unique experiences that no one else can, including visits to Camp Leakey, an orangutan rehabilitation center, in partnership with local conservation groups.",
      img: "/images/ui/why-us/why-2.png",
    },
    {
      head: "Exclusive Access",
      desc: "As the only river cruise provider in Borneo, we offer unique experiences that no one else can, including visits to Camp Leakey, an orangutan rehabilitation center, in partnership with local conservation groups.",
      img: "/images/ui/why-us/why-3.png",
    },
  ];
  return (
    <div>
      <div className={cx("w-full h-full relative px-4 space-y-4 sm:space-y-0 sm:px-0")}>
        <div
          className={cx(
            "z-20 flex text-center sm:absolute sm:items-center sm:justify-center sm:text-white sm:h-full sm:w-full"
          )}
        >
          <p className={cx("font-prata text-3xl text-center lg:text-5xl")}>
            Why Choose Wow Borneo?
          </p>
        </div>
        <div
          className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}
        ></div>
        <div className="w-full aspect-video">
          <GradientImage src="/images/riverCruise/whyChoose.jpg" className="rounded-lg sm:rounded-none" />
        </div>
      </div>
      <Container className={cx("grid grid-cols-1 gap-14 lg:grid-cols-3 ")}>
        {data.map((item, key) => (
          <div
            className={cx(
              "flex gap-4 lg:flex-col lg:items-center"
            )}
            key={key}
          >
            <div className={cx("w-10 h-10 aspect-square")}>
              <GradientImage src={item.img} />
            </div>
            <div className="lg:text-center lg:space-y-4">
              <p className={cx("font-prata text-2xl lg:text-3xl")}>{item.head}</p>
              <p className="lg:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const list = [
  {
    icon: "/images/icons/boats/eco-friendly.png",
    title: "Eco-Friendly Design",
    desc: "Solar-powered for a greener cruising experience.",
  },
  {
    icon: "/images/icons/boats/sun-deck.png",
    title: "Intimate Spaces",
    desc: "Enjoy the river views from cozy lounges and sun decks.",
  },
  {
    icon: "/images/icons/boats/banin-with-AC.png",
    title: "3 Cabins with Ensuites",
    desc: "Comfortably accommodates up to six guests with privacy and style.",
  },
];

export default function Kumai() {
  const router = useRouter();
  return (
    <Container className="pt-1">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p className={cx("text-subtitle leading-tight font-prata ")}>Kumai</p>
          <p className={cx("text-description leading-tight mt-6")}>
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
                    <span className="text-sm font-bold tracking-wider">
                      {item.title}
                    </span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            onClick={() => {
              router.push("/boats/detail");
            }}
            className="text-12-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto mt-10"
          >
            Discover Kumai
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

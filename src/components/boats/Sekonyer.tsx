import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../button";

const list = [
  {
    icon: "/images/icons/boats/ship.png",
    title: "Traditional Hull",
    desc: "Built with a classic klotok hull for an authentic Bornean experience.",
  },
  {
    icon: "/images/icons/boats/meals-on-deck.png",
    title: "Upper Deck Dining",
    desc: "Dine and relax with unimpeded views of the jungle. ",
  },
  {
    icon: "/images/icons/boats/banin-with-AC.png",
    title: "Comfortable Cabins",
    desc: "Each cabin comes with air conditioning and ensuite bathrooms.",
  },
];

export default function Sekonyer() {
  return (
    <Container className="pt-1">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className={cx("w-full aspect-[9/12] order-first xl:aspect-square")}>
          <GradientImage
            className="rounded-[16px]"
            src="/images/boats/exterior/boat.png"
          />
        </div>
        <div>
          <p className={cx("text-subtitle leading-tight font-prata ")}>Sekonyer</p>
          <p className={cx("text-description leading-tight mt-6")}>
            For those seeking a traditional experience, the Sekonyer offers an
            authentic journey through Kalimantan’s jungles. This classic klotok
            boat has been outfitted with modern amenities, including
            air-conditioned cabins and an open upper deck perfect for dining and
            wildlife spotting. Let the sights and sounds of the jungle surround
            you in this cozy vessel.
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
            Learn More about Sekonyer
          </Button>
        </div>
      </div>
    </Container>
  );
}

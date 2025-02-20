import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../button";

export default function CardBoats({ item }: any) {
  return (
    <div className={cx("w-full h-full relative")}>
      <div
        className={cx(
          "text-center items-center absolute bottom-48-d flex flex-col gap-24-d w-full px-40-d z-20 left-0 text-white"
        )}
      >
        <p className={cx("font-prata sm:text-4xl xl:text-2xl")}>{item.head}</p>
        <p className="sm:text-lg xl:text-base">{item.desc}</p>
        <Button className={cx("w-max")}>Explore Our Boats</Button>
      </div>
      <div
        className={cx(
          "w-full h-full bg-black/30 rounded-2xl absolute top-0 z-10"
        )}
      ></div>
      <div className={cx("aspect-square relative z-0")}>
        <GradientImage className="rounded-2xl" src={item.img} />
      </div>
    </div>
  );
}

import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";

export default function CombinationCard({ item }: any) {
  return (
    <div
      className={cx(
        "w-full h-fit border border-black rounded-2xl"
      )}
    >
      <div className={cx("w-full aspect-video")}>
        <GradientImage className="rounded-t-2xl" src={item.img} />
      </div>
      <div className={cx("p-4 h-full space-y-4")}>
        <p>{item.type}</p>
        <p className={cx("font-prata text-xl")}>{item.head}</p>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

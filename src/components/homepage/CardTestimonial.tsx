import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Image from "next/image";

export default function CardTestimonial({ item }: any) {
  return (
    <div
      className={cx("w-full h-full p-5 bg-[#3728171A]/10 rounded-2xl space-y-6")}
    >
      <div>
        <Image src={"/images/ui/Stars.png"} alt="star image" width={1000} height={1000} className="w-[70%] h-full object-cover" />
      </div>
      <p className="xl:text-base">{item.desc}</p>
      <div className="flex items-center gap-4">
        <Image src={item.img} alt="testimonial image" width={1000} height={1000} className={cx("rounded-full w-14 h-14 object-cover")} />
        <div>
          <h6 className="text-lg xl:text-xl">{item.head}</h6>
          <p className="text-xs xl:text-sm">{item.role}</p>
        </div>
      </div>

    </div>
  );
}

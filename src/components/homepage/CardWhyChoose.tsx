"use client"

import { cx } from "class-variance-authority";
import React, { useState } from "react";
import GradientImage from "../ui/GradientImage";
import Image from "next/image";

export default function CardWhyChoose({ item, height = "h-[25vw]", isOpen, onClick }: { item: {head: string, title: string, img: string}, height: string, isOpen: boolean, onClick: () => void}) {
  return (
    <div className={cx(`w-full space-y-4 transition-all bg-[#CD5A051A] duration-500 sm:relative sm:space-y-4 ${isOpen ? "col-span-2" : "col-span-1"}`, height)}>
      <div className={cx("relative z-0")}>
        <div className="absolute top-0 right-0 p-4 z-30">
          <div className=" bg-white rounded-full h-10 w-10 z-30 flex items-center justify-center" onClick={onClick}>
            <Image src={"/images/ui/Arrow 10.png"} alt="arrow icon" width={20} height={20} />
          </div>
        </div>
        <div
          className={cx(
            "hidden rounded-2xl w-full h-full bg-black/30 absolute top-0 z-10 sm:block"
          )}
        ></div>
        <div className="w-full h-full">
          <Image src={item.img} alt="arrow icon" width={1000} height={1000} className={`rounded-2xl w-full h-full object-cover ${isOpen ? "aspect-square" : "aspect-[5/4]"}`} />
        </div>
      </div>
      {/* <div
        className={cx(
          "flex flex-col gap-16-d w-full z-20  sm:text-white sm:absolute sm:bottom-10 sm:px-10 lg:px-4"
        )}
      >
        <p className={cx("font-prata text-3xl sm:text-5xl lg:text-xl")}>{item.head}</p>
        <p className="sm:text-base lg:text-sm">
          Visit Camp Leakey, a renowned orangutan rehabilitation center,
          accessible only through special partnerships.
        </p>
      </div> */}

      <p className="font-semibold">{item.head}</p>
    </div>
  );
}

import React from "react";
import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import Link from "next/link";
import Star from "@/components/ui/Star";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

interface ServiceCategoryName {
  id: string;
  name: string;
}

export default function Introduction() {
  return (
    <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
      <Container
        className={cx("flex flex-row justify-between items-center gap-[24px]")}
      >
        <div
          className={cx(
            "w-[337px]  h-[420px] relative rounded-xl overflow-hidden"
          )}
        >
          <GradientImage src="/images/hero.jpg" />
        </div>
        <div className="flex flex-col gap-[32px] justify-center items-stretch w-[456px]">
          <span className="text-sm font-bold tracking-wider text-center">
            INTRODUCTION
          </span>
          <h2 className="font-prata font-normal leading-[3rem] text-5xl text-center">
            Wowborneo Overview
          </h2>
          <p className="text-[17px] text-[#372817] text-center leading-[28px]">
            Wow Borneo invites you to embark on an unparalleled journey through
            Kalimantan’s pristine rivers and vibrant rainforests. As the only
            river cruise provider in Borneo, we offer exclusive access to
            untouched landscapes, rare wildlife, and deep-rooted local cultures.
            Our cruises are more than a journey; they’re a connection to the
            essence of Borneo.
          </p>
          <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto ">
            Explore Our Cruises
          </Button>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div
            className={cx(
              "w-[337px]  h-[225px] relative rounded-xl overflow-hidden"
            )}
          >
            <GradientImage src="/images/homepage/Boat Deck.png" />
          </div>
          <div
            className={cx(
              "w-[337px]  h-[225px] relative rounded-xl overflow-hidden"
            )}
          >
            <GradientImage src="/images/homepage/River Boat.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";

export default function WelcomeToBorneo() {
  return (
    <Container>
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-8"
        )}
      >
        <p className={cx("font-semibold w-full lg:text-base")}>WELCOME TO WOWBORNEO</p>
        <p className={cx("font-prata w-full text-2xl sm:text-3xl lg:text-4xl")}>
          Why a Wow Borneo River Cruise?
        </p>
        <p className={cx("w-full lg:w-[60%] lg:text-base")}>
          Welcome to Wow Borneo’s exclusive collection of river cruises, where
          each journey reveals the secrets of Kalimantan’s lush rainforests and
          serene rivers. As the only river cruise provider in Borneo, we invite
          you to explore a world unlike any other – one filled with rare
          wildlife, rich culture, and pristine natural beauty. Our cruises
          aren’t just trips; they’re expeditions designed to immerse you in the
          stories of the river, connecting you to the spirit of Borneo. From
          witnessing the majestic orangutans in their natural habitat to
          stepping into the heart of Dayak traditions, each cruise offers an
          experience that’s both intimate and unforgettable.
        </p>
      </div>
    </Container>
  );
}

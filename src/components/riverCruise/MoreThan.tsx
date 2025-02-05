import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";

export default function MoreThan() {
  return (
    <Container>
      <div
        className={cx(
          "text-left flex flex-col gap-32-d justify-center items-center lg:text-center"
        )}
      >
        <p className={cx("uppercase font-semibold w-full lg:text-base")}>
          More Than a Cruise
        </p>
        <p className={cx("font-prata text-subtitle w-full")}>
          An Immersive Experience
        </p>
        <p className="text-description lg:w-[60%]">
          A Wow Borneo cruise is more than just a journey; it's a passage into a
          world of wonder and tranquility. Our river expeditions are designed to
          blend adventure with relaxation, offering the chance to encounter
          orangutans in their natural habitat, engage with local Dayak
          communities, and soak in the serene beauty of Borneo's landscapes.
        </p>
        <p className="text-description lg:w-[60%]">
          Whether you're a wildlife enthusiast, a cultural explorer, or simply
          someone in search of peace and inspiration, our cruises provide an
          unforgettable experience. Let the river carry you to places few have
          seen, and let the stories of the jungle captivate your spirit.
        </p>
      </div>
    </Container>
  );
}

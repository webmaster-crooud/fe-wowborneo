import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import CombinationCard from "./CombinationCard";

export default function Combination() {
  const data = [
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-1.png",
    },
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-2.png",
    },
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-3.png",
    },
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-4.png",
    },
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-5.png",
    },
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/riverCruise/discover/image-6.png",
    },
  ];
  return (
    <Container>
      <div
        className={cx(
          "text-left flex flex-col gap-32-d justify-center items-center lg:text-center"
        )}
      >
        <p className={cx("uppercase font-semibold w-full")}>Combination Tours</p>
        <p className={cx("font-prata text-3xl w-full lg:text-4xl")}>
          Discover Our Combination Tours
        </p>
        <p className="lg:w-[60%] lg:text-base">
          For the intrepid traveler seeking a deeper exploration, our
          Combination Tours offer extended journeys in partnership with other
          leading tour providers in Indonesia. These curated adventures blend
          the best of Borneo with other iconic destinations, creating
          unforgettable multi-day experiences.
        </p>
      </div>
      <div className={cx("grid grid-cols-1 gap-12 mt-80-d sm:grid-cols-2 xl:grid-cols-3")}>
        {data.map((item, key) => (
          <CombinationCard item={item} key={key} />
        ))}
      </div>
    </Container>
  );
}

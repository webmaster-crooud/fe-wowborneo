"use client"

import React, { useState } from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import CombinationCard from "./CombinationCard";
import CardWhyChoose from "../homepage/CardWhyChoose";

export default function Combination() {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null)

  const data = [
    {
      type: "8D7N",
      head: "Tanjung Puting & Palangkaraya Expedition",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/boats/exterior/boat.png",
    },
    {
      type: "8D7N",
      head: "Jungle Cruise & Dayak Longhouse",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/dayak-longhouse.png",
    },
    {
      type: "8D7N",
      head: "Orangutan & Nature Odyssey",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/wildlife/orangutan2.png",
    },
    {
      type: "8D7N",
      head: "Dayak Heritage & Cultural Journey",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/people/woman5.png",
    },
    {
      type: "8D7N",
      head: "The Koran River Adventure",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/boats/exterior/boat2.png",
    },
    {
      type: "8D7N",
      head: "Seatrek Bali & Wow Borneo",
      desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
      img: "/images/people/man2.png",
    },
  ];
  return (
    <Container>
      <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
        <div className="space-y-4 w-full">
          <p className={cx("uppercase font-semibold w-full")}>Combination Tours</p>
          <p className={cx("font-prata text-subtitle")}>
            Katingan River and Sebangau National Park Cruises
          </p>
        </div>
        <p className="text-description">
          Set sail on the tranquil waters of Katingan River, where the Sebangau National Park unveils a world of rich biodiversity. Encounter rare species, explore peat-swamp forests, and connect with the heart of Kalimantan.
        </p>
      </div>
      <div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
        {data.map((item, index) => {
          const currentRow = Math.floor(index / 3);
          const expandedRow = expandedIndex !== null ? Math.floor(expandedIndex / 3) : null;

          let colSpan = "";
          if (expandedIndex === null || expandedRow !== currentRow) {
            colSpan = "lg:col-span-4";
          } else {
            colSpan = expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";
          }
          
          return (
            <CombinationCard
              colSpan={colSpan}
              key={index}
              item={item}
              isOpen={expandedIndex === index}
              onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))}
              height="h-full"
            />
          );
        })}
      </div>
    </Container>
  );
}

"use client"

import { cx } from "class-variance-authority";
import React, { useState } from "react";
import GradientImage from "../ui/GradientImage";
import Container from "../ui/Container";
import CardWhyChoose from "../homepage/CardWhyChoose";
import ServiceCard from "./ServiceCard";

export default function Explore() {
  const [expandedIndex1, setExpandedIndex1] = useState<null | number>(null)
  const [expandedIndex2, setExpandedIndex2] = useState<null | number>(null)
  const [expandedIndex3, setExpandedIndex3] = useState<null | number>(null)

  const data = [
    {
      head: "Wild Borneo",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "1,299",
      img: "/images/wildlife/orangutan6.png",
    },
    {
      head: "Journey of the jungle",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "1,299",
      img: "/images/boats/exterior/boat.png",
    },
    {
      head: "Orangutan Odyssey",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "1,299",
      img: "/images/wildlife/orangutan2.png",
    },
  ];

  const data2 = [
    {
      head: "Orangutan Explorer",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/wildlife/orangutan2.png",
    },
    {
      head: "Wilderness Safari",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/people/family3.png",
    },
    {
      head: "Borneo’s Wild Heart",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/people/kid.png",
    },
  ];

  const data3 = [
    {
      head: "Orangutan Explorer",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/wildlife/bekantan.png",
    },
    {
      head: "Wilderness Safari",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/wildlife/orangutan6.png",
    },
    {
      head: "Borneo’s Wild Heart",
      desc: "Enjoy a friendly Orangutans and explore the amazing Dayak Heritage Expedition for 3D2N with Wowborneo.",
      price: "2,999",
      img: "/images/people/man3.png",
    },
  ];
  return (
    <div>
      <div className={cx("w-full h-full relative px-4 space-y-6 sm:space-y-0 sm:px-0")}>
        <div
          className={cx(
            "z-20 flex flex-col w-full gap-10 h-full text-left sm:absolute sm:items-center sm:justify-center sm:text-white sm:text-center sm:px-16"
          )}
        >
          <p className="font-semibold text-sm lg:text-base">Cruise Packages</p>
          <p className={cx("font-prata text-subtitle")}>
            Explore Our River Cruises
          </p>
          <p className="text-description lg:w-[50%]">
            Choose your path of discovery. Each of our cruises offers a unique
            experience, blending adventure with tranquility, and nature with
            culture. Follow your curiosity and find the journey that calls to
            you.
          </p>
        </div>
        <div
          className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}
        ></div>
        <div className="aspect-video w-full">
          <GradientImage src="/images/boats/exterior/boat.png" className="rounded-lg sm:rounded-none" />
        </div>
      </div>
      <Container className={cx("flex flex-col gap-120-d")}>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className={cx("font-prata text-subtitle")}>
                Orangutan and Dayak Village Cruises
              </p>
            </div>
            <p className="text-description">
              Embark on a journey that brings you face-to-face with Borneo’s
              iconic orangutans and the timeless traditions of the Dayak people.
              With cruises ranging from 3 days to 5 days, each itinerary is
              crafted to reveal the magic of the jungle and the warmth of local
              culture.
            </p>
          </div>
          <div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
            {data.map((item, index) => {
              const colSpan = expandedIndex1 === null
                ? "lg:col-span-4"
                : (expandedIndex1 === index ? "lg:col-span-6" : "lg:col-span-3");

              return (
                <ServiceCard
                  colSpan={colSpan}
                  key={index}
                  item={item}
                  isOpen={expandedIndex1 === index}
                  onClick={() => setExpandedIndex1((prev) => (prev === index ? null : index))}
                  height="h-full"
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className={cx("font-prata text-subtitle")}>
                Tanjung Puting and Rainforest Expeditions
              </p>
            </div>
            <p className="text-description">
              Step into the heart of the rainforest with expeditions designed for those who seek adventure and connection with nature. Discover the beauty of Tanjung Puting National Park, known for its diverse ecosystems and wildlife.
            </p>
          </div>
          <div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
            {data2.map((item, index) => {
              const colSpan = expandedIndex2 === null
                ? "lg:col-span-4"
                : (expandedIndex2 === index ? "lg:col-span-6" : "lg:col-span-3");

              return (
                <ServiceCard
                  colSpan={colSpan}
                  key={index}
                  item={item}
                  isOpen={expandedIndex2 === index}
                  onClick={() => setExpandedIndex2((prev) => (prev === index ? null : index))}
                  height="h-full"
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className={cx("font-prata text-subtitle")}>
                Katingan River and Sebangau National Park Cruises
              </p>
            </div>
            <p className="text-description">
              Set sail on the tranquil waters of Katingan River, where the Sebangau National Park unveils a world of rich biodiversity. Encounter rare species, explore peat-swamp forests, and connect with the heart of Kalimantan.
            </p>
          </div>
          <div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
            {data3.map((item, index) => {
              const colSpan = expandedIndex3 === null
                ? "lg:col-span-4"
                : (expandedIndex3 === index ? "lg:col-span-6" : "lg:col-span-3");

              return (
                <ServiceCard
                  colSpan={colSpan}
                  key={index}
                  item={item}
                  isOpen={expandedIndex3 === index}
                  onClick={() => setExpandedIndex3((prev) => (prev === index ? null : index))}
                  height="h-full"
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

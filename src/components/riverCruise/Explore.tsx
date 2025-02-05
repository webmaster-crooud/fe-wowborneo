import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Container from "../ui/Container";
import CardWhyChoose from "../homepage/CardWhyChoose";

export default function Explore() {
  const data = [
    {
      head: "Exclusive Access",
      title:
        "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
      img: "/images/homepage/card-why/image-3.jpg",
    },
    {
      head: "Exclusive Access",
      title:
        "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
      img: "/images/explore/nature/sebangau.jpeg",
    },
    {
      head: "Exclusive Access",
      title:
        "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
      img: "/images/explore/orangutan-tracking.jpeg",
    },
  ];
  return (
    <div>
      <div className={cx("w-full h-full relative px-4 space-y-6 sm:space-y-0 sm:px-0")}>
        <div
          className={cx(
            "z-20 flex flex-col w-full gap-6 h-full text-left sm:absolute sm:items-center sm:justify-center sm:text-white sm:text-center sm:px-16"
          )}
        >
          <p className={cx("font-prata text-3xl lg:text-5xl")}>
            Explore Our River Cruises
          </p>
          <p className="lg:w-[50%] lg:text-base">
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
          <GradientImage src="/images/riverCruise/hero-1.jpg" className="rounded-lg sm:rounded-none" />
        </div>
      </div>
      <Container className={cx("flex flex-col gap-120-d")}>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className="lg:text-base">Cruise Packages</p>
              <p className={cx("font-prata text-2xl lg:text-3xl xl:text-4xl")}>
                Orangutan and Dayak Village Cruises
              </p>
            </div>
            <p className="lg:text-base">
              Embark on a journey that brings you face-to-face with Borneo’s
              iconic orangutans and the timeless traditions of the Dayak people.
              With cruises ranging from 3 days to 5 days, each itinerary is
              crafted to reveal the magic of the jungle and the warmth of local
              culture.
            </p>
          </div>
          <div className={cx("grid grid-cols-1 gap-12 mt-80-d lg:grid-cols-3")}>
            {data.map((item, key) => (
              <CardWhyChoose height="h-full" key={key} item={item} />
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className="lg:text-base">Cruise Packages</p>
              <p className={cx("font-prata text-2xl lg:text-3xl xl:text-4xl")}>
                Orangutan and Dayak Village Cruises
              </p>
            </div>
            <p className="lg:text-base">
              Embark on a journey that brings you face-to-face with Borneo’s
              iconic orangutans and the timeless traditions of the Dayak people.
              With cruises ranging from 3 days to 5 days, each itinerary is
              crafted to reveal the magic of the jungle and the warmth of local
              culture.
            </p>
          </div>
          <div className={cx("grid grid-cols-1 gap-12 mt-80-d lg:grid-cols-3")}>
            {data.map((item, key) => (
              <CardWhyChoose height="h-full" key={key} item={item} />
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-4 lg:flex lg:items-end lg:gap-6">
            <div className="space-y-4 w-full">
              <p className="lg:text-base">Cruise Packages</p>
              <p className={cx("font-prata text-2xl lg:text-3xl xl:text-4xl")}>
                Orangutan and Dayak Village Cruises
              </p>
            </div>
            <p className="lg:text-base">
              Embark on a journey that brings you face-to-face with Borneo’s
              iconic orangutans and the timeless traditions of the Dayak people.
              With cruises ranging from 3 days to 5 days, each itinerary is
              crafted to reveal the magic of the jungle and the warmth of local
              culture.
            </p>
          </div>
          <div className={cx("grid grid-cols-1 gap-12 mt-80-d lg:grid-cols-3")}>
            {data.map((item, key) => (
              <CardWhyChoose height="h-full" key={key} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

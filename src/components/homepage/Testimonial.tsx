import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import CardTestimonial from "./CardTestimonial";

export default function Testimonial() {
  const data = [
    {
      head: "Jonathan A",
      role: "Kahayan River cruise",
      desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
      img: "/images/homepage/testimonial/image-1.jpg",
    },
    {
      head: "Jonathan A",
      role: "Kahayan River cruise",
      desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
      img: "/images/homepage/testimonial/image-1.jpg",
    },
    {
      head: "Jonathan A",
      role: "Kahayan River cruise",
      desc: "Pre and post we stayed Bukit-Raya Guesthouse in Palangkaraya, fabulous, especially the TREE HOUSE. The cruise was exceptional with full service including exemplary pick up & drop off.",
      img: "/images/homepage/testimonial/image-1.jpg",
    },
  ];
  return (
    <Container>
      <div className={cx("flex gap-6 flex-col md:text-center lg:flex-row lg:text-left lg:items-end")}>
        <div className={cx("w-full space-y-8")}>
          <p>TESTIMONIALS</p>
          <p className={cx("font-prata text-48-d")}>
            What they said about us
          </p>
        </div>
        <p className="xl:text-base">
          Hear from our guests who have embarked on unforgettable journeys with
          Wow Borneo. Their stories capture the magic of Kalimantan's rivers,
          the thrill of wildlife encounters, and the warmth of local
          communities.
        </p>
      </div>
      <div className={cx("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40-d mt-80-d")}>
        {data.map((item, key) => (
          <CardTestimonial item={item} key={key} />
        ))}
      </div>
    </Container>
  );
}

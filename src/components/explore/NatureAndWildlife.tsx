import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../button";
import Image from "next/image";
import Container from "../ui/Container";
import ImageSlider from "../homepage/ImageSlider";
import { CarouselItem } from "../ui/carousel";
import NatureCarousel from "./NatureCarousel";

const carousel1 = [
  {
    title: "Sebangau National Park",
    image: "/images/nature/swamp.png",
    description: "In Central Kalimantan, nature thrives in breathtaking abundance. As home to Sebangau National Park, this region holds one of the largest populations of wild orangutans, as well as countless other species that make the forest their sanctuary. With Wow Borneo, you’ll have the chance to explore these pristine ecosystems responsibly, learning about local conservation efforts and experiencing rare wildlife sightings firsthand. Each journey into this jungle is a step closer to understanding Borneo’s wild heart."
  },
  {
    title: "Orangutan Conservation",
    image: "/images/nature/forest.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis repellat blanditiis atque ut officia? Assumenda, perferendis corporis illo impedit laborum repellat itaque possimus, sequi quis quam ullam sed non cumque quidem quibusdam hic, veniam facilis consequatur est ratione quo! Recusandae esse ab, nulla deleniti aliquam nobis voluptatum quidem eaque debitis qui ut sit quae perferendis voluptatibus, dolorem corporis libero."
  },
  {
    title: "River Ecosystems",
    image: "/images/nature/sea.png",
    description: "In Central Kalimantan, nature thrives in breathtaking abundance. As home to Sebangau National Park, this region holds one of the largest populations of wild orangutans, as well as countless other species that make the forest their sanctuary. With Wow Borneo, you’ll have the chance to explore these pristine ecosystems responsibly, learning about local conservation efforts and experiencing rare wildlife sightings firsthand. Each journey into this jungle is a step closer to understanding Borneo’s wild heart."
  },
]

const carousel2 = [
  {
    title: "Dayak People",
    image: "/images/people/woman5.png",
    description: "The Dayak people of Central Kalimantan are the keepers of a profound and vibrant culture, rooted in the land and its traditions. Wow Borneo offers travelers a rare glimpse into this world through respectful, immersive experiences. Visit traditional longhouses, join local festivities, and witness age-old crafts passed down through generations. Discover the spirit of the Dayak community as they share their stories, songs, and ways of life that continue to flourish along the rivers of Borneo."
  },
  {
    title: "Dayak Culture",
    image: "/images/nature/forest.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis repellat blanditiis atque ut officia? Assumenda, perferendis corporis illo impedit laborum repellat itaque possimus, sequi quis quam ullam sed non cumque quidem quibusdam hic, veniam facilis consequatur est ratione quo! Recusandae esse ab, nulla deleniti aliquam nobis voluptatum quidem eaque debitis qui ut sit quae perferendis voluptatibus, dolorem corporis libero."
  },
  {
    title: "Traditional Longhouses",
    image: "/images/nature/sea.png",
    description: "The Dayak people of Central Kalimantan are the keepers of a profound and vibrant culture, rooted in the land and its traditions. Wow Borneo offers travelers a rare glimpse into this world through respectful, immersive experiences. Visit traditional longhouses, join local festivities, and witness age-old crafts passed down through generations. Discover the spirit of the Dayak community as they share their stories, songs, and ways of life that continue to flourish along the rivers of Borneo."
  },
]

const carousel3 = [
  {
    title: "Palangkaraya",
    image: "/images/people/family6.png",
    description: "From the lively markets of Palangka Raya to the tranquil shores of Katingan and the historic charm of Pangkalan Bun, Central Kalimantan’s towns and villages each offer a unique piece of the region’s story. Explore the diverse ways of life that define this area, from riverside communities to bustling urban centers. Each destination along the Wow Borneo route invites you to experience a different side of Borneo—filled with welcoming locals, fascinating history, and a spirit of adventure."
  },
  {
    title: "Katingan Regency",
    image: "/images/nature/forest.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis repellat blanditiis atque ut officia? Assumenda, perferendis corporis illo impedit laborum repellat itaque possimus, sequi quis quam ullam sed non cumque quidem quibusdam hic, veniam facilis consequatur est ratione quo! Recusandae esse ab, nulla deleniti aliquam nobis voluptatum quidem eaque debitis qui ut sit quae perferendis voluptatibus, dolorem corporis libero."
  },
  {
    title: "Pangkalan Bun",
    image: "/images/nature/sea.png",
    description: "From the lively markets of Palangka Raya to the tranquil shores of Katingan and the historic charm of Pangkalan Bun, Central Kalimantan’s towns and villages each offer a unique piece of the region’s story. Explore the diverse ways of life that define this area, from riverside communities to bustling urban centers. Each destination along the Wow Borneo route invites you to experience a different side of Borneo—filled with welcoming locals, fascinating history, and a spirit of adventure."
  },
]

export default function NatureAndWildlife() {
  return (
    <div className={cx("py-80-d")}>
      <div className="space-y-20">
        <NatureCarousel items={carousel1} button="About Sebangau" header="Nature & Wildlife" />
        <NatureCarousel items={carousel2} button="About Dayak Culture" header="Cultural Heritage" />
        <NatureCarousel items={carousel3} button="About Palangka Raya" header="Unique Destinations" />
      </div>
    </div>
  );
}

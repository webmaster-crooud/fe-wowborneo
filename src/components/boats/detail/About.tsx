import Container from "@/components/ui/Container";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";
import Image from "next/image";
export default function About() {
  return (
    <Container className="pb-1 space-y-12">
      <div
        className={cx(
          "w-full flex flex-col gap-8 justify-center items-center lg:text-center"
        )}
      >
        <p className={cx("uppercase font-medium w-full")}>TOC HERE</p>
        <p className={cx("font-prata text-xl md:text-3xl w-full lg:w-[50%] lg:text-5xl xl:text-6xl")}>
          Why Choose Wow Borneo?
        </p>
        <p className={cx("lg:w-[50%]")}>
          Choose from our carefully crafted cruises, each offering a unique experience of Borneo’s natural beauty and cultural treasures.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-10">
        <div className={cx("h-full aspect-video")}>
          <GradientImage
            fitVariant="cover"
            src={"/images/boats/detail/carousel-1.png"}
            className="rounded-[16px]"
          />
        </div>
        <div className={cx("h-full aspect-video")}>
          <GradientImage
            fitVariant="cover"
            src={"/images/boats/detail/carousel-2.png"}
            className="rounded-[16px]"
          />
        </div>
      </div>
    </Container>
  );
}

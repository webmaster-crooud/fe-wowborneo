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
        <p className={cx("uppercase font-medium w-full")}>About The Boat</p>
        <p className={cx("font-prata text-subtitle w-full lg:w-[50%]")}>
          A Unique Heritage Vessel
        </p>
        <p className={cx("text-description lg:w-[80%]")}>
          Originally known as a bis air by the local Dayak community, Rahai’i Pangun was once a traditional riverboat. Today, this 22 x 6 meter vessel has been thoughtfully converted into a comfortable and eco-friendly cruiser, designed by master Indonesian boat builders. Crafted with local expertise and outfitted with modern comforts, Rahai’i Pangun is a one-of-a-kind experience that offers a serene way to explore Borneo’s jungles.        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-10">
        <div className={cx("h-full aspect-video")}>
          <GradientImage
            fitVariant="cover"
            src={"/images/boats/interior/bed2.png"}
            className="rounded-[16px]"
          />
        </div>
        <div className={cx("h-full aspect-video")}>
          <GradientImage
            fitVariant="cover"
            src={"/images/boats/interior/bed.png"}
            className="rounded-[16px]"
          />
        </div>
      </div>
    </Container>
  );
}

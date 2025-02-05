import Container from "@/components/ui/Container";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";

export default function OnBoardExperience() {
  return (
    <Container>
      <div className="hidden sm:flex sm:items-center sm:flex-col sm:gap-4 sm:pb-6">
        <p>1/4</p>
        <div className="flex items-center gap-6">
          <p>SWIPE</p>
          <div className="w-96 bg-[#CD5A054D] h-1 rounded-full">
            <div className="w-[60%] h-full bg-[#372817] rounded-full"></div>
          </div>
          <p>{">>"}</p>
        </div>
      </div>
      <div className="w-full text-center pb-20">
        <p className={cx("uppercase w-full font-bold")}>Onboard Experience</p>
      </div>
      <div className="space-y-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="w-full h-full rounded aspect-video">
            <GradientImage
              fitVariant="cover"
              className="rounded-lg"
              src="/images/boats/detail/boardExperience.png"
            />
          </div>
          <div className="space-y-3 lg:space-y-10">
            <p className={cx("font-prata text-3xl")}>
              Relaxation on the Upper Deck
            </p>
            <p
              className={cx(
                "font-open-sans text-[17px] font-normal leading-[28px]"
              )}
            >
              The upper deck is where the magic unfolds. Relax on comfortable
              sofas and deck chairs as you take in the ever-changing views of the
              rainforest. This is also where our talented cooks serve meals, each
              dish a blend of local flavors that reflect the culinary richness of
              Kalimantan. Whether you’re sipping coffee in the morning mist or
              enjoying a sunset dinner, the deck offers an uninterrupted view of
              Borneo’s natural wonders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <p className={cx("font-prata text-3xl")}>
              Relaxation on the Upper Deck
            </p>
            <p
              className={cx(
                "font-open-sans text-[17px] font-normal leading-[28px]"
              )}
            >
              The upper deck is where the magic unfolds. Relax on comfortable
              sofas and deck chairs as you take in the ever-changing views of the
              rainforest. This is also where our talented cooks serve meals, each
              dish a blend of local flavors that reflect the culinary richness of
              Kalimantan. Whether you’re sipping coffee in the morning mist or
              enjoying a sunset dinner, the deck offers an uninterrupted view of
              Borneo’s natural wonders.
            </p>
          </div>
          <div className="w-full h-full rounded aspect-video order-first lg:order-none">
            <GradientImage
              fitVariant="cover"
              className="rounded-lg"
              src="/images/boats/detail/boardExperience-2.png"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

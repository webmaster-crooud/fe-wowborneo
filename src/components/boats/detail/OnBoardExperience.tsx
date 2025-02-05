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
              src="/images/people/man4.png"
            />
          </div>
          <div className="space-y-3 lg:space-y-10">
            <p className={cx("font-prata text-subtitle")}>
              Relaxation on the Upper Deck
            </p>
            <p
              className={cx(
                "font-open-sans text-description font-normal leading-[28px]"
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
          <div className="space-y-3 lg:space-y-10">
            <p className={cx("font-prata text-subtitle")}>
              Amenities to Enhance Your Journey
            </p>
            <p
              className={cx(
                "font-open-sans text-description font-normal leading-[28px]"
              )}
            >
              Every detail onboard has been crafted to make your journey unforgettable. Charge your camera or phone with ease—each cabin and the viewing deck are equipped with power outlets. In case of rain, the deck has waterproof blinds with clear inserts, so you can enjoy the scenery in all weather. You’ll find everything you need on board, from reading lights in the cabins to essential toiletries, ensuring you have a comfortable and convenient stay.
            </p>
          </div>
          <div className="w-full h-full rounded aspect-video order-first lg:order-none">
            <GradientImage
              fitVariant="cover"
              className="rounded-lg"
              src="/images/boats/interior/amenities.png"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

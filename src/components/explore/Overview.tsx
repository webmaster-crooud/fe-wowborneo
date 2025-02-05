import React from "react";
import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import Button from "../ui/button";
import GradientImage from "../ui/GradientImage";

export default function Overview() {
  return (
    <Container
      className={cx(
        "flex flex-col h-full justify-between items-center gap-16 xl:flex-row xl:items-start"
      )}
    >
      <div className={cx("flex flex-col items-center gap-16 h-full sm:flex-row xl:h-full")}>
        <div
          className={cx(
            "w-52 h-72 relative rounded-xl overflow-hidden xl:w-96 xl:h-[496px]"
          )}
        >
          <GradientImage src="/images/people/woman4.png" />
        </div>

        <div
          className={cx(
            "flex flex-col gap-4 justify-center items-center text-center sm:w-2/3 sm:text-left sm:items-start xl:text-center xl:items-center xl:h-full xl:gap-10"
          )}
        >
          <span className="text-sm font-bold tracking-widest uppercase">
            Overview of Central Kalimantan
          </span>
          <h2 className="font-prata font-normal leading-[3rem] text-subtitle">
            The Heart of Borneo: Central Kalimantan
          </h2>
          <p className="text-[#372817] text-description">
            Nestled in the southern reaches of Borneo, Central Kalimantan is a place of natural splendor and cultural depth. Known for its biodiverse jungles, lively rivers, and welcoming communities, this region invites travelers to explore its wild landscapes and connect with its people. With Wow Borneo’s thoughtfully guided experiences, you’ll discover an authentic side of Kalimantan that few travelers get to see, from deep within the jungle to the friendly villages that line its riverbanks.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center sm:flex-row xl:flex-col xl:items-end xl:w-fit">
        <div
          className={cx(
            "w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80"
          )}
        >
          <GradientImage
            className="rounded-xl"
            src="/images/people/family3.png"
          />
        </div>
        <div
          className={cx(
            "w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80"
          )}
        >
          <GradientImage
            className="rounded-xl"
            src="/images/boats/exterior/boat4.png"
          />
        </div>
      </div>
    </Container>
  );
}

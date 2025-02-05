import React from "react";
import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import Button from "../ui/button";

export default function Overview() {
  return (
    <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
      <Container
        className={cx(
          "flex flex-row justify-center items-center gap-1 lg:px-40"
        )}
      >
        <div className="flex flex-col gap-8 justify-center items-stretch">
          <span className="text-sm font-bold tracking-widest text-center uppercase lg:text-base">
            Overview of Central Kalimantan
          </span>
          <h2 className="font-prata font-normal leading-[3rem] text-4xl text-center lg:text-5xl">
            The Heart of Borneo: Central Kalimantan
          </h2>
          <p className="text-[#372817] text-center">
            Nestled in the southern reaches of Borneo, Central Kalimantan is a
            place of natural splendor and cultural depth. Known for its
            biodiverse jungles, lively rivers, and welcoming communities, this
            region invites travelers to explore its wild landscapes and connect
            with its people. With Wow Borneo’s thoughtfully guided experiences,
            you’ll discover an authentic side of Kalimantan that few travelers
            get to see, from deep within the jungle to the friendly villages
            that line its riverbanks.
          </p>
          <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
            Explore Our Routes
          </Button>
        </div>
      </Container>
    </div>
  );
}

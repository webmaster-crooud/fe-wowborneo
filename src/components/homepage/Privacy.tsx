import React from "react";
import GradientImage from "../ui/GradientImage";
import { cx } from "class-variance-authority";
import Container from "../ui/Container";

export default function Privacy() {
  return (
    <div
      className={cx(
        "landscape:min-lg:-translate-y-[10%] landscape:min-lg:mb-0",
        "translate-y-0 mb-[23.256vw] bg-blue-200"
      )}
    >
      <div
        className={cx(
          "w-[14.583vw] h-[18.75vw] relative -translate-x-1/2 left-1/2 translate-y-1/2"
        )}
      >
        <GradientImage src="/images/homepage/dayak1.png" />
      </div>
      <div
        className={cx(
          "w-full landscape:min-lg:h-[54.063vw] bg-primary text-white",
          "min-sm:h-[90vh]",
          "h-[40vh]"
        )}
      >
        <Container className={cx("bottom-[12%] absolute")}>
          <div
            className={cx(
              "flex landscape:min-lg:flex-row gap-240-d justify-center items-center",
              "flex-col"
            )}
          >
            <div
              className={cx("flex flex-col gap-24-d landscape:min-lg:w-[50%]")}
            >
              <p className={cx("landscape:min-lg:text-36-d", "text-24-m")}>
                Why Choose Wow Borneo?
              </p>
              <p
                className={cx(
                  "landscape:min-lg:text-18-d opacity-80",
                  "text-12-m"
                )}
              >
                Choose from our carefully crafted cruises, each offering a
                unique experience of Borneo’s natural beauty and cultural
                treasures.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

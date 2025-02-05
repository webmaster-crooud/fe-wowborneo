import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Button from "../../ui/button";
import Container from "../../ui/Container";

export default function WhyExplore() {
  return (
    <div>
      <div className={cx("w-full h-[500px] relative")}>
          <div
            className={cx(
              "absolute z-20 flex h-full flex-col gap-4 text-white items-center justify-center text-center px-4 sm:px-12"
            )}
          >
            <p className={cx("font-prata text-subtitle")}>
              Why Explore Sebangau National Park <span className="block">with Wow Borneo?</span>
            </p>
            <p className="text-description leading-5 lg:w-[70%]">
              With Wow Borneo, your experience in Sebangau National Park goes
              beyond a typical visit. Our knowledgeable guides share insights into
              the park’s ecology, conservation initiatives, and the lives of its
              inhabitants. We work closely with local communities to promote
              sustainable tourism that benefits both the environment and the
              people of Central Kalimantan. Join us for a journey that supports
              Sebangau’s preservation and fosters a deeper connection with
              Borneo’s wild landscapes.
            </p>
            <Button className="text-sm py-2 hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
              Start Your Sebangau Journey
            </Button>
          </div>
        <div
          className={cx("absolute top-0 z-10 w-full h-full bg-black/50")}
        ></div>
        <GradientImage src="/images/nature/river7.png" />
      </div>
    </div>
  );
}

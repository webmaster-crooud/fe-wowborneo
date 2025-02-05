import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "../../ui/Container";

export default function TopExperience() {
  return (
    <div>
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center relative px-4 gap-6 sm:px-12"
        )}
      >
        <h1 className={cx("text-3xl font-prata w-full sm:text-4xl")}>
          Top Experiences in Sebangau
          <span className="block">National Park</span>
        </h1>
        <p className={cx("w-full leading-6 sm:text-base lg:w-[70%]")}>
          Sebangau National Park is a paradise for nature enthusiasts and those
          seeking to witness Borneo’s wildlife in its natural habitat. Here are
          some of the top experiences you can enjoy in this extraordinary park
        </p>
      </div>

      <div className={cx("relative", "text-14-m")}>
        <Container variant="py-80-d">
          <div className="grid grid-cols-1 justify-between gap-8 lg:grid-cols-3">
            <div className="border h-full border-[#000] flex flex-col rounded-[16px]">
              <div className={cx("w-full h-[220px]")}>
                <GradientImage
                  className="rounded-[16px] !rounded-b-none"
                  src="/images/explore/orangutan-tracking.jpeg"
                />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-prata">
                  Orangutan Tracking
                </h1>
                <p className="leading-5">
                  Join a guided trek to observe orangutans in the wild, learning
                  about their behaviors and conservation needs.
                </p>
              </div>
            </div>
            <div className="border h-full border-[#000] flex flex-col text-center rounded-[16px]">
              <div className={cx("w-full h-[220px]")}>
                <GradientImage
                  className="rounded-[16px] !rounded-b-none"
                  src="/images/explore/peat-swamp-walking.jpeg"
                />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-prata">
                  Peat-Swamp Forest Walk
                </h1>
                <p className="leading-5">
                  Explore the unique ecosystem of the peat-swamp forest, rich in plant and animal life found nowhere else.
                </p>
              </div>
            </div>
            <div className="border h-full border-[#000] flex flex-col text-center rounded-[16px]">
              <div className={cx("w-full h-[220px]")}>
                <GradientImage
                  className="rounded-[16px] !rounded-b-none"
                  src="/images/explore/birdwatching.jpeg"
                />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-prata">
                  Birdwatching
                </h1>
                <p className="leading-5">
                  Spot rare and colorful bird species, including hornbills, kingfishers, and herons, which thrive in Sebangau’s diverse habitats.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

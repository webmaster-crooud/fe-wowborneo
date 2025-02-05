import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";

export default function NatureAndWildlife() {
  return (
    <div className={cx("py-80-d")}>
      {/* Section 1 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-sm font-bold tracking-widest w-full uppercase">
          Nature & Wildlife
        </span>
        <h1 className={cx("text-3xl font-prata w-full lg:text-4xl")}>Nature & Wildlife</h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            <Button className="text-xs transition rounded-full py-3">
              Sebangau National Park
            </Button>
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              Orangutan Conservation
            </Button>
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              River Ecosystems
            </Button>
          </div>
        </div>
        <p className={cx("w-full leading-6")}>
          In Central Kalimantan, nature thrives in breathtaking abundance. As
          home to Sebangau National Park, this region holds one of the largest
          populations of wild orangutans, as well as countless other species
          that make the forest their sanctuary. With Wow Borneo, you’ll have the
          chance to explore these pristine ecosystems responsibly, learning
          about local conservation efforts and experiencing rare wildlife
          sightings firsthand. Each journey into this jungle is a step closer to
          understanding Borneo’s wild heart.
        </p>
      </div>
      <div className={cx("w-full h-[490px] relative mb-28")}>
        <div
          className={cx(
            "absolute z-20 flex flex-col gap-32-d text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
          )}
        >
          <p className={cx("font-prata text-5xl lg:text-6xl")}>
            Sabangau National Park
          </p>
          <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
            About Sebangau
          </Button>
        </div>
        <div
          className={cx("absolute top-0 z-10 w-full h-full bg-[#37281780]")}
        ></div>
        <GradientImage src="/images/explore/nature/sebangau.jpeg" />
      </div>
      {/* Section 2 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-sm font-bold tracking-widest w-full uppercase">
          Cultural Heritage
        </span>
        <h1 className={cx("text-3xl font-prata w-full lg:text-4xl")}>
          Cultural Heritage
        </h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              Dayak People
            </Button>
            <Button className="text-xs transition rounded-full py-3">
              Dayak Culture
            </Button>
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              Traditional Longhouses
            </Button>
          </div>
        </div>
        <p className={cx("w-full leading-6")}>
          The Dayak people of Central Kalimantan are the keepers of a profound
          and vibrant culture, rooted in the land and its traditions. Wow Borneo
          offers travelers a rare glimpse into this world through respectful,
          immersive experiences. Visit traditional longhouses, join local
          festivities, and witness age-old crafts passed down through
          generations. Discover the spirit of the Dayak community as they share
          their stories, songs, and ways of life that continue to flourish along
          the rivers of Borneo.
        </p>
      </div>
      <div className={cx("w-full h-[490px] relative mb-28")}>
        <div
          className={cx(
            "absolute z-20 flex flex-col gap-32-d text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
          )}
        >
          <p className={cx("font-prata text-80-d")}>Dayak Peoples</p>
        </div>
        <div
          className={cx("absolute top-0 z-10 w-full h-full bg-[#37281780]")}
        ></div>
        <GradientImage src="/images/explore/dayak-tribes.jpeg" />
      </div>
      {/* Section 3 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-xs font-bold tracking-widest w-full uppercase sm:text-sm">
          Unique Destinations
        </span>
        <h1 className={cx("text-2xl font-prata w-full sm:text-3xl lg:text-4xl")}>Unique Destinations</h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            <Button className="text-xs transition rounded-full py-3">
              Palangkaraya
            </Button>
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              Katingan Regency
            </Button>
            <Button className="text-xs transition rounded-full py-3 hover:bg-transparent bg-transparent border border-[#CD5A05] !text-[#CD5A05]">
              Pangkalan Bun
            </Button>
          </div>
        </div>
        <p className={cx("w-full leading-6")}>
          From the lively markets of Palangka Raya to the tranquil shores of
          Katingan and the historic charm of Pangkalan Bun, Central Kalimantan’s
          towns and villages each offer a unique piece of the region’s story.
          Explore the diverse ways of life that define this area, from riverside
          communities to bustling urban centers. Each destination along the Wow
          Borneo route invites you to experience a different side of
          Borneo—filled with welcoming locals, fascinating history, and a spirit
          of adventure.
        </p>
      </div>
      <div className={cx("w-full h-[490px] relative")}>
        <div
          className={cx(
            "absolute z-20 flex flex-col gap-32-d text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
          )}
        >
          <p className={cx("font-prata text-80-d")}>Palangka Raya</p>
          <Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
            About Palangka Raya
          </Button>
        </div>
        <div
          className={cx("absolute top-0 z-10 w-full h-full bg-[#37281780]")}
        ></div>
        <GradientImage src="/images/explore/kahayan-river.jpeg" />
      </div>
      {/* Section 4 */}
    </div>
  );
}

import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../ui/button";
import Image from "next/image";
import Container from "../ui/Container";

export default function NatureAndWildlife() {
  return (
    <div className={cx("py-80-d")}>
      {/* Section 1 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <h1 className={cx("text-subtitle font-prata w-full")}>Nature & Wildlife</h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            <Button rounded="rounded-full" className="text-xs transition py-3">
              Sebangau National Park
            </Button>
            <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
              Orangutan Conservation
            </Button>
            <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
              River Ecosystems
            </Button>
          </div>
        </div>
        <p className={cx("text-description w-full leading-6")}>
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
      <Container className={cx("w-full relative space-y-10 px-4 py-20 sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
        <div
          className={cx(
            "w-full h-full flex flex-col gap-4 justify-center items-center text-center md:gap-12 md:absolute md:justify-center md:z-20 md:text-white md:px-32 md:h-fit"
          )}
        >
          <div className="hidden space-y-3 md:block lg:space-y-6">
            <p>1/3</p>
            <div className="flex items-center gap-6">
              <p>SWIPE</p>
              <div className="w-96 bg-white h-1 rounded-full">
                <div className="w-[60%] h-full bg-orange-borneo rounded-full"></div>
              </div>
              <p>{">>"}</p>
            </div>
          </div>
          <p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>
            Sabangau National Park
          </p>
          <Button className="text-xs transition rounded-full py-3 w-fit">
            About Sebangau
          </Button>
        </div>

        <div
          className={cx(
            "w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-full"
          )}
        >
          <div
            className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
          ></div>
          <Image src="/images/nature/swamp.png" alt="picture of orang utan" className="w-full rounded-lg md:rounded-none" height={1000} width={1000} />
        </div>
      </Container>
      {/* Section 2 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-sm font-bold tracking-widest w-full uppercase">
          Cultural Heritage
        </span>
        <h1 className={cx("text-subtitle font-prata w-full")}>
          Cultural Heritage
        </h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
          <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
          Dayak People
            </Button>
            <Button rounded="rounded-full" className="text-xs transition py-3">
              Dayak Culture
            </Button>
            <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
              Traditional Longhouses
            </Button>
          </div>
        </div>
        <p className={cx("text-description w-full leading-6")}>
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
      <Container className={cx("w-full relative space-y-10 px-4 py-20 sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
        <div
          className={cx(
            "w-full h-full flex flex-col gap-4 justify-center items-center text-center md:gap-12 md:absolute md:justify-center md:z-20 md:text-white md:px-32 md:h-fit"
          )}
        >
          <div className="hidden space-y-3 md:block lg:space-y-6">
            <p>1/3</p>
            <div className="flex items-center gap-6">
              <p>SWIPE</p>
              <div className="w-96 bg-white h-1 rounded-full">
                <div className="w-[60%] h-full bg-orange-borneo rounded-full"></div>
              </div>
              <p>{">>"}</p>
            </div>
          </div>
          <p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>
            Dayak Culture
          </p>
          <Button className="text-xs transition rounded-full py-3 w-fit">
            About Dayak Culture
          </Button>
        </div>

        <div
          className={cx(
            "w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-full"
          )}
        >
          <div
            className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
          ></div>
          <Image src="/images/people/woman5.png" alt="picture of orang utan" className="w-full rounded-lg md:rounded-none" height={1000} width={1000} />
        </div>
      </Container>
      {/* Section 3 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-xs font-bold tracking-widest w-full uppercase sm:text-sm">
          Unique Destinations
        </span>
        <h1 className={cx("text-subtitle font-prata w-full")}>Unique Destinations</h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            <Button rounded="rounded-full" className="text-xs transition py-3">
              Palangkaraya
            </Button>
            <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
              Katingan Regency
            </Button>
            <Button rounded="rounded-full" className="text-xs transition duration-300 py-3 bg-transparent border border-[#CD5A05] !text-[#CD5A05] hover:bg-[#ffe7d6] hover:border-[#b94704]">
              Pangkalan Bun
            </Button>
          </div>
        </div>
        <p className={cx("text-description w-full leading-6")}>
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
      <Container className={cx("w-full relative space-y-10 px-4 py-20 sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
        <div
          className={cx(
            "w-full h-full flex flex-col gap-4 justify-center items-center text-center md:gap-12 md:absolute md:justify-center md:z-20 md:text-white md:px-32 md:h-fit"
          )}
        >
          <div className="hidden space-y-3 md:block lg:space-y-6">
            <p>1/3</p>
            <div className="flex items-center gap-6">
              <p>SWIPE</p>
              <div className="w-96 bg-white h-1 rounded-full">
                <div className="w-[60%] h-full bg-orange-borneo rounded-full"></div>
              </div>
              <p>{">>"}</p>
            </div>
          </div>
          <p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>
            Palangka Raya
          </p>
          <Button className="text-xs transition rounded-full py-3 w-fit">
            About Palangka Raya
          </Button>
        </div>

        <div
          className={cx(
            "w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-full"
          )}
        >
          <div
            className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
          ></div>
          <Image src="/images/people/family6.png" alt="picture of orang utan" className="w-full rounded-lg md:rounded-none" height={1000} width={1000} />
        </div>
      </Container>
      {/* Section 4 */}
    </div>
  );
}

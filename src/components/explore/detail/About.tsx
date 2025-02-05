import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Button from "../../ui/button";
import Container from "../../ui/Container";

export default function About() {
  return (
    <div className={cx("py-80-d xl:-mt-56")}>
      {/* Section 1 */}
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center relative gap-10 px-4 sm:px-12"
        )}
      >
        <div className={cx("w-[280px] h-[360px]")}>
          <GradientImage
            className="rounded-[16px] w-full"
            src="/images/explore/book-1.jpeg"
          />
        </div>
        <h1 className={cx("text-48-d font-prata w-full")}>
          About Sebangau National Park
        </h1>
        <p className={cx("w-full leading-6 lg:w-[70%]")}>
          Sebangau National Park is a vast, protected rainforest that serves as
          a refuge for Borneo’s incredible biodiversity. Known for its dense
          peat-swamp forests and its vital role in orangutan conservation,
          Sebangau offers an unforgettable journey into the depths of nature.
          This hidden gem of Central Kalimantan invites visitors to experience
          its vibrant ecosystem, connect with rare wildlife, and witness the
          beauty of a forest preserved for generations.
        </p>
        <Button className="text-sm py-2 hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
          Explore Sebangau Cruise 
        </Button>
      </div>
      <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
        <Container className="pb-1">
          <div className="grid grid-cols-1 justify-between gap-5 lg:grid-cols-3">
            <div className={cx("w-full h-[520px] relative overflow-hidden rounded-[16px]")}>
              <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
              <GradientImage
                className="rounded-[16px] w-full"
                src="/images/explore/orang-utan.jpeg"
              />
              <p className="absolute bottom-7 end-7 text-white z-10 text-[17px]">Orangutan</p>
            </div>
            <div className={cx("w-full h-[520px] relative overflow-hidden rounded-[16px] lg:mt-16")}>
              <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
              <GradientImage
                className="rounded-[16px] w-full"
                src="/images/explore/sebangau-2.jpeg"
              />
              <p className="absolute bottom-7 end-7 text-white z-10 text-[17px]">Sebangau</p>
            </div>
            <div className={cx("w-full h-[520px] relative overflow-hidden rounded-[16px]")}>
              <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
              <GradientImage
                className="rounded-[16px] w-full"
                src="/images/explore/nature/sebangau.jpeg"
              />
              <p className="absolute bottom-7 end-7 text-white z-10 text-[17px]">Black River</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

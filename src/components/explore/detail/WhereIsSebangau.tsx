import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";

export default function WhrereIsSebangau() {
  return (
    <div className={cx("py-80-d")}>
      <div
        className={cx(
          "flex flex-col justify-center items-center relative mb-12 px-4 gap-8 sm:px-12 sm:text-center"
        )}
      >
        <h1 className={cx("text-3xl font-prata w-full sm:text-4xl md:text-5xl")}>
          Where is Sebangau <span className="block">National Park?</span>
        </h1>
        <p className={cx("w-full leading-6 sm:text-base lg:w-[70%]")}>
          Sebangau National Park stretches across 568,700 hectares of protected
          rainforest in Central Kalimantan, Indonesia. Situated between the
          Katingan and Sebangau rivers, the park is known for its peat-swamp
          forest—a unique ecosystem that plays a crucial role in carbon storage
          and biodiversity. This remote location provides a safe haven for
          numerous species, including the endangered Bornean orangutan, and
          offers visitors a peaceful, untouched corner of Borneo to explore.
        </p>
      </div>
      <div className={cx("w-full h-[490px] relative px-4 sm:px-12 md:px-0")}>
        <div className="w-full h-full relative rounded-lg overflow-hidden md:rounded-none">
          <GradientImage src="/images/explore/nature/sebangau.jpeg" />
          <div
            className={cx("absolute top-0 z-10 w-full h-full bg-[#37281780]")}
          ></div>
        </div>
      </div>
    </div>
  );
}

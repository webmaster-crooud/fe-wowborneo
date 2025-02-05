import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "@/components/ui/Container";

export default function WhrereIsSebangau() {
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
          <GradientImage src="/images/wildlife/orangutan3.png" />
        </div>

        <div
          className={cx(
            "flex flex-col gap-4 justify-center items-center text-center sm:w-2/3 sm:text-left sm:items-start xl:text-center xl:items-center xl:h-full xl:gap-10"
          )}
        >
          <h2 className="font-prata font-normal leading-[3rem] text-subtitle">
            Where is Sebangau National Park?
          </h2>
          <p className="text-[#372817] text-description">
            Sebangau National Park stretches across 568,700 hectares of protected rainforest in Central Kalimantan, Indonesia. Situated between the Katingan and Sebangau rivers, the park is known for its peat-swamp forest—a unique ecosystem that plays a crucial role in carbon storage and biodiversity. This remote location provides a safe haven for numerous species, including the endangered Bornean orangutan, and offers visitors a peaceful, untouched corner of Borneo to explore.          </p>
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
            src="/images/wildlife/bird.png"
          />
        </div>
        <div
          className={cx(
            "w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80"
          )}
        >
          <GradientImage
            className="rounded-xl"
            src="/images/wildlife/bekantan.png"
          />
        </div>
      </div>
    </Container>
  );
}

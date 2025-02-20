import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "../../ui/Container";
import Button from "../../button";

export default function OrangutanConversation() {
  return (
    <div>
      <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
        <Container className="space-y-16 md:space-y-28">
          <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2">
            <div className="w-full h-[440px] aspect-video">
              <GradientImage
                className="rounded-[16px]"
                src="/images/wildlife/orangutan2.png"
              />
            </div>
            <div className="flex flex-col justify-between h-full gap-4">
              <h1 className=" leading-normal font-prata text-subtitle">
                Orangutan Conservation in{" "}
                <span className="block">Sebangau National Park</span>
              </h1>
              <p className="text-description leading-7">
                Sebangau National Park is one of the last strongholds for the
                endangered Bornean orangutan, making conservation efforts here
                critical. The park is home to over 6,000 orangutans, one of
                the largest wild populations in Borneo. Conservation
                initiatives focus on protecting these gentle giants and
                preserving their habitat through responsible tourism and
                community support. By visiting Sebangau with Wow Borneo, you
                contribute directly to these efforts, helping to ensure a
                future for this iconic species.
              </p>
              <Button className="text-sm py-2 hover:shadow-lg hover:scale-105 transition w-fit">
                Support Orangutan Conservation
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-between h-full gap-4">
              <h1 className="leading-normal font-prata text-subtitle">
                The Unique Ecosystem of
                <span className="block">Sebangau’s Peat-Swamp Forest </span>
              </h1>
              <p className="text-description leading-7">
                Sebangau’s peat-swamp forest is a rare and vital ecosystem,
                playing a crucial role in storing carbon and regulating
                climate. This ecosystem supports a rich array of flora and
                fauna, including orchids, ferns, and various tree species
                adapted to the swampy conditions. The peat-swamp forest also
                serves as a habitat for unique wildlife like proboscis
                monkeys, clouded leopards, and the elusive sun bear. Walking
                through these forests provides a glimpse into a complex,
                interconnected world that is as delicate as it is diverse.
              </p>
              <Button className="text-sm py-2 hover:shadow-lg hover:scale-105 transition w-fit">
                Discover the Peat-Swamp Forest
              </Button>
            </div>
            <div className="w-full h-[440px] order-first md:order-none">
              <GradientImage
                className="rounded-[16px]"
                src="/images/nature/river5.png"
              />
            </div>
          </div>
         
        </Container>
      </div>
    </div>
  );
}

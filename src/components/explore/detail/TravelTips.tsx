import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "../../ui/Container";

export default function TravelTips() {
  return (
    <div className="pt-28">
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center relative px-4 gap-8 sm:px-12"
        )}
      >
        <h1 className={cx("text-3xl font-prata")}>
          Travel Tips for Visiting Sebangau
          <span className="block">National Park</span>
        </h1>
        <p className={cx("leading-6 lg:w-[70%]")}>
          Planning a visit to Sebangau? Here are some essential tips to enhance
          your adventure in this beautiful park. By following these tips, you’ll
          help protect Sebangau’s delicate ecosystem while having a memorable
          experience
        </p>
      </div>

      <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
        <Container variant="py-80-d">
          <div className="grid grid-cols-1 justify-between gap-5 sm:gap-10 lg:grid-cols-3">
            <div className="border h-full border-[#000] flex flex-col text-center rounded-[16px]">
              <div className="p-10 flex flex-col grow">
                <h1 className="text-32-d font-prata mb-10">
                  Getting There
                </h1>
                <p className="leading-5 mb-0">
                  Sebangau is accessible by road from Palangkaraya, with guided tours available for deeper exploration.
                </p>
              </div>
            </div>
            <div className="border h-full border-[#000] flex flex-col text-center rounded-[16px]">
              <div className="p-10 flex flex-col grow">
                <h1 className="text-32-d font-prata mb-10">
                  Best Time to Visit
                </h1>
                <p className="leading-5 mb-0">
                  The dry season, from April to October, offers ideal weather for trekking and wildlife viewing.
                </p>
              </div>
            </div>
            <div className="border h-full border-[#000] flex flex-col text-center rounded-[16px]">
              <div className="p-10 flex flex-col grow">
                <h1 className="text-32-d font-prata mb-10">Conservation Etiquette</h1>
                <p className="leading-5 mb-0">
                Respect the wildlife by keeping a safe distance, staying on marked trails, and minimizing noise. Sebangau is a protected area, and visitors are encouraged to follow Leave No Trace principles
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

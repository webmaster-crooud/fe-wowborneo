import Button from "@/components/button";
import Container from "@/components/ui/Container";
import GradientImage from "@/components/ui/GradientImage";
import { IAboutBoat } from "@/types/boat";
import { cx } from "class-variance-authority";

type propsAbout = {
	abouts: IAboutBoat[];
};

export default function About({ abouts }: propsAbout) {
	return (
		<Container className="pb-1 space-y-12">
			<div className={cx("w-full flex flex-col gap-8 justify-center items-center lg:text-center")}>
				<h2 className={cx("uppercase font-medium w-full")}>About The Boat</h2>
				{abouts.map((item, i) => (
					<>
						<p className={cx("font-prata text-subtitle w-full lg:w-[50%]")}>{item.title}</p>
						<p className={cx("text-description lg:w-[80%]")}>{item.description}</p>
					</>
				))}
				<Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">Start Your Journey with Rahai’i Pangun</Button>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-10">
				<div className={cx("h-full aspect-video")}>
					<GradientImage fitVariant="cover" src={"/images/boats/interior/bed2.png"} className="rounded-[16px]" />
				</div>
				<div className={cx("h-full aspect-video")}>
					<GradientImage fitVariant="cover" src={"/images/boats/interior/bed.png"} className="rounded-[16px]" />
				</div>
				<div className="hidden sm:flex sm:items-center sm:flex-col sm:gap-4 sm:pb-6 col-span-2">
					<p>1/4</p>
					<div className="flex items-center gap-6">
						<p>SWIPE</p>
						<div className="w-96 bg-[#CD5A054D] h-1 rounded-full">
							<div className="w-[60%] h-full bg-[#372817] rounded-full"></div>
						</div>
						<p>{">>"}</p>
					</div>
				</div>
			</div>
		</Container>
	);
}

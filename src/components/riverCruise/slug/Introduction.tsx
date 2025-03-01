import Container from "@/components/ui/Container";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";
import React from "react";

type propsIntroduction = {
	title: string;
	text: string;
	destinationText: string;
};

const Introduction: React.FC<propsIntroduction> = ({ title, text, destinationText }) => {
	return (
		<div className="space-y-20">
			<Container className={cx("text-center flex flex-col justify-center items-center gap-8 pb-2")}>
				<p className={cx("font-bold w-full lg:text-base uppercase")}>INTRODUCTION</p>
				<p className={cx("font-prata w-full text-subtitle")}>{title}</p>
				<p className={cx("w-full text-description lg:w-[60%]")}>{text}</p>
			</Container>
			<Container className="sm:px-0 py-2">
				<div className={cx("w-full h-full relative space-y-6 sm:space-y-0 sm:px-0")}>
					<div className={cx("z-20 flex flex-col w-full gap-10 h-full text-left sm:absolute sm:items-center sm:justify-center sm:text-white sm:text-center sm:px-16")}>
						<p className={cx("font-prata text-subtitle")}>Itinerary Overview</p>
						<p className="text-description lg:w-[50%]">{destinationText}</p>
					</div>
					<div className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}></div>
					<div className="aspect-video w-full">
						<GradientImage src="/images/nature/sea2.png" className="rounded-lg sm:rounded-none" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Introduction;

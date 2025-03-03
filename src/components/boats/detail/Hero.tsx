import Button from "@/components/button";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";
import React from "react";

type propsHero = {
	name: string;
	title: string;
	description: string;
	cover: string;
};

export default function Hero({ name, title, description, cover }: propsHero) {
	return (
		<div className={cx("w-full relative", "h-screen", "fullscreen")}>
			<div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

			<div className="absolute z-20 text-white flex flex-col gap-4 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-y-6">
				<h1 className={cx("text-sm text-center font-semibold md:text-base")}>
					BOATS - <span className="uppercase">{name}</span>
				</h1>
				<p className={cx("text-title lg:text-3xl xl:text-7xl leading-tight font-prata text-center xl:w-[80%]")}>{title}</p>
				<p className={cx("text-xs leading-tight text-center sm:text-description lg:w-[90%]")}>{description}</p>
				<Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">Book Your Cruise Now</Button>
			</div>

			<GradientImage src={cover} />
		</div>
	);
}

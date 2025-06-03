"use client";
import Button from "@/components/button";
import GradientImage from "@/components/ui/GradientImage";
import { cx } from "class-variance-authority";
import { useRouter } from "next/navigation";
import React from "react";

type propsHero = {
	title: string;
	duration: string;
	cover: string;
	subHeading: string;
};

const Hero: React.FC<propsHero> = ({ title, duration, cover, subHeading }) => {
	const router = useRouter();
	return (
		<div className={cx("w-full relative", "h-screen", "fullscreen")}>
			<div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

			<div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
				<p className={cx("text-sm text-center font-semibold md:text-base lg:text-lg uppercase tracking-widest")}>river cruise</p>
				<p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>
					{title} <br /> ({`${duration}D${Number(duration) - 1}N`})
				</p>
				<p className={cx("text-description leading-tight text-center lg:w-[80%]")}>{subHeading}</p>
				<Button onClick={() => router.push("/cruise")} className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
					Explore The Cruise
				</Button>
			</div>

			<GradientImage src={cover} className="" />
		</div>
	);
};

export default Hero;

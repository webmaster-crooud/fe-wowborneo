"use client";
import { cx } from "class-variance-authority";
import React from "react";
import GradientImage from "../ui/GradientImage";
import Button from "../button";
import { useRouter } from "next/navigation";

export default function Hero() {
	const router = useRouter();
	return (
		<div className={cx("w-full relative", "h-screen", "fullscreen")}>
			<div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

			<div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16 md:gap-10">
				<p className={cx("text-sm text-center font-semibold md:text-base uppercase lg:text-lg tracking-widest")}>Borneo river cruise</p>
				<p className={cx("text-title leading-tight font-prata text-center xl:w-[60%]")}>Discover Borneo's Hidden Heart</p>
				<p className={cx("text-center text-description lg:w-[55%]")}>Immerse yourself in the beauty of Borneo's rivers, where each journey unveils the stories of the land, wildlife, and people.</p>
				<Button onClick={() => router.push("/cruise")}>Explore Our Cruises</Button>
			</div>

			<GradientImage src="/home/hero.webp" className="" />
		</div>
	);
}

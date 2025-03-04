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
			<div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

			<div className="absolute z-20 text-white flex flex-col gap-6 items-center justify-center h-full w-full px-4 sm:px-12 md:px-16">
				<p className={cx("text-sm text-center uppercase tracking-widest font-semibold md:text-base lg:text-lg")}>river cruise</p>
				<p className={cx("text-title leading-tight font-prata text-center xl:w-[80%]")}>Embark on a Journey Through the Heart of Borneo</p>
				<p className={cx("text-description text-center lg:w-[65%]")}>Discover the mystery, beauty, and culture of Kalimantan’s rivers with our unique, story-driven river cruises. Each journey is crafted to immerse you in the wonders of Borneo's landscapes, wildlife, and ancient traditions.</p>
				<Button onClick={() => router.push("/cruise#explore")} className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">
					Explore Our Cruises
				</Button>
			</div>

			<GradientImage src="/images/nature/river3.png" />
		</div>
	);
}

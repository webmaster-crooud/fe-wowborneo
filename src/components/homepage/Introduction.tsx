import React from "react";
import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import Link from "next/link";
import Star from "@/components/ui/Star";
import GradientImage from "../ui/GradientImage";
import Button from "../button";

interface ServiceCategoryName {
	id: string;
	name: string;
}

export default function Introduction() {
	return (
		<div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
			<Container className={cx("flex flex-col h-full justify-between items-center gap-16 xl:flex-row xl:items-start")}>
				<div className="flex flex-col items-center gap-16 h-full sm:flex-row xl:h-full xl:items-start">
					<div className={cx("w-52 h-72 relative rounded-xl overflow-hidden xl:w-96 xl:h-[496px]")}>
						<GradientImage src="/home/introduction.webp" />
					</div>
					<div className="flex flex-col gap-4 justify-center items-center text-center sm:w-2/3 sm:text-left sm:items-start xl:text-center xl:items-center xl:h-full xl:gap-10">
						<span className="text-sm font-bold tracking-wider w-full">INTRODUCTION</span>
						<h2 className="font-prata w-full font-normal leading-[3rem] text-subtitle">Wowborneo Overview</h2>
						<p className="text-description text-[#372817] xl:w-[70%]">Wow Borneo invites you to embark on an unparalleled journey through Kalimantan's pristine rivers and vibrant rainforests. As the only river cruise provider in Borneo, we offer exclusive access to untouched landscapes, rare wildlife, and deep-rooted local cultures. Our cruises are more than a journey; they're a connection to the essence of Borneo.</p>
						<Button className="text-16-d hover:shadow-lg hover:scale-105 transition w-fit">Learn More About Us</Button>
					</div>
				</div>
				<div className="flex flex-col gap-4 w-full items-center sm:flex-row xl:flex-col xl:items-end xl:w-fit">
					<div className={cx("w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80")}>
						<GradientImage src="/home/introduction_3.webp" />
					</div>
					<div className={cx("w-full h-36 sm:h-52 md:h-60 rounded-xl overflow-hidden xl:w-80")}>
						<GradientImage src="/home/introduction_2.webp" />
					</div>
				</div>
			</Container>
		</div>
	);
}

"use client";

import { cx } from "class-variance-authority";
import CardWhyChoose from "./CardWhyChoose";
import Container from "../ui/Container";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ImageSlider from "./ImageSlider";
import { CarouselItem } from "../ui/carousel";
import { HomePageResponse } from "@/types/home";
import { SafeHTML } from "../SafeHTML";

const cruise = ["/home/featured.webp", "/images/wildlife/bekantan.png", "/images/wildlife/deer.png", "/images/wildlife/komodo.png"];

// export default function FeaturedCruises({ cruise }: { cruise: HomePageResponse["cruise"] }) {
export default function FeaturedCruises() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

	const data = [
		{
			title: "Exclusive Access",
			description: "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
			cover: "/home/exclusive.webp",
			duration: 5,
		},
		{
			title: "Local Guideline",
			description: "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
			cover: "/home/local.webp",
			duration: 3,
		},
		{
			title: "Sustainable Statement",
			description: "Visit Camp Leakey, a renowned orangutan rehabilitation center, accessible only through special partnerships.",
			cover: "/home/sustainable.webp",
			duration: 4,
		},
	];
	return (
		<div className={cx("py-80-d space-y-10")}>
			{/* Section 1 */}
			<Container className={cx("text-center flex flex-col justify-center items-center relative py-2")}>
				<h1 className={cx("text-subtitle font-prata")}>Featured Cruises</h1>
				<p className={cx("mt-24-d text-description lg:w-[50%]")}>Choose from our carefully crafted cruises, each offering a unique experience of Borneo's natural beauty and cultural treasures.</p>
			</Container>
			{/* Section 2 */}
			<ImageSlider key={"ImageFeatureCruise"}>
				{data.map((c, index) => (
					<CarouselItem key={index}>
						<Container className={cx("w-full relative space-y-10 px-4 py-2 sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
							<div className={cx("w-full h-full flex flex-col gap-24-d justify-center items-center md:absolute md:justify-center md:z-20 md:text-white md:text-center md:px-32 md:h-fit")}>
								<div className="hidden space-y-3 md:block lg:space-y-6">
									<p>
										{index + 1}/{cruise.length}
									</p>
									<div className="flex items-center gap-6">
										<p>SWIPE</p>
										<div className="w-96 bg-white h-1 rounded-full">
											<div className={`h-full bg-orange-borneo rounded-full transition-all duration-300`} style={{ width: `${(index + 1) * (100 / cruise.length)}%` }}></div>
										</div>
										<p>{">>"}</p>
									</div>
								</div>
								<p className={cx("uppercase font-medium w-full xl:text-lg")}>{`${c.duration} Day ${Number(c.duration) - 1} Night`}</p>
								<p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>{c.title}</p>
								<SafeHTML html={c.description} maxWords={15} />
							</div>

							<div className={cx("w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-[85vh]")}>
								<div className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}></div>
								<Image src={c.cover} alt="picture of orang utan" className="w-full rounded-lg object-cover md:rounded-none lg:h-[85vh] object-center" height={1000} width={1000} />
							</div>
						</Container>
					</CarouselItem>
				))}
			</ImageSlider>
			{/* Section 3 */}
			<Container className={cx("mt-248-d py-2")}>
				<div className={cx("w-full flex flex-col gap-24-d justify-center items-center lg:text-center")} id="whyChooses">
					<p className={cx("uppercase font-medium w-full")}>TOC HERE</p>
					<p className={cx("font-prata text-subtitle w-full lg:w-[50%]")}>Why Choose Wow Borneo?</p>
					<p className={cx("text-description lg:w-[50%]")}>Choose from our carefully crafted cruises, each offering a unique experience of Borneo’s natural beauty and cultural treasures.</p>
				</div>
			</Container>
			{/* Section 4 */}
			<Container className={cx("py-2 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
				{data.map((item, index) => {
					const colSpan = expandedIndex === null ? "lg:col-span-4" : expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";

					return <CardWhyChoose colSpan={colSpan} key={index} item={item} isOpen={expandedIndex === index} onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))} height="h-full" />;
				})}
			</Container>
		</div>
	);
}

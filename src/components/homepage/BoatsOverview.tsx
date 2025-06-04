import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import Button from "../button";
import ImageSlider from "./ImageSlider";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { HomePageResponse } from "@/types/home";
import { SafeHTML } from "../SafeHTML";

interface DataOverview {
	cover: string;
	name: string;
	slug: string;
	description: string;
}

const boat: DataOverview[] = [
	{
		name: "Rahai'i Pangun",
		slug: "rahaii-pangun",
		description: "",
		cover: "/home/boat_overview_rahai.webp",
	},
	{
		name: "Kumai",
		slug: "kumai",
		description: "",
		cover: "/home/boat_overview_kumai.webp",
	},
	{
		name: "Spirit Of Kalimantan",
		slug: "spirit-of-kalimantan",
		description: "",
		cover: "/home/boat_overview_spirit_of_kalimantan.webp",
	},
];

export default function BoatsOverview() {
	// export default function BoatsOverview({ boat }: { boat: HomePageResponse["boat"] }) {
	return (
		<Container className={cx("w-full h-full space-y-12 md:px-0")}>
			<div className={cx("text-center grid grid-cols-1 lg:grid-cols-2 gap-4 items-end justify-between relative sm:px-8 md:px-16")}>
				<div className="w-full flex flex-col gap-y-10 text-start">
					<p className="text-sm w-full font-bold">OUR BOATS</p>
					<h2 className={cx("text-subtitle font-prata")}>Boats Overview</h2>
				</div>
				<p className={cx("text-description lg:w-full text-start")}>Our fleet of purpose-built river cruisers provides the perfect blend of comfort and authenticity. Each boat is crafted to bring you closer to nature while offering modern amenities to make your journey unforgettable.</p>
			</div>
			<ImageSlider key={"imageBoatOverview"}>
				{boat.map((o, index) => (
					<CarouselItem key={index}>
						<div className={cx("lg:h-[46.875vw] w-full mt-64-d relative space-y-10 md:space-y-0")}>
							<div className={cx("w-full h-full flex flex-col gap-24-d justify-center md:items-center md:absolute md:z-20 md:text-white md:text-center md:px-32 md:py-8 md:justify-between lg:p-32")}>
								<div className="hidden space-y-3 md:block lg:space-y-6">
									<p>
										{index + 1}/{boat.length}
									</p>
									<div className="flex items-center gap-6">
										<p>SWIPE</p>
										<div className="w-96 bg-white h-1 rounded-full">
											<div className={`h-full bg-orange-borneo rounded-full transition-all duration-300`} style={{ width: `${(index + 1) * (100 / boat.length)}%` }}></div>
										</div>
										<p>{">>"}</p>
									</div>
								</div>
								<div className="w-full flex flex-col items-center justify-center gap-8">
									<p className={cx("font-prata text-subtitle leading-snug capitalize w-full lg:w-[60%]")}>{o.name.toLocaleLowerCase()}</p>
									<SafeHTML html={o.description || "Our flagship vessel, designed for immersive exploration in the heart of Borneo."} maxWords={15} />
								</div>
								<Button onClick={() => window.open(`/cruise/${o.slug}`)} className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit capitalize">
									Explore {o.name.toLocaleLowerCase()}
								</Button>
							</div>

							<div className={cx("w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-[75vh]")}>
								<div className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}></div>
								<Image src={o.cover} alt="Image Cruise" className="w-full rounded-lg object-cover object-center md:rounded-none lg:h-[75vh]" height={1000} width={1000} />
							</div>
						</div>
					</CarouselItem>
				))}
			</ImageSlider>
		</Container>
	);
}

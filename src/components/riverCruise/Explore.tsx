"use client";

import { cx } from "class-variance-authority";
import React, { useCallback, useState } from "react";
import GradientImage from "../ui/GradientImage";
import Container from "../ui/Container";
import ServiceCard from "./ServiceCard";
import { cruiseData } from "@/constants/cruise";
import { useQuery } from "@tanstack/react-query";

type CruisePackage = {
	title: string;
	description: string;
	slug: string;
	cruise: typeof cruiseData;
};

// const CRUISE_PACKAGES: CruisePackage[] = [
// 	{
// 		title: "Orangutan Tours in Tanjung Puting National Park",
// 		slug: "orangutan-tours-in-tanjung-puting-national-park",
// 		description: "Embark on a journey that brings you face-to-face with Borneo’s iconic orangutans and the timeless traditions of the Dayak people. With cruises ranging from 3 days to 5 days, each itinerary is crafted to reveal the magic of the jungle and the warmth of local culture.",
// 		cruises: cruiseData.filter((cruise) => cruise.slug === "tanjung-puting-orangutan-explorer" || cruise.slug === "orangutan-wilderness-safari" || cruise.slug === "borneos-wild-heart-tanjung-puting"),
// 	},
// 	{
// 		title: "Orangutan & Dayak Village Cruises",
// 		slug: "orangutan-and-dayak-village-cruises",
// 		description: "Step into the heart of the rainforest with expeditions designed for those who seek adventure and connection with nature. Discover the beauty of Tanjung Puting National Park, known for its diverse ecosystems and wildlife.",
// 		cruises: cruiseData.filter((cruise) => cruise.slug === "wild-borneo" || cruise.slug === "orangutan-odyssey-dayak-traditions" || cruise.slug === "journey-of-the-jungle-orangutans-dayak-villages"),
// 	},
// 	{
// 		title: "Katingan River & Sebangau National Park Cruises",
// 		slug: "katingan-river-and-sebangau-national-park-cruises",
// 		description: "Set sail on the tranquil waters of Katingan River, where the Sebangau National Park unveils a world of rich biodiversity. Encounter rare species, explore peat-swamp forests, and connect with the heart of Kalimantan.",
// 		cruises: cruiseData.filter((cruise) => cruise.slug === "sebangau-safari-borneo" || cruise.slug === "katingan-river-sebangau-wilderness-journey" || cruise.slug === "hidden-rivers-sebangau-katingan"),
// 	},
// ];

const CruisePackageSection = ({ packageData }: { packageData: CruisePackage }) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

	return (
		<div>
			<div className="space-y-4 lg:space-y-0 lg:flex lg:items-end lg:gap-6">
				<div className="space-y-5 lg:space-y-0 w-full">
					<p className={cx("font-prata text-subtitle leading-snug capitalize")}>{packageData.title}</p>
				</div>
				<p className="text-description w-full">{packageData.description}</p>
			</div>
			<div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
				{packageData.cruise.map((cruise, index) => {
					const colSpan = expandedIndex === null ? "lg:col-span-4" : expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";

					return <ServiceCard key={cruise.slug} colSpan={colSpan} item={cruise} isOpen={expandedIndex === index} onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))} height="h-full" />;
				})}
			</div>
		</div>
	);
};

export default function Explore() {
	const fetchPackage = useCallback(async () => {
		const { data }: { data: CruisePackage[] } = await fetch(`${process.env.NEXT_PUBLIC_API}/home/cruise`).then((res) => res.json());
		return data;
	}, []);

	const { data: packageCruise, isError } = useQuery({
		queryKey: ["PackageCruise"],
		queryFn: fetchPackage,
	});
	return (
		<section id="explore">
			<div className={cx("w-full h-full relative px-4 space-y-6 sm:space-y-0 sm:px-0")}>
				<div className={cx("z-20 flex flex-col w-full gap-10 h-full text-left sm:absolute sm:items-center sm:justify-center sm:text-white sm:text-center sm:px-16")}>
					<p className={cx("font-prata text-subtitle")}>Explore Our River Cruises</p>
					<p className="text-description lg:w-[70%] italic">Choose your path of discovery. Each of our cruises offers a unique experience, blending adventure with tranquility, and nature with culture. Follow your curiosity and find the journey that calls to you.</p>
				</div>
				<div className={cx("hidden absolute top-0 z-10 w-full h-full bg-black/50 sm:block")}></div>
				<div className="aspect-video w-full">
					<GradientImage src="/cruise/explore.webp" className="rounded-lg sm:rounded-none" />
				</div>
			</div>
			<Container className={cx("flex flex-col gap-120-d")}>
				{packageCruise?.map((pc) => (
					<CruisePackageSection key={pc.slug} packageData={pc} />
				))}
			</Container>
		</section>
	);
}

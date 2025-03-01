"use client";

import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "../../ui/Container";
import AdventureCard from "@/components/riverCruise/detail/AdventureCard";
import CardWhyChoose from "@/components/homepage/CardWhyChoose";
import ServiceCard from "@/components/riverCruise/ServiceCard";
import { useState } from "react";
import { ICruise } from "@/types/cruise";

export default function TopExperience() {
	const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
	const datas: ICruise[] = [
		{
			title: "Orangutan Tracking",
			description: "Join a guided trek to observe orangutans in the wild, learning about their behaviors and conservation needs.",
			price: "1,299",
			cover: "/images/wildlife/orangutan6.png",
		},
		{
			title: "Peat-Swamp Forest Walk",
			description: "Join a guided trek to observe orangutans in the wild, learning about their behaviors and conservation needs.",
			price: "1,299",
			cover: "/images/nature/forest.png",
		},
		{
			title: "Birdwatching",
			description: "Join a guided trek to observe orangutans in the wild, learning about their behaviors and conservation needs.",
			price: "1,299",
			cover: "/images/wildlife/bird.png",
		},
	];
	return (
		<Container className="space-y-20 pt-2">
			<div className="space-y-4 lg:flex lg:items-end lg:gap-6">
				<p className={cx("font-prata text-subtitle")}>Top Experiences in Sebangau National Park</p>
				<p className="text-description">Sebangau National Park is a paradise for nature enthusiasts and those seeking to witness Borneo’s wildlife in its natural habitat. Here are some of the top experiences you can enjoy in this extraordinary park</p>
			</div>
			<div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
				{datas.map((item, index) => {
					const colSpan = expandedIndex === null ? "lg:col-span-4" : expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";

					return <ServiceCard colSpan={colSpan} key={index} item={item} isOpen={expandedIndex === index} onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))} height="h-full" />;
				})}
			</div>
		</Container>
	);
}

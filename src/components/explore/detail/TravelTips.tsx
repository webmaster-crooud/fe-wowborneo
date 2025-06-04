"use client";

import { cx } from "class-variance-authority";
import GradientImage from "../../ui/GradientImage";
import Container from "../../ui/Container";
import CardWhyChoose from "@/components/homepage/CardWhyChoose";
import { useState } from "react";

export default function TravelTips() {
	const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
	const datas = [
		{
			title: "Getting There",
			description: "Sebangau is accessible by road from Palangkaraya, with guided tours available for deeper exploration.",
			cover: "/images/people/family.png",
		},
		{
			title: "Best Time to Visit",
			description: "Sebangau is accessible by road from Palangkaraya, with guided tours available for deeper exploration.",
			cover: "/images/people/family2.png",
		},
		{
			title: "Conservation Etiquette",
			description: "Sebangau is accessible by road from Palangkaraya, with guided tours available for deeper exploration.",
			cover: "/images/wildlife/orangutan6.png",
		},
	];
	return (
		<Container className="space-y-20">
			<div className="space-y-4 lg:flex lg:items-end lg:gap-6">
				<p className={cx("font-prata text-subtitle")}>Travel Tips for Visiting Sebangau National Park</p>
				<p className="text-description">Planning a visit to Sebangau? Here are some essential tips to enhance your adventure in this beautiful park. By following these tips, you’ll help protect Sebangau’s delicate ecosystem while having a memorable experience </p>
			</div>
			<div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
				{datas.map((data, index) => {
					const colSpan = expandedIndex === null ? "lg:col-span-4" : expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";

					return <CardWhyChoose colSpan={colSpan} key={index} item={data} isOpen={expandedIndex === index} onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))} height="h-full" />;
				})}
			</div>
		</Container>
	);
}

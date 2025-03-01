"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import CombinationCard from "./CombinationCard";
import { tourData } from "@/constants/tour";

export default function Combination() {
	const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

	const data = [
		{
			type: "8D7N",
			head: "Tanjung Puting & Palangkaraya Expedition",
			desc: "A comprehensive exploration that spans both the renowned Tanjung Puting National Park and the vibrant cultural center of Palangkaraya.",
			img: "/images/boats/exterior/boat.png",
		},
		{
			type: "7D6N",
			head: "Kahayan River: Jungle Cruise & Dayak Longhouse Adventure",
			desc: "Experience the wild beauty of the Kahayan River and the rich cultural heritage of the Dayak people, staying in traditional longhouses along the way.",
			img: "/images/dayak-longhouse.png",
		},
		{
			type: "6D5N",
			head: "Orangutan & Nature Odyssey: Tanjung Puting & Palangkaraya",
			desc: "A perfect balance of nature and culture, this journey offers close encounters with orangutans and an immersive experience in Palangkaraya.",
			img: "/images/wildlife/orangutan2.png",
		},
		{
			type: "3D2N",
			head: "Dayak Heritage & Malahoi Longhouse Cultural Journey ",
			desc: "Step into the world of the Dayak tribes, experiencing their warm hospitality and learning about their deep-rooted traditions.",
			img: "/images/people/woman5.png",
		},
		{
			type: "1D",
			head: "Sebangau Explorer: The Koran River Adventure",
			desc: "A day adventure exploring the beautiful Koran River within Sebangau National Park, ideal for a quick but enriching escape.",
			img: "/images/boats/exterior/boat2.png",
		},
		{
			type: "14D13N",
			head: "Ultimate Adventure: Seatrek Bali & Wow Borneo",
			desc: "An extraordinary two-week journey that combines the serene rivers of Borneo with the vibrant island of Bali, for those seeking the ultimate Indonesian adventure.",
			img: "/images/people/man2.png",
		},
	];
	return (
		<Container>
			<div className="space-y-4 lg:flex lg:flex-col lg:text-center lg:items-end lg:gap-6 lg:w-7/12 lg:mx-auto">
				<div className="space-y-4 w-full">
					<p className={cx("uppercase font-bold tracking-widest mb-10 w-full")}>Combination Tours</p>
					<p className={cx("font-prata text-subtitle lg:w-10/12 lg:mx-auto")}>Discover Our Combination Tours</p>
				</div>
				<p className="text-description">For the intrepid traveler seeking a deeper exploration, our Combination Tours offer extended journeys in partnership with other leading tour providers in Indonesia. These curated adventures blend the best of Borneo with other iconic destinations, creating unforgettable multi-day experiences.</p>
			</div>
			<div className={cx("pt-20 grid gap-4 transition-all duration-500 grid-cols-1 lg:grid-cols-12")}>
				{tourData.map((item, index) => {
					const currentRow = Math.floor(index / 3);
					const expandedRow = expandedIndex !== null ? Math.floor(expandedIndex / 3) : null;

					let colSpan = "";
					if (expandedIndex === null || expandedRow !== currentRow) {
						colSpan = "lg:col-span-4";
					} else {
						colSpan = expandedIndex === index ? "lg:col-span-6" : "lg:col-span-3";
					}

					return <CombinationCard colSpan={colSpan} key={index} item={item} isOpen={expandedIndex === index} onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))} height="h-full" />;
				})}
			</div>
		</Container>
	);
}

"use client";
import React from "react";
import Button from "../button";
import Container from "../ui/Container";
import ExperienceCard from "./ExperienceCard";
import { useRouter } from "next/navigation";

const Experience = () => {
	const router = useRouter();
	const data = [
		{
			img: "/home/experience_central_1.webp",
			title: "Central Borneo",
			description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...",
			url: "/",
		},
		{
			img: "/home/experience_pangkalanbun_2.webp",
			title: "Pangkalan Bun",
			description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...",
			url: "/",
		},
		{
			img: "/home/experience_dayak_culture_3.webp",
			title: "Dayak Culture",
			description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...",
			url: "/",
		},
	];

	return (
		<Container className="w-full py-2 grid grid-cols-1 gap-12 xl:grid-cols-2">
			<div className="flex flex-col gap-4 w-full xl:w-[80%] justify-center items-center text-center sm:text-left sm:items-start xl:h-full xl:gap-10">
				<span className="text-sm font-bold tracking-wider w-full">EXPLORE</span>
				<h2 className="font-prata w-full text-subtitle leading-[3rem]">Experiences Borneo</h2>
				<p className="text-description text-[#372817]">From close encounters with orangutans to exploring the cultural heritage of the Dayak people, our experiences are crafted to inspire, educate, and connect you to the heart of Borneo.</p>
				<Button onClick={() => router.push("/explore")} className="text-16-d hover:shadow-lg hover:scale-105 transition w-fit">
					See All Experiences
				</Button>
			</div>
			<div className="flex flex-col gap-8">
				{data.map((item, i) => (
					<ExperienceCard item={item} key={i} />
				))}
			</div>
		</Container>
	);
};

export default Experience;

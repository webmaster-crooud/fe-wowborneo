import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceCard = ({ item }: { item: { img: string; title: string; description: string } }) => {
	return (
		// <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-center lg:items-center">
		<div className="w-full grid grid-cols-2">
			<div className="sm:w-[80%] xl:w-full">
				<Image src={item.img} alt="" width={1000} height={1000} className="w-full rounded-lg" />
			</div>
			<div className="flex flex-col gap-3 justify-stretch items-stretch sm:gap-6 lg:p-4 xl:gap-5">
				<h4 className="text-lg font-bold xl:text-xl">{item.title}</h4>
				<p className="text-description text-sm">{item.description}</p>
				<Link href={"/"}>
					<Image src={"/assets/arrow.svg"} alt="arrow icon" width={20} height={20} className="w-16" />
				</Link>
			</div>
		</div>
	);
};

export default ExperienceCard;

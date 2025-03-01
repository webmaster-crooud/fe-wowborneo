import { IHighlightContent } from "@/types/cruise";
import Image from "next/image";
import React from "react";

const AdventureCard = ({ data }: { data: IHighlightContent }) => {
	return (
		<div className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg">
			<div className="absolute inset-0 bg-black/40 z-10"></div>
			<Image src={data.cover || "/"} alt="picture of orang utan" className="w-full object-cover h-full aspect-square" height={1000} width={1000} />
			<div className="absolute bottom-0 p-4 text-white z-20 space-y-3 xl:p-8">
				<p className="uppercase text-2xl font-medium font-prata">{data.title}</p>
				<p className="text-sm">{data.description}</p>
			</div>
		</div>
	);
};

export default AdventureCard;

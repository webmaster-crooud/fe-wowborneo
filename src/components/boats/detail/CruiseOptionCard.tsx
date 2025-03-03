import Image from "next/image";
import React from "react";

const CruiseOptionCard = ({ name, days, night, price, img }: { name: string; days: number; night: number; price: string; img: string }) => {
	return (
		<div className="space-y-3">
			<div className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg">
				<div className="absolute inset-0 bg-black/40 z-10"></div>
				<Image src={img} alt="trip picture" className="w-full object-cover h-full aspect-square" height={1000} width={1000} />
				<div className="absolute top-0 p-4 w-full h-full text-white z-20 space-y-3 flex flex-col justify-between">
					<p className="font-medium uppercase">{`${days} Days / ${night} Night`}</p>
					<div className="space-y-4">
						<p className="uppercase text-xs font-medium">Start From</p>
						<p className="text-2xl font-prata">USD {price}</p>
					</div>
				</div>
			</div>
			<p className="text-sm font-semibold">{name}</p>
		</div>
	);
};

export default CruiseOptionCard;

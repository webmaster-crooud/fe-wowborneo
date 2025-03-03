import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import React from "react";
import CruiseOptionCard from "./CruiseOptionCard";
import { ICruiseBoat } from "@/types/boat";
import { cruiseData } from "@/constants/cruise";

const CruiseOption = ({ cruise, departure, description }: { departure: string; description: string; cruise?: ICruiseBoat[] }) => {
	return (
		<Container>
			<div className="flex flex-col gap-6">
				<div className={cx("flex gap-6 flex-col md:text-center lg:flex-row lg:text-left lg:items-end lg:gap-20")}>
					<div className={cx("w-full space-y-8")}>
						<p className="uppercase font-bold tracking-widest">Cruise OPTION</p>
						<p className={cx("font-prata text-subtitle")}>Scheduled Departures From {departure}</p>
					</div>
					<p className="text-description">{description}</p>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{cruise?.map((data, i) => (
						<CruiseOptionCard key={i} name={data.title} days={data.days} night={data.night} price={data.price} img={data.cover} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default CruiseOption;

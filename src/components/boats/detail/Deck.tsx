import Button from "@/components/button";
import Container from "@/components/ui/Container";
import { IBoat } from "@/types/boat";
import Image from "next/image";
import React from "react";

const Deck = ({ data }: { data: IBoat["deck"] }) => {
	return (
		<Container className="space-y-6 pt-1">
			<div>
				<Image src={data.image} alt="ship image" width={1000} height={1000} className="w-full h-full" />
			</div>
			<div className="flex w-full flex-col gap-6 sm:text-center lg:items-center">
				<h6 className={`text-subtitle font-prata`}>{data.title}</h6>
				<p className="text-description lg:w-[70%]">{data.description}</p>
				<Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto">Start Your Journey with Rahai’i Pangun</Button>
			</div>
		</Container>
	);
};

export default Deck;

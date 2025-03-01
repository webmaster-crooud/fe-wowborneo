import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import Button from "../button";

export default function ReadyToChoose() {
	return (
		<Container>
			<div className={cx("text-left flex flex-col gap-32-d justify-center items-center lg:text-center")}>
				<p className={cx("font-prata text-subtitle w-full")}>An Ready to Choose Your Adventure?</p>
				<p className="text-description lg:w-[60%]">Each journey with Wow Borneo is designed to bring you closer to the heart of Kalimantan. Take the first step in discovering this hidden paradise by choosing a cruise that resonates with your spirit of adventure. Ready to set sail?</p>
				<Button>Explore All Cruises</Button>
			</div>
		</Container>
	);
}

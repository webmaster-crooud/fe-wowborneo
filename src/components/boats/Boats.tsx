"use client";

import React, { useEffect } from "react";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Hero from "./Hero";
import Divider from "../ui/Divider";
import ExploreBoats from "./ExploreBoats";
import OurBenefit from "./OurBenefit";
import BookYourAdventure from "./BookYourAdventure";
import BoatList from "./BoatList";
import { getAllBoats } from "@/utils/BoatHelper";
import { BOAT } from "@/constants/boat";

export default function Boats() {
	const state = toggleNavbar();

	const navbarColors = [0, 1];

	const updateNavbarColor = (color: number) => {
		state.updateNavbarColorNew(color);
	};

	useVariantsOnScroll(navbarColors, ".fullscreen", updateNavbarColor);

	useEffect(() => {
		state.updateNavbarColorNew(0);
	}, []);
	return (
		<>
			<Navbar />
			<Hero />
			{BOAT.map((boat, i) => (
				<BoatList key={i} name={boat.name} slug={boat.slug} cover={boat.cover} description={boat.description} facilities={boat.facilities} index={i} />
			))}
			<Divider />
			<ExploreBoats />
			<OurBenefit />
			<Divider />
			<BookYourAdventure />
			<Footer />
		</>
	);
}

"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import { toggleNavbar } from "@/stores/navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Introduction from "./Introduction";
import Divider from "../ui/Divider";
import FeaturedCruises from "./FeaturedCruises";
import BoatsOverview from "./BoatsOverview";
import Resource from "./Resource";
import Testimonial from "./Testimonial";
import Experience from "./Experience";
import { HomePageResponse } from "@/types/home";
// export default function Home({ data }: { data: HomePageResponse }) {
export default function Home() {
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
			<Introduction />
			<Divider />
			<FeaturedCruises />
			{/* <FeaturedCruises cruise={data.cruise} /> */}
			<Divider />
			<BoatsOverview />
			{/* <BoatsOverview boat={data.boat} /> */}
			<Experience />
			<Resource />
			<Divider />
			<Testimonial />
			<Footer />
		</>
	);
}

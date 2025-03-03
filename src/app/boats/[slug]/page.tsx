"use client";
import About from "@/components/boats/detail/About";
import CruiseOption from "@/components/boats/detail/CruiseOption";
import Experience from "@/components/boats/detail/Deck";
import OnBoardExperience from "@/components/boats/detail/Experience";
import Hero from "@/components/boats/detail/Hero";
import Divider from "@/components/ui/Divider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import useVariantsOnScroll from "@/hooks/useVariantsOnScroll";
import { toggleNavbar } from "@/stores/navbar";
import { getBoatBySlug } from "@/utils/BoatHelper";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DetailBoat() {
	const state = toggleNavbar();

	const navbarColors = [0, 1];

	const updateNavbarColor = (color: number) => {
		state.updateNavbarColorNew(color);
	};

	useVariantsOnScroll(navbarColors, ".fullscreen", updateNavbarColor);

	useEffect(() => {
		state.updateNavbarColorNew(0);
	}, []);
	const { slug } = useParams();
	const boat = getBoatBySlug(slug as string);
	return (
		<>
			<Navbar />
			<Hero name={boat?.name || ""} title={boat?.title || ""} description={boat?.description || ""} cover={boat?.cover || "/"} />
			<About abouts={boat?.abouts || []} />
			<OnBoardExperience data={boat?.experiences || []} />
			<Divider />
			<CruiseOption cruise={boat?.cruise.cruises || []} departure={boat?.cruise.departure || ""} description={boat?.cruise.text || ""} />
			<Experience data={boat?.deck || { image: "", description: "", title: "" }} />
			<Footer />
		</>
	);
}

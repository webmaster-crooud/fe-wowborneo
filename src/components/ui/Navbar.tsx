"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Button from "../button";
import { cx } from "class-variance-authority";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { toggleNavbar } from "@/stores/navbar";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import GradientImage from "./GradientImage";
import Link from "next/link";
import Star from "./Star";
import Image from "next/image";
import { cruiseData } from "@/constants/cruise";
import { BOAT } from "@/constants/boat";
import { tourData } from "@/constants/tour";
import { HomePageResponse } from "@/types/home";
import { useAtom } from "jotai";
import { navbarAtom } from "@/stores/nav";

interface ServiceCategoryName {
	id: string;
	name: string;
}

// interface ServiceCategoryNameResponse {
// 	data: {
// 		items: ServiceCategoryName[];
// 	};
// }

export default function Navbar() {
	const [{ data }] = useAtom(navbarAtom);
	const state = toggleNavbar();
	const container = useRef<HTMLDivElement>(null);
	const [toggle, setToggle] = useState<boolean>(false);
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);
	const { contextSafe } = useGSAP({ scope: container });
	const lenis = useLenis();

	useEffect(() => {
		gsap.to(".navbar", {
			opacity: toggleMenu ? 0 : 1,
			display: toggleMenu ? "hidden" : "flex",
		});

		gsap.to(".container-menu-navbar", {
			x: toggleMenu ? 0 : "-100%",
			duration: 0.4,
			ease: "power1.inOut",
		});
	}, [toggleMenu]);

	useGSAP(() => {
		gsap.to(".navbar-link", {
			ease: "power1.inOut",
			color: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
			borderColor: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
		});
		gsap.to(".arrow-down", {
			ease: "power1.inOut",
			stroke: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
		});
	}, [state.navbarColorNew2]);

	const pathname = usePathname();

	// const clickToggle = contextSafe(() => {
	// 	setToggle(!toggle);

	// 	gsap.to(".details-our-services", {
	// 		opacity: !toggle ? 1 : 0,
	// 		display: !toggle ? "block" : "hidden",
	// 		duration: 0.4,
	// 		ease: "power1.inOut",
	// 	});
	// });

	const clickToggleMenu = contextSafe(() => {
		setToggleMenu(!toggleMenu);

		if (!toggleMenu) {
			state.updateNavbarColorNew2(1);
			lenis?.stop();
		} else {
			lenis?.start();
			state.updateNavbarColorNew2(state.navbarColorNew);
		}
	});

	// const { data, error, isLoading } = useQuery<ServiceCategoryNameResponse>({
	// 	queryKey: ["navbarOurServices"],
	// 	queryFn: () => fetchData("service-category/show-all"),
	// });
	const cruiseSubmenu = data?.cruise.map((cruise) => ({
		title: cruise.title || "",
		slug: `cruise/${cruise.slug}`,
	}));

	const boatsSubmenu = data?.boat.map((boat) => ({
		title: boat.name || "",
		slug: `boats/${boat.slug}`,
	}));

	// const tourSubmenu = tourData.map((tour) => ({
	// 	title: tour.title || "",
	// 	slug: `tour/${tour.slug}`,
	// }));

	const navbarLinks = [
		{
			label: "Home",
			href: "/",
			className: "navbar-link",
		},
		{
			label: "Cruise",
			href: "/cruise",
			className: "navbar-link relative group",
			submenu: cruiseSubmenu,
		},
		{
			label: "Boats",
			href: "/boats",
			className: "navbar-link relative group",
			submenu: boatsSubmenu,
		},
		// {
		// 	label: "Tour",
		// 	href: "/cruise#tours",
		// 	className: "navbar-link relative group",
		// 	submenu: tourSubmenu,
		// },
		{
			label: "Explore",
			href: "/explore",
			className: "navbar-link",
		},
	];

	// State untuk submenu hover
	const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

	return (
		<nav ref={container} className="h-0 relative top-0 z-40 w-full">
			<Container className={cx("relative z-20 flex flex-row justify-between items-center landscape:min-lg:py-48-d w-full text-white bg-black/20", "h-20 py-2 md:h-28 border-b border-white", "navbar")}>
				<div className={cx("text-secondary cursor-pointer flex md:hidden gap-8", "navbar-link")} onClick={clickToggleMenu}>
					<div className={cx("flex flex-col h-[17px] justify-between")}>
						<div className={cx("w-[19px] bg-white h-[1px]")}></div>
						<div className={cx("w-[19px] bg-white h-[1px]")}></div>
						<div className={cx("w-[19px] bg-white h-[1px]")}></div>
					</div>
					<div className={cx("w-[1px] bg-white h-[20px]")}></div>
				</div>
				<div className={cx("md:flex flex-row gap-32-d text-18-d items-center", "hidden")}>
					<div className={cx("flex flex-row gap-5 text-sm lg:gap-3 items-center xl:text-base xl:gap-8")}>
						<div className={cx("text-secondary cursor-pointer md:flex hidden gap-8", "navbar-link")} onClick={clickToggleMenu}>
							<div className={cx("flex flex-col h-[17px] justify-between")}>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
							</div>
							<div className={cx("w-[1px] bg-white h-[20px]")}></div>
						</div>
						{navbarLinks.map((link, index) => (
							<div key={index} onMouseEnter={() => link.submenu && setHoveredSubmenu(link.label)} onMouseLeave={() => setHoveredSubmenu(null)}>
								<TransitionLink href={link.href} className={cx(link.className)}>
									{link.label}
								</TransitionLink>
								{link.submenu && <Submenu label={link.label} items={link.submenu} isActive={hoveredSubmenu === link.label} />}
							</div>
						))}
					</div>
				</div>
				<Link href={"/"} className="absolute left-1/2 -translate-x-1/2">
					<div className={cx("hidden lg:block w-40 h-20 mx-auto")}>
						<GradientImage src="/images/logo.png" className="object-cover" />
					</div>
				</Link>

				<TransitionLink href={`${process.env.NEXT_PUBLIC_TRANSACTION}`} opacity={false}>
					<Button rounded="rounded-full" className="text-sm bg-white/30 backdrop-blur-md hover:bg-white/50">
						Book your cruise
					</Button>
				</TransitionLink>
			</Container>

			<div className={cx("z-40 w-full md:w-[50%] xl:w-[40%] h-screen bg-[#F1E6DD] absolute top-0 left-0", "container-menu-navbar")}>
				<div className="h-full w-full z-50 p-6 flex flex-col justify-end sm:p-10">
					<p className="text-xl cursor-pointer" onClick={clickToggleMenu}>
						X
					</p>

					<p className="text-xs uppercase font-extrabold tracking-widest my-10">Menu</p>
					<div className="flex flex-col font-medium text-2xl font-prata gap-1 sm:text-5xl w-[60%]">
						<p>The Best Boat On The River</p>
					</div>

					<div className="grid grid-cols-2 gap-4 py-8 border-y border-black my-5">
						<div className="space-y-4 text-xs sm:text-sm">
							<p className="uppercase font-bold">About</p>
							<div className="flex flex-col gap-2">
								<Link href={"/story"} className="capitalize font-medium">
									Our Story
								</Link>
								<Link href={"/mission"} className="capitalize font-medium">
									Our Misson Statement
								</Link>
								<Link href={"/sustainability"} className="capitalize font-medium">
									Sustainability Statement
								</Link>
							</div>
						</div>
						<div className="space-y-4 text-xs sm:text-sm">
							<p className="uppercase font-bold">LOGIN</p>
							<div className="flex flex-col gap-2">
								<Link href={`${process.env.NEXT_PULIC_AUTH}`} className="capitalize font-medium">
									Cruise Check-in
								</Link>
								{/* <Link href={"/"} className="capitalize font-medium">
									Agent Portal
								</Link> */}
							</div>
						</div>

						<div className="grid grid-cols-2 col-span-2 gap-1 md:hidden">
							<p className="uppercase font-bold text-xs">Menu</p>
							{navbarLinks.map((link, index) => (
								<div key={index} className="relative text-sm" onMouseEnter={() => link.submenu && setHoveredSubmenu(link.label)} onMouseLeave={() => setHoveredSubmenu(null)}>
									<TransitionLink href={link.href} className={cx(link.className)}>
										{link.label}
									</TransitionLink>
								</div>
							))}
						</div>
					</div>

					<div className={cx("w-full flex flex-col items-start justify-start")}>
						<div className={cx("w-[263px] h-[35px] relative")}>
							<Image alt="image" fill src={"/images/icons/stars.png"} />
						</div>
						<p className={cx("mt-40-d")}>TripAdvisor Traveller's Choise Award Winner 2024</p>
					</div>
				</div>
			</div>
		</nav>
	);
}

interface SubmenuProps {
	items: Array<{ title: string; slug: string }>;
	isActive: boolean;
	label: string;
}

const Submenu = ({ items, isActive, label }: SubmenuProps) => {
	return (
		<div className={cx("absolute top-16 left-0 right-0 p-10 bg-[#FAEFE6] rounded-xl shadow-lg w-10/12 mx-auto transition-opacity duration-200", isActive ? "opacity-100 visible" : "opacity-0 invisible")}>
			<h5 className="text-4xl font-prata text-black">{label}</h5>
			<div className="grid grid-cols-3 gap-x-5 gap-y-0 mt-10 pt-10 border-t border-black">
				{items.map((item, index) => (
					<Link key={index} href={`/${item.slug}`} className="block px-4 py-1 text-gray-800 text-sm">
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Button from "../button";
import { cx } from "class-variance-authority";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { toggleNavbar } from "@/stores/navbar";
import gsap from "gsap";
import Image from "next/image";
import ArrowDown from "./ArrowDown";
import { useLenis } from "@studio-freight/react-lenis";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import GradientImage from "./GradientImage";
import Link from "next/link";

interface ServiceCategoryName {
	id: string;
	name: string;
}

interface ServiceCategoryNameResponse {
	data: {
		items: ServiceCategoryName[];
	};
}

export default function Navbar() {
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

	const menuItems = [
		{ label: "Message", href: "/our-services/message" },
		{ label: "Beauty", href: "/our-services/beauty" },
		{ label: "Woman Treatments", href: "/our-services/woman-treatments" },
		{ label: "Spa-Packages", href: "/our-services/spa-packages" },
	];

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

	const clickToggle = contextSafe(() => {
		setToggle(!toggle);

		gsap.to(".details-our-services", {
			opacity: !toggle ? 1 : 0,
			display: !toggle ? "block" : "hidden",
			duration: 0.4,
			ease: "power1.inOut",
		});
	});

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

	const { data, error, isLoading } = useQuery<ServiceCategoryNameResponse>({
		queryKey: ["navbarOurServices"],
		queryFn: () => fetchData("service-category/show-all"),
	});

	const navbarLinks = [
		{
			label: "Home",
			href: "/",
			className: "navbar-link",
		},
		{
			label: "River Cruise",
			href: "/river-cruise",
			className: "navbar-link",
		},
		{
			label: "Boats",
			href: "/boats",
			className: "navbar-link",
		},
		{
			label: "Explore",
			href: "/explore",
			className: "navbar-link",
		},
		{
			label: "Resources",
			href: "/explore",
			className: "navbar-link",
		},
	];

	return (
		<nav ref={container} className="h-1 relative top-0 z-40 w-full">
			<Container className={cx("relative z-20 flex flex-row justify-between items-center landscape:min-lg:py-48-d w-full text-white bg-white/5 backdrop-blur-sm", "h-12 py-2 md:h-16", "navbar")}>
				<div className={cx("md:flex flex-row gap-32-d text-18-d items-center", "hidden")}>
					<div className={cx("flex flex-row gap-5 text-sm lg:gap-3  items-center xl:text-base xl:gap-8")}>
						<div className={cx("text-secondary cursor-pointer flex gap-8", "navbar-link")} onClick={clickToggleMenu}>
							<div className={cx("flex flex-col h-[17px] justify-between")}>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
								<div className={cx("w-[19px] bg-white h-[1px]")}></div>
							</div>
							<div className={cx("w-[1px] bg-white h-[20px]")}></div>
						</div>
						{navbarLinks.map((link, index) => (
							<TransitionLink key={index} href={link.href} className={cx(link.className)}>
								{link.label}
							</TransitionLink>
						))}
					</div>
				</div>
				<Link href={"/"} className="absolute left-1/2 -translate-x-1/2">
					<div className={cx("hidden lg:block w-28 h-12")}>
						<GradientImage src="/images/logo.png" />
					</div>
				</Link>

				<TransitionLink href="/reservation" opacity={false}>
					<Button rounded="rounded-full" className="text-sm bg-white/30 backdrop-blur-md hover:bg-white/50">
						Book your cruise
					</Button>
				</TransitionLink>
			</Container>

			<div className={cx("z-40 w-full md:w-[50%] xl:w-[40%] h-screen bg-[#F1E6DD] absolute top-0 left-0", "container-menu-navbar")}>
				<div className="h-full w-full z-50 p-6 flex flex-col justify-between sm:p-10">
					<p className="font-bold text-2xl cursor-pointer" onClick={clickToggleMenu}>
						X
					</p>
					<div className="space-y-5">
						<p className="text-[#563b28b3] text-xs sm:text-xl">Menu</p>
						<div className="flex flex-col font-medium text-2xl font-prata gap-1 sm:text-5xl  w-52">
							<p>Discover Borneo's Hidden Heart</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 py-8">
						<div className="space-y-4 text-xs sm:text-sm">
							<p className="text-[#563b28b3]">BOATS</p>
							<div className="flex flex-col gap-2 text-[#563b28]">
								<Link href={"/"}>Rahai'i Pangun</Link>
								<Link href={"/"}>Kumai</Link>
								<Link href={"/"}>Sekonyer</Link>
							</div>
						</div>
						<div className="space-y-4 text-xs sm:text-sm">
							<p className="text-[#563b28b3]">DISCOVER</p>
							<div className="flex flex-col gap-2 text-[#563b28]">
								<Link href={"/"}>Orangutan Village</Link>
								<Link href={"/"}>Tanjung Puting Rainforest</Link>
								<Link href={"/"}>Katingan River</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

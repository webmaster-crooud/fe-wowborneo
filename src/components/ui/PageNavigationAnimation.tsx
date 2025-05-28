"use client";
import { useGSAP } from "@gsap/react";
import { cx } from "class-variance-authority";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const heroImages: { [key: string]: string } = {
	"/": "/home/hero.webp",
	"/explore": "/images/people/crowd.png",
	"/explore/detail": "/images/nature/river.png",
	"/boats": "/images/nature/river7.png",
	"/boats/detail": "/images/nature/river2.png",
	"/cruise": "/cruise/hero.webp",
	// "/cruise/:slug": "/images/nature/sea.png",
};

const PageNavigationAnimation = () => {
	const pathname = usePathname();
	const textContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.to(textContainerRef.current, {
			y: "-7rem",
			duration: 1,
			delay: 0.2,
			ease: "power2.out",
		});

		const tl = gsap.timeline();

		tl.from(".image-container", {
			y: "24rem",
			display: "block",
			ease: "power2.out",
		})
			.to(".image-container", {
				y: 0,
				display: "block",
				ease: "power2.out",
			})
			.to(".image-container", {
				width: "100%",
				height: "100%",
				ease: "power2.out",
			})
			.to(".initial-banner", {
				zIndex: -50,
				opacity: 0,
				ease: "power2.out",
			})
			.duration(5)
			.delay(0.5);
	}, []);

	useGSAP(() => {
		gsap.from(".page-banner", {
			display: "block",
		});

		const tl = gsap.timeline();

		tl.from(".page-banner", {
			y: 0,
			display: "block",
		})
			.to(".page-banner", {
				y: "-100vh",
			})
			.duration(1)
			.delay(0.5);
	}, [pathname]);
	return (
		<>
			<div className={cx("fixed z-[60] top-0 w-full h-screen bg-white max-h-screen initial-banner")}>
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-2" ref={textContainerRef}>
					<h2 className="font-semibold text-2xl font-prata">Wow Borneo</h2>
				</div>
				<div className="absolute inset-0 flex items-end justify-center">
					<div className="relative image-container h-96 w-96 hidden">
						<div className="w-full h-full bg-black opacity-30 z-10 absolute" />
						<Image src={heroImages[pathname] || "/images/nature/sea.png"} alt="" width={100} height={100} className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
			<div className={cx("fixed z-50 top-0 w-full h-screen bg-white max-h-screen page-banner hidden")} />
		</>
	);
};

export default PageNavigationAnimation;

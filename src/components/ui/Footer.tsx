"use client";

import { cx } from "class-variance-authority";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import GradientImage from "./GradientImage";
import Button from "../button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { navbarAtom } from "@/stores/nav";

export default function Footer() {
	const [{ data }] = useAtom(navbarAtom);
	const divRef = useRef<HTMLDivElement>(null);
	const [visibleHeight, setVisibleHeight] = useState(0);
	const router = useRouter();
	useEffect(() => {
		const updateHeight = () => {
			if (divRef.current) {
				const rect = divRef.current.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const visible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
				setVisibleHeight(visible);
			}
		};

		updateHeight();
		window.addEventListener("scroll", updateHeight);
		window.addEventListener("resize", updateHeight);

		return () => {
			window.removeEventListener("scroll", updateHeight);
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	return (
		<div className={cx("border border-t-black")}>
			<div className={cx("w-full grid grid-cols-1 lg:grid-cols-3 lg:flex-row border-b")}>
				<div className={cx("border-r-black lg:border")}>
					<Container className={cx("flex flex-row py-40-d")}>
						<div className={cx("")}>
							<p>MENU</p>
							<p className={cx("text-56-d font-prata lg:w-[21.25vw] mt-40-d")}>Borneo River Cruise</p>
						</div>
					</Container>
				</div>
				<Container className={cx("grid grid-cols-1 lg:col-span-2 col-span-3 sm:grid-cols-2 md:grid-cols-3 gap-56-d lg:gap-32-d py-80-d w-full")}>
					<div className={cx("w-full")}>
						<p className={cx("font-medium")}>INFO</p>
						<div className={cx("mt-32-d font-semibold flex flex-col gap-16-d")}>
							<Link href={"/story"}>Our Story</Link>
							<Link href={"/mission"}>Our Mission Stament</Link>
							<Link href={"/sustainability"}>Sustainability Statement</Link>
							{/* <p>Why Wowborneo</p> */}
							<Link href={"/privacy-policy"}>Privacy Policy</Link>
							{/* <p>Term and Condition</p> */}
						</div>
					</div>
					<div className={cx("w-full")}>
						<p className={cx("font-medium")}>PLAN YOUR CRUISE</p>
						<div className={cx("mt-32-d font-semibold flex flex-col gap-16-d")}>
							<>
								{/* List cruise */}
								{data?.cruise.slice(0, 10).map((c) => (
									<Link href={`/cruise/${c.slug}`} key={c.slug}>
										{c.title}
									</Link>
								))}

								<Link href={""}>Explore All</Link>
							</>
						</div>
					</div>
					<div className={cx("w-full lg:ml-80-d")}>
						<p className={cx("font-medium")}>LINKS</p>
						<div className={cx("mt-32-d font-semibold flex flex-col gap-16-d")}>
							<p>Awards</p>
							<p>Media Galery</p>
							<p>Philosophy</p>
							<p>FAQ's</p>
						</div>
					</div>
				</Container>
				<div className={cx("border-t-black border-r-black lg:border w-full lg:col-span-1 col-span-3")}>
					<Container className={cx("py-1 flex flex-row w-full sm:justify-center lg:py-80-d ,mx-auto text-center")}>
						<div className={cx("w-full flex flex-col items-center justify-center mx-auto text-center")}>
							<div className={cx("w-[250.14px] h-[35px] relative")}>
								<Image alt="image" fill src={"/images/icons/stars.png"} />
							</div>
							<Link href={"https://www.tripadvisor.com/Attraction_Review-g303951-d3809146-Reviews-Wow_Borneo-Palangkaraya_Central_Kalimantan_Kalimantan.html"} target="_blank" className={cx("mt-40-d text-center")}>
								TripAdvisor Traveller's Choise Award Winner 2024
							</Link>
						</div>
					</Container>
				</div>
				<Container className={cx("py-8 w-full sm:py-1 lg:border lg:border-r-black lg:border-t-black lg:py-80-d lg:col-span-1 col-span-3")}>
					<div className={cx("h-full w-full sm:flex sm:justify-center lg:justify-end")}>
						<div className={cx("flex flex-row w-full gap-6 sm:justify-center sm:flex-col xl:flex-row")}>
							<Link href={"https://www.instagram.com/wowborneo/"} target="_blank" className={cx("flex flex-row gap-16-d xl:items-end")}>
								<div className={cx("flex items-center")}>
									<Image width={15} height={15} alt="image" src={"/images/icons/socialMedia/instagram.png"} />
								</div>
								<p>Instagram</p>
							</Link>
							<Link href={"https://www.youtube.com/channel/UCrqgsD90fss2NyjNiAAEdpA"} target="_blank" className={cx("flex flex-row gap-16-d xl:items-end")}>
								<div className={cx("flex items-center")}>
									<Image width={15} height={15} alt="image" src={"/images/icons/socialMedia/youtube.png"} />
								</div>
								<p>Youtube</p>
							</Link>
							<Link href={"https://id.linkedin.com/company/wow-borneo"} target="_blank" className={cx("flex flex-row gap-16-d xl:items-end")}>
								<div className={cx("flex items-center")}>
									<Image width={15} height={15} alt="image" src={"/images/icons/socialMedia/linkedin.png"} />
								</div>
								<p>Linkedin</p>
							</Link>
						</div>
					</div>
				</Container>
				<Container className={cx("py-4 lg:py-80-d lg:col-span-1 col-span-3 lg:border-t lg:border-t-black")}>
					<div className={cx("h-full relative")}>
						<div className={cx("flex flex-col absolute bottom-0 w-full justify-center xl:justify-start")}>
							Copyright © 2024. All rights reserved.{" "}
							<div>
								Designed and developed by{" "}
								<Link href={"https://crooud.com"} target="_blank" className="font-bold">
									Crooud
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div ref={divRef} className={cx("h-[12.5vw] w-full relative border border-t-black z-30")}>
				<div className="relative w-full -z-10 flex items-center justify-center bg-transparent" style={{ height: visibleHeight }}>
					<Button onClick={() => router.push(`${process.env.NEXT_PUBLIC_TRANSACTION}`)} className="absolute z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer">
						Book your cruise
					</Button>
					<GradientImage src="/images/dayak-ornamen.png" className="opacity-15 absolute z-0 top-0" />
				</div>
			</div>
		</div>
	);
}

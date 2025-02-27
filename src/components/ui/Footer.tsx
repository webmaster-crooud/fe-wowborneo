import { cx } from "class-variance-authority";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import GradientImage from "./GradientImage";
import Button from "../button";

export default function Footer() {
	return (
		<div className={cx("border border-t-black")}>
			<div className={cx("w-full flex flex-col lg:flex-row border-b")}>
				<div className={cx("lg:w-[30%] border-r-black lg:border")}>
					<Container className={cx("flex flex-row py-40-d")}>
						<div className={cx("")}>
							<p>MENU</p>
							<p className={cx("text-56-d font-prata lg:w-[21.25vw] mt-40-d")}>Borneo River Cruise</p>
						</div>
					</Container>
				</div>
				<Container className={cx("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-56-d lg:gap-32-d lg:w-[70%] py-80-d")}>
					<div className={cx("w-full")}>
						<p className={cx("font-medium")}>INFO</p>
						<div className={cx("mt-32-d font-semibold flex flex-col gap-16-d")}>
							<p>Our Story</p>
							<p>Our Mission Stament</p>
							<p>Sustainability Statement</p>
							<p>Why Wowborneo</p>
							<p>Privacy Policy</p>
							<p>Term and Condition</p>
						</div>
					</div>
					<div className={cx("w-full")}>
						<p className={cx("font-medium")}>PLAN YOUR CRUISE</p>
						<div className={cx("mt-32-d font-semibold flex flex-col gap-16-d")}>
							<p>Orangutan & Daya Village</p>
							<p>Orangutan Tours in Tanjung Puting</p>
							<p>Katingan River & Sebangau National Park</p>
							<p>Combination Tours Cruise & Tours</p>
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
			</div>
			<div className={cx("w-full flex flex-col py-8 sm:py-16 sm:gap-14 lg:flex-row lg:border lg:py-0 lg:border-t-black")}>
				<div className="flex flex-col sm:flex-row lg:contents">
					<div className={cx("lg:w-[30%] lg:border-r-black lg:border xl:w-[35%]")}>
						<Container className={cx("py-1 flex flex-row w-full sm:justify-center lg:py-80-d")}>
							<div className={cx("w-full flex flex-col items-center justify-center")}>
								<div className={cx("w-[263px] h-[35px] relative")}>
									<Image alt="image" fill src={"/images/icons/stars.png"} />
								</div>
								<p className={cx("mt-40-d")}>TripAdvisor Traveller's Choise Award Winner 2024</p>
							</div>
						</Container>
					</div>
					<Container className={cx("py-8 w-full sm:py-1 lg:w-[35%] lg:border-r lg:border-r-black lg:py-80-d")}>
						<div className={cx("h-full w-full sm:flex sm:justify-center lg:justify-end")}>
							<div className={cx("flex flex-row w-full gap-3 sm:justify-center sm:flex-col xl:flex-row")}>
								<div className={cx("flex flex-row gap-16-d xl:items-end")}>
									<div className={cx("flex items-center")}>
										<Image width={200} height={200} alt="image" src={"/images/icons/socialMedia/instagram.png"} />
									</div>
									<p>Instagram</p>
								</div>
								<div className={cx("flex flex-row gap-16-d xl:items-end")}>
									<div className={cx("flex items-center")}>
										<Image width={200} height={200} alt="image" src={"/images/icons/socialMedia/youtube.png"} />
									</div>
									<p>Youtube</p>
								</div>
								<div className={cx("flex flex-row gap-16-d xl:items-end")}>
									<div className={cx("flex items-center")}>
										<Image width={200} height={200} alt="image" src={"/images/icons/socialMedia/linkedin.png"} />
									</div>
									<p>Linkedin</p>
								</div>
							</div>
						</div>
					</Container>
				</div>
				<Container className={cx("lg:w-[35%] py-4 lg:py-80-d")}>
					<div className={cx("h-full relative")}>
						<p className={cx("flex flex-row gap-40-d absolute bottom-0 w-full justify-center xl:justify-start")}>Copyright © 2024. All rights reserved</p>
					</div>
				</Container>
			</div>
			<div className={cx("h-[12.5vw] w-full relative border border-t-black")}>
				<Button className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">Book your cruise</Button>
				<GradientImage src="/images/dayak-ornamen.png" className="opacity-15 absolute z-0 top-0" />
			</div>
		</div>
	);
}

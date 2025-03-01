import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import Button from "../button";
import ImageSlider from "./ImageSlider";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";

const sliderImages = ["/images/boats/rahai.jpeg", "/images/boats/kumai.jpeg", "/images/boats/sekuyer.jpeg", "/images/boats/exterior/boat4.png"];

export default function BoatsOverview() {
	return (
		<Container className={cx("w-full h-full space-y-12 md:px-0")}>
			<div className={cx("text-center grid grid-cols-1 lg:grid-cols-2 gap-4 items-end justify-between relative sm:px-8 md:px-16")}>
				<div className="w-full flex flex-col gap-y-10 text-start">
					<p className="text-sm w-full font-bold">OUR BOATS</p>
					<h2 className={cx("text-subtitle font-prata")}>Boats Overview</h2>
				</div>
				<p className={cx("text-description lg:w-full text-start")}>Our fleet of purpose-built river cruisers provides the perfect blend of comfort and authenticity. Each boat is crafted to bring you closer to nature while offering modern amenities to make your journey unforgettable.</p>
			</div>
			<ImageSlider>
				{sliderImages.map((image, index) => (
					<CarouselItem>
						<div className={cx("lg:h-[46.875vw] w-full mt-64-d relative space-y-10 md:space-y-0")}>
							<div className={cx("w-full h-full flex flex-col gap-24-d justify-center md:items-center md:absolute md:z-20 md:text-white md:text-center md:px-32 md:py-8 md:justify-between lg:p-32")}>
								<div className="hidden space-y-3 md:block lg:space-y-6">
									<p>{index + 1}/4</p>
									<div className="flex items-center gap-6">
										<p>SWIPE</p>
										<div className="w-96 bg-white h-1 rounded-full">
											<div className={`h-full bg-orange-borneo rounded-full transition-all duration-300`} style={{ width: `${(index + 1) * (100 / sliderImages.length)}%` }}></div>
										</div>
										<p>{">>"}</p>
									</div>
								</div>
								<div className="w-full flex flex-col items-center justify-center gap-8">
									<p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>Rahai Pangun</p>
									<p className={cx("w-full text-description lg:w-[55%] xl:w-[50%]")}>Our flagship vessel, designed for immersive exploration in the heart of Borneo.</p>
								</div>
								<Button className="text-18-d hover:shadow-lg hover:scale-105 transition w-fit ">Explore Spirit of Kalimantan</Button>
							</div>

							<div className={cx("w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-screen")}>
								<div className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}></div>
								<Image src={image} alt="Image Cruise" className="w-full rounded-lg object-cover object-center md:rounded-none lg:h-screen" height={1000} width={1000} />
							</div>
						</div>
					</CarouselItem>
				))}
			</ImageSlider>
		</Container>
	);
}

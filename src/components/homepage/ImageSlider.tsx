import React from "react";
// import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Carousel, CarouselContent } from "../ui/carousel";

const ImageSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative w-full">
			<Carousel>
				<CarouselContent>{children}</CarouselContent>
				{/* <CarouselPrevious className="hidden absolute left-[10%] top-1/2 -translate-y-1/2 md:flex" />
                <CarouselNext className="hidden absolute right-[10%] top-1/2 -translate-y-1/2 md:flex" /> */}
			</Carousel>
		</div>
	);
};

export default ImageSlider;

import { tourData } from "@/constants/tour";

export const getAllTour = () => {
	return tourData;
};

export const getTourBySlug = (slug: string) => {
	return tourData.find((tour) => tour.slug === slug);
};

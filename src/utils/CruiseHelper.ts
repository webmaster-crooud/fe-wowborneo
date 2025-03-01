import { cruiseData } from "@/constants/cruise";

export const getAllCruises = () => {
	return cruiseData;
};

export const getCruiseBySlug = (slug: string) => {
	return cruiseData.find((cruise) => cruise.slug === slug);
};

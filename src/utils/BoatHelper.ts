import { BOAT } from "@/constants/boat";

export const getAllBoats = () => {
	return BOAT;
};

export const getBoatBySlug = (slug: string) => {
	return BOAT.find((cruise) => cruise.slug === slug);
};

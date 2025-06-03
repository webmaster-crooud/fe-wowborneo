import { cruiseData } from "@/constants/cruise";
import { ICruise, IDestination, IHighlightContent, IIncluded, IInformation } from "@/types/cruise";
export interface CruiseResponse {
	title?: string;
	slug?: string;
	subHeading?: string;
	duration?: string;
	price?: string;
	description?: string;
	destination?: IDestination[];
	destinationText?: string;
	cover: string;
	departure?: string;
	introduction?: {
		title?: string;
		text?: string;
	};
	highlight?: IHighlightContent[];
	included?: IIncluded[];
	information?: IInformation[];
	cta?: string;
}
export const getAllCruises = () => {
	return cruiseData;
};

export const getCruiseBySlug = async (slug: string): Promise<CruiseResponse> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/home/cruise/${slug}`);
	const { data } = await res.json();
	return data;
};

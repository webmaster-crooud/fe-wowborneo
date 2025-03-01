import { IDestination, IHighlightContent, IIncluded, IInformation } from "./cruise";

export interface ITour {
	title: string;
	slug: string;
	subHeading: string;
	duration: string;
	price: string;
	description: string;
	destination: IDestination[];
	destinationText: string;
	cover: string;
	introduction: {
		title: string;
		text: string;
	};
	highlight: IHighlightContent[];
	included: IIncluded[];
	information: IInformation[];
	cta: string;
}

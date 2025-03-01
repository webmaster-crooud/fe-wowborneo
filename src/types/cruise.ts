export interface ICruise {
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

// itenerary
export interface IDestination {
	id: number;
	title: string;
	days: string;
	cover: string;
	description: string;
}

export interface IHighlightContent {
	id: number;
	title: string | null;
	description: string;
	cover: string;
}

export interface IIncluded {
	title: string;
	description: string;
}

export interface IInformation {
	title: string;
	text: string;
}

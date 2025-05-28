export type Service = {
	title: string;
	description: string;
	image: string;
	price: string;
	duration: string;
};

export interface FilterProps {
	label: string;
	value: string;
}

export interface ParamsProps {
	params: { id: string };
}

export interface SearchParamsProps {
	searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
	params: { id: string };
	searchParams: { [key: string]: string | undefined };
}

export interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

export interface RemoveUrlQueryParams {
	params: string;
	keysToRemove: string[];
}

export interface FormattedPost {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	category: string;
	content: string;
	author: string;
	image: string;
	snippet: string;
}

export interface NavbarResponse {
	cruise: Array<{
		title: string;
		slug: string;
	}>;

	boat: Array<{
		name: string;
		slug: string | null;
	}>;
}

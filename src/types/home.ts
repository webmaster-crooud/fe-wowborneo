export interface HomePageResponse {
	cruise: Array<{
		title: string;
		slug: string;
		duration: string | null;
		departure: string | null;
		description: string;
		cover: string;
	}>;

	boat: Array<{
		name: string;
		slug: string | null;
		description: string;
		cover: string;
	}>;
}

import { createInstance, useInterceptors } from "@/lib/axios";

const instance = createInstance({
	baseURL: `${process.env.NEXT_PUBLIC_API}`,
});

const api = useInterceptors(instance);

const HOME = {
	getHomeData: () => {
		api.get(`/home`);
	},
};

export { HOME };

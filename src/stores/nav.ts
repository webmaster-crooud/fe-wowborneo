import { NavbarResponse } from "@/types";
import { atomWithQuery } from "jotai-tanstack-query";
export const navbarAtom = atomWithQuery<NavbarResponse>(() => ({
	queryKey: ["navbar"],
	queryFn: async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API}/home/navbar`);
		const { data }: { data: NavbarResponse } = await res.json();
		return data;
	},
}));

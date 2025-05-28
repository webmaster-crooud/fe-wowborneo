import Home from "@/components/homepage/Home";
import { HomePageResponse } from "@/types/home";
import React from "react";

export default async function Page() {
	const { data }: { data: HomePageResponse } = await fetch(`${process.env.NEXT_PUBLIC_API}/home`, {
		cache: "no-store", // Non-cached request
	}).then((res) => res.json());

	return <Home data={data} />;
}

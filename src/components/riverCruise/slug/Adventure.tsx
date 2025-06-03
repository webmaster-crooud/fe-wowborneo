import Container from "@/components/ui/Container";
import { cx } from "class-variance-authority";
import React from "react";
import AdventureCard from "./AdventureCard";
import { ICruise } from "@/types/cruise";

const Adventure = ({ title, highlight }: { title: string; highlight: ICruise["highlight"] }) => {
	console.log(highlight);
	return (
		<Container className="space-y-20 pt-2">
			<div className="space-y-4 lg:flex lg:items-end lg:gap-14">
				<p className={cx("font-prata text-subtitle")}>What Makes the {title} Special?</p>
				<p className="text-description lg:w-[100%]">Copy here vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. </p>
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{highlight?.map((data, index) => (
					<AdventureCard data={data} key={index} />
				))}
			</div>
		</Container>
	);
};

export default Adventure;

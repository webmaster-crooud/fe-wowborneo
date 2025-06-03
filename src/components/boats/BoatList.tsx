import React from "react";
import Container from "../ui/Container";
import { cx } from "class-variance-authority";
import GradientImage from "../ui/GradientImage";
import Button from "../button";
import { IFacility } from "@/types/boat";
import { useRouter } from "next/navigation";
import { SafeHTML } from "../SafeHTML";

type propsBoatList = {
	cover: string;
	name: string;
	description: string;
	facilities: IFacility[];
	slug: string;
	index: number;
};
export default function BoatList({ name, slug, cover, description, facilities, index }: propsBoatList) {
	const router = useRouter();
	return (
		<Container>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				<div className={cx("w-full aspect-[9/12] xl:aspect-square", `${index % 2 === 0 ? "order-first" : "order-last"}`)}>
					<GradientImage className="rounded-[16px]" src={cover} />
				</div>
				<div>
					<p className={cx("text-subtitle leading-tight font-prata ")}>{name}</p>
					<p className={cx("text-description leading-tight mt-6 w-full")} dangerouslySetInnerHTML={{ __html: description }}></p>
					<div className="grid grid-cols-1 gap-10 mt-10 xl:grid-cols-3">
						{facilities?.map((item) => {
							return (
								<div className="flex gap-5 items-center xl:flex-col xl:items-start">
									<div className={cx("w-10 h-10 aspect-square")}>
										<GradientImage src={String(item.icon)} />
									</div>
									<div className="flex flex-col justify-between p-0 items-start">
										<span className="text-sm font-bold tracking-wider w-full">{item.name}</span>
										<p dangerouslySetInnerHTML={{ __html: item.description }} />
									</div>
								</div>
							);
						})}
					</div>
					<Button onClick={() => router.push(`/boats/${slug}`)} className="text-12-d hover:shadow-lg hover:scale-105 transition w-fit mx-auto mt-10 sm:col-span-2">
						Explore {name}
					</Button>
				</div>
			</div>
		</Container>
	);
}
